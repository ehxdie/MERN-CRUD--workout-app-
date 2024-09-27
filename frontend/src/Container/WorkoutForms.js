import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
// This page allows the users to input their own workouts

function WorkoutForms() {
    // To ensure the global state is uptodate with the database without refreshing
    const { dispatch } = useWorkoutContext()

    // Each possible property of the database document that the user can input is gievn its own state
    const [title,settitle] = React.useState('')
    const [load,setload] = React.useState('')
    const [reps,setreps] = React.useState('')
    // Error states
    const [error,seterror] = React.useState(null)


    // The handlesubmit function will be responsible for contacting the backend and submitting the user input
    const handlesubmit = async (e)=> {
        // The preventDefault function ensures that the form does refresh ????
        e.preventDefault()

        // The workout variable holds the dummy data we would like to post to the backend
        const workout = {title,load,reps}

        // This sends a post request to the backend api with the workout dummy data as the body
        const response = await fetch('https://rust-backend-vave.onrender.com/workouts',{
            method:'POST',
            body: JSON.stringify(workout),
            headers: {
                // What type of data is being sent using the POST request
                'Content-Type':'application/json'
            }

        })

        // Whenever we send a POST request we get a response (Which is basically the data we just sent)    
        const json = await response.json()
        console.log(json);
        
        // Checking if the POST requests was handled without any error
        if(!response.ok){
            seterror(json.error)
        } else{
            // If there are no errors then the states should basically be reset 
            settitle('')
            setload('')
            setreps('')
            seterror(null)
            console.log('Workout Added',json)
        
            dispatch({type:'CREATE_WORKOUT', payload:json})
        }
    }

    return (
    <form className='create' onSubmit={handlesubmit}>
        <h3>Add a Workout</h3>
        {/*The form layout for one property is seen below 
            The type defines the type of data expected, and onchange of the input field, the value of the title state
            is changed to reflect the user input.
            Also you would always want the value of the input to be dependent on the state thats why
                value={state}
        */}
        <label>Exercise Title:</label>
        <input 
        type='text'
        onChange={(e)=> settitle(e.target.value)}
        value={title}
        />

        <label>Load(kg):</label>
        <input 
        type='number'
        onChange={(e)=> setload(e.target.value)}
        value={load}
        />

        <label>Reps:</label>
        <input 
        type='number'
        onChange={(e)=> setreps(e.target.value)}
        value={reps}
        />

        <button>Add Workout</button>
        
    </form>
  )
}

export default WorkoutForms