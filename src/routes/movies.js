const { Router } = require("express")
const router= Router()

//esquema de mongo
const movieSchema = require("../models/movie")
const movie = require("../models/movie")

// router.get("/",(req,res)=>{
//     res.json({"hola": "hola"})
// })
// consult collection
router.get("/", (req, res) => {
    movieSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

})

//New Movie
router.post("/movie", (req, res) => {
    const movie = movieSchema(req.body);
    movie
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// consult by id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    movieSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

});


// Ruta para actualizar una película por su ID
router.put('/movie/:id', (req, res) => {
    const {id} = req.params; 
    const {pelicula, genero, director, año} = req.body
    movieSchema.updateOne({_id: id}, {
        $set  : {pelicula, genero, director, año}
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id
router.delete("/movie/:id", (req, res) => {
    const {id} = req.params; 
    movieSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 


module.exports = router