const express = require("express")
const app = express(); 
const morgan = require ("morgan")
const movieRoutes = require("./routes/movies");

const mongoose = require("mongoose");



// settings
require('dotenv').config();
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 2)

// middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Routes
app.use("/api/movies/", movieRoutes)


//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));


// conexión al puerto
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
})