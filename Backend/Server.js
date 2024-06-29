/* A .env file should be created in order to store environmental variables such as
   Such as the PORT = 3000   
*/

/*PACKAGES*/
//The express middleware is imported 
const express = require('express')
const cors = require('cors');
//The route instance is being imported here
const workoutRoutes = require('./routes/routes')

// Importing the mongoose dependency
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

//The dotenv package is imported and the .config() method attaches the variables to the process i.e process.env.PORT  
require('dotenv').config()


// The express app is fired up here
const app = express()

/* Middleware
    The app.use middleware logs the request path and method onto to console, and the next() function is stated
    to ensure that requests are forwarded
*/

// This checks incoming requests to see if any data comes with the requests and then passes it to the database or soo
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// // Setting up vercel hosting
// app.use(cors(
//     {
//         origin: [https://mern-application.vercel.app],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ))

app.use(cors());
//Routes (Since the routes are set up in an external file the app.use() is used to access the routes)
app.use('/api/workouts',workoutRoutes)

// Listening in for connections and Connecting to the mongo db database
mongoose.connect(process.env.Mongo_URL)
    .then(()=> {
        app.listen(process.env.PORT,() => 
        {
            console.log('listening on port 3000...')
    })
        })
    .catch((err)=>{
        console.log(err)
    }) 
  // Backend Algo = Model(shecma) Controller Routes Server 

// vercel setup

module.exports = app;