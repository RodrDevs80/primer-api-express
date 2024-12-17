import express from "express";
import { infoCursos } from "../datos/cursos.js";

const { programacion } = infoCursos;
const routerProgramacion = express.Router();
//Middleware
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
}).get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const cursoEsp = programacion.filter(item => item.tema === lenguaje);

  if (cursoEsp.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  //query parametros ?ordenar=vistas
  if (req.query.ordenar === "vistas") {
    const resultadosOrdenados = cursoEsp.sort((a, b) => b.vistas - a.vistas);
    return res.send(JSON.stringify(resultadosOrdenados));
  }
  res.send(JSON.stringify(cursoEsp))

}).get("/buscar-por-id/:id", (req, res) => {
  const id = Number(req.params.id);
  const resultado = programacion.find(item => item.id === id) ?? "El ID no corresponde a ningún curso de programación";
  typeof resultado !== "string" ? res.send(JSON.stringify(resultado)) : res.status(404).send(resultado)
}).get("/:lenguaje/:nivel", (req, res) => {
  const { lenguaje, nivel } = req.params;
  const resultado = programacion.filter(item => item.tema === lenguaje && item.nivel === nivel);
  resultado.length !== 0 ? res.send(JSON.stringify(resultado)) : res.status(404).send(`No se encontraron cursos de ${lenguaje} en nivel ${nivel}`);
}).post("/", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.status(201).send(JSON.stringify(programacion));
}).put("/:id", (req, res) => {
  const id = req.params.id;
  let cursoAActualizar = req.body;
  const indice = programacion.findIndex(item => item.id === Number(id));
  //si no se encuentra retorna -1;
  if (indice >= 0) {
    programacion[indice] = cursoAActualizar;
  } else {
    return res.status(404).send("El id ingresado no existe!");
  }
  res.send(JSON.stringify(programacion));
}).patch("/:id", (req, res) => {
  const id = req.params.id;
  let propiedadActualizada = req.body;
  const indice = programacion.findIndex(item => item.id === Number(id));
  if (indice >= 0) {
    //investigar un poco mas!
    Object.assign(programacion[indice], propiedadActualizada);
  } else {
    return res.status(404).send("El id ingresado no existe!");
  }
  res.send(JSON.stringify(programacion));
}).delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(item => item.id === Number(id));
  if (indice >= 0) {
    programacion.splice(indice, 1);
  } else {
    res.status(404).send("El id ingresado no existe!");
  }
  //investigar si send envía un JSON??
  res.send(JSON.stringify(programacion));
})

export default routerProgramacion;