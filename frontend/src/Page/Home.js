import React from 'react'
import { useEffect } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

//Components
import WorkoutsDetails from '../Container/WorkoutsDetails'
import WorkoutForms from '../Container/WorkoutForms'


function Home() {
    // This creates a workout state and a function (dispatch) for setting the state
    const {workouts, dispatch} = useWorkoutContext()

    // The useEffect hook basically runs a function whenever the component is loaded
    // Since we are fetching the workout data from the backend we would want the fetching func to be asynchronous 
    useEffect(() => {
        // The Fetchworkouts functions fetches data from the backend and stores it in the response variable/
        const Fetchworkouts = async () => {
            /* To ensure that react is able to fetch the data the localhost/3000 should be removed from the fetch argument
             and added as a proxy in the package.json file*/
            const response = await fetch('http://localhost:8080/workouts')
            const json = await response.json()

            // If no error occurs when fetching the data then set the workouts variable to the json gotten using the dispatch function
            if (response.ok){
                dispatch({type:'SET_WORKOUTS', payload:json})
            }
        }

        Fetchworkouts()

    }, [])

  return (
    <div className='home'>
        <div className='workouts'>

            {/* This is a ternary operator that checks if the workouts variable is empty if not then maps through it 
            and displays the title in each workout document*/}
            {workouts && workouts.map((workout) => (
                <WorkoutsDetails key={workout.id} workout={workout}/>
            ))}

        </div>
        <WorkoutForms/>
    </div>
  )
}

export default Home