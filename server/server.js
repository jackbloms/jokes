
//1. import all dependencies
const express = require("express")
const app = express()

//2.1 mongoose config
require("./config/mongoose.config");

//2.2 express configs
app.use(express.json()) 
app.use(express.urlencoded({extended: true }))

//3. getting the routes
require("./routes/jokes.routes")(app)

//4. listen to the port
app.listen(8000, () => console.log("The server is fired up on port 8000"))