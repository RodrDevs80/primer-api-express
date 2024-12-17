import express from "express";
import { infoCursos } from "./datos/cursos.js";
import routerProgramacion from "./routers/programacion.js";
import routerMatematicas from "./routers/matematicas.js";

const app = express();
//Routers
app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos/matematicas", routerMatematicas);
//Routing
app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express 💻 ✅.");
}).get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el servidor ${PORT}...`);
})
