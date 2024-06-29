import { WorkoutContext } from "../Context/WorkoutContext";
import { useContext } from "react";

/* This useworkoutcontext passes returns the value of the context , gotten through the usecontext hook (which already returns the value of the 
    context, which is the value property in the workoutcontext.provider component), 

*/
export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)
    return context
}