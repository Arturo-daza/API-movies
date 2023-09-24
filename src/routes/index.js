const { Router } = require("express")
const router= Router()


router.get('/', (req, res) =>{
    res.json({"titulo": "el entierro"})
})


module.exports = router