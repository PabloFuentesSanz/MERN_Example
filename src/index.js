const express = require("express");
const morgan = require("morgan"); //Ver las peticiones del servidor por consola
const path = require("path");
const { mongoose } = require("./database");
const app = express();

//Settings
/*Configuramos el puerto por defecto del SO en el que desplegamos la app
o por defecto el 3000*/
app.set("port", process.env.PORT || 3000);

//Middlewares (Funciones que se ejecutan antes de llegar a las rutas)
app.use(morgan("dev")); //dev es el formato con el que se ejecuta
app.use(express.json()); //para que el servidor entienda json

//Routes
app.use("/api/tasks", require("./routes/task.routes"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Start server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
