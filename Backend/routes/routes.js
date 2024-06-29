/* This routes file is created to declog the main Server.js file and have all our routes in the same place */
// Setting up the express package
const express = require('express')

// Importing the Workout controllers
const { GetWorkouts, GetOneWorkout, CreateWorkout, DeleteWorkout, UpdateWorkouts } = require('../Controllers/WorkoutsControllers')

// This creates an instace of the router (confusing... i know)
const router = express.Router()


// The routes can now be set up here and later exported to the main file
/*ROUTES*/

// To get all workouts
router.get('/', GetWorkouts)

// To get a singular workout
router.get('/:id', GetOneWorkout)

// To post a workout
router.post('/', CreateWorkout)

// To delete a workout
router.delete('/:id', DeleteWorkout)

// To update singular route
router.patch('/:id', UpdateWorkouts)

// Exporting the router
module.exports = router