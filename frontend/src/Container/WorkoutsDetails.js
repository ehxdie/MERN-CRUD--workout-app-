import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// Here the workout details are passed as props and the properties in each document displayed
function WorkoutsDetails(props) {
    // The dispatch function is imported from the context and used to remove a deleted workout from the global state
    const { dispatch } = useWorkoutContext()

    // This function deletes a workout from the database  
    const Delete = async () => {
      const response = await fetch('http://localhost:8080/workouts/'+ props.workout.id,{
      method:"DELETE"
    })

    // Chill
    const json = await response.json()

    if(response.ok){
      dispatch({type:'DELETE_WORKOUT', payload:json})
      
    }

  }
 
  return (
    <div className='workout-details'>
       <h4>{props.workout.title}</h4>
       <p><strong>Load(kg): </strong>{props.workout.load}</p>
       <p><strong>reps: </strong>{props.workout.reps}</p>
       {/* <p>{formatDistanceToNow(new Date(props.workout.createdAt), { addSuffix:true })}</p>  */}
       <span onClick={Delete}>Delete</span>
    </div>
  )
}

export default WorkoutsDetails