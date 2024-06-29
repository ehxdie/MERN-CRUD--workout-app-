/* This file holds all the database interactions basically for each route*/
// Importing the workout model
const Workout = require('../Models/WorkoutModel')

// Importing the mongoose dependency in-order to check if id provided is valid
const mongoose = require('mongoose')

// Getting all Workouts

const GetWorkouts = async (req,res) => {
    try{
        const workouts = await Workout.find({})
        res.status(200).json(workouts)
    } catch (err){
        res.status(400).json({err:err.message})
    }
}

// Getting one workout 

const GetOneWorkout = async(req,res) => {
    // Using the id value provided by the user through the req.params property
    const { id } = req.params

    // This checks if the id provided is valid to ensure no internal error occurs 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mssg:'Id is invalid'})
    }

    // The database is checked for a document with the provided id and the document with the corresponding id is returned
    const workout = await Workout.findById(id)
    if(!workout){
        res.status(400).json({mssg:'No document with such id name'})
    } else {
        res.status(200).json(workout)
    }
}

// Creating a Workout

const CreateWorkout = async (req,res) => {
    // collecting the title,reps,load property from the request body
    const {title,reps,load} = req.body
    try{
        // Using the information collected from the req.body a document is then created using the Workout model
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }catch (err){
        res.status(400).json({err:err.message})
    }
}

// Deleting a Workout 

const DeleteWorkout = async (req,res) => {
    // Getting id of document user intends to delete
    const { id } = req.params

    // Checking if id provided is valid 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mssg:'Id is invalid'})
    }
    // The database is checked for the document with the corresponding id and then deleted
    const workout = await Workout.findByIdAndDelete({_id:id})
    if(!workout){
        res.status(400).json({mssg:'No document with such id name'})
    } else {
        res.status(200).json(workout)
    }
}

// Updating a workout

const UpdateWorkouts = async (req,res) => {
    // Getting id of document user intends to delete
    const { id } = req.params

    // Checking if id provided is valid 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mssg:'Id is invalid'})
    }
    // The database is checked for the document with the corresponding id and then updated
    // The findbyidandupdate method take two arguments, the id, and the changes which would be found in the req.body
    const workout = await Workout.findByIdAndUpdate({_id:id}, {...req.body})

    if(!workout){
        res.status(400).json({mssg:'No document with such id name'})
    } else {
        res.status(200).json(workout)
    }
}

module.exports = { GetWorkouts, GetOneWorkout, CreateWorkout, DeleteWorkout, UpdateWorkouts }