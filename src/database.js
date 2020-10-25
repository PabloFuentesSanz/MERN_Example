const mongoose = require("mongoose");
const URI = "mongodb://localhost/mern-app";

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connectes"))
  .catch((err) => console.log(err));

module.exports = mongoose;
