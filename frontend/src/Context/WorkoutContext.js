/* The create context package allows us to essentially create "global states"*/
import { createContext, useReducer } from "react";

// Since this context would be used in other files it would be exported
export const WorkoutContext = createContext()

// The workoutsReducer function takes in the previous value of the state and updates (takes an action) based off the dispatch function
export const workoutsReducer = (state,action) => {

    /* The switch statement checks the action type of dispatch function and then dependent on the type i.e (SET_WORKOUTS, CREATE_WORKOUTS)
      changes the state to the given payload.
    */
    switch(action.type){
        case 'SET_WORKOUTS':
            return{
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                // In this case we create a single workout and then spread in the existing workout into the array
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
                // In this case we delete a single workout 
            return{
                // If the workout id is equal to the id passes through the payload, it should be removed from the global state
                workouts: state.workouts.filter((w)=> w._id !== action.payload._id)

            }
        default:
            return state
    }

}

/* To provide this context to other components within the appliaction context tree a context provider is created */
// The children prop refers to the component we have wrapped in the context provide (app.js)
export const WorkoutContextProvider = ({ children }) => {

    // The useReducer hook works essentially a useState hook as well
    const [state, dispatch] = useReducer(workoutsReducer, {workouts: null})


    return (
        <>
        {/* Here the components which need the context would be wrapped (since basically the entire application needs the context provider 
            The app.js file is what would be wrapped in the contextprovider), components that have been wrapped have access to what is
            cointained in the value property */}
        <WorkoutContext.Provider value={{...state,dispatch}}>
            { children }
        </WorkoutContext.Provider>
        
        </>
        
    )
}
