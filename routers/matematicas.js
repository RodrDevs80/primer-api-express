import express from "express";
import { infoCursos } from "../datos/cursos.js";

const { matematicas } = infoCursos;
const routerMatematicas = express.Router();

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
}).get("/:tema", (req, res) => {
  //parametros 
  const tema = req.params.tema;
  const resultado = matematicas.filter(item => item.tema === tema);
  resultado.length !== 0 ? res.send(JSON.stringify(resultado)) : res.status(404).send(`No se encontraron cursos de ${tema}`);
})

export default routerMatematicas;