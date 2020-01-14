const express = require("express");
const app = express();

const hbs = require("hbs");
require("./helpers/helpers");

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/view/parciales");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Cristian"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Escuchando peticiones en el puerto 3000");
});
