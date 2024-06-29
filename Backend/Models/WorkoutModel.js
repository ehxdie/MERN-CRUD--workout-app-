// We must first require the mongoose dependency
const mongoose = require('mongoose')

// Creating a new schema
const Schema = mongoose.Schema

// Invoking the schema
const workoutschema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required:true
    }
}, { timestamps: true })

// The model is essentially creating a collection with the properties listed in the schema
module.exports = mongoose.model('Workout', workoutschema)