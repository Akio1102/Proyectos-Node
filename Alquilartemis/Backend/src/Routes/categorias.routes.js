import { Router } from "express";
import {
  getCategorias,
  getCategoriaID,
  postCategoria,
  putCategoria,
  deleteCategoria,
} from "../Controllers/categorias.controllers.js";

const router = Router();

router.get("/api/categorias", getCategorias);
router.get("/api/categorias/:id", getCategoriaID);
router.post("/api/categorias", postCategoria);
router.put("/api/categorias/:id", putCategoria);
router.delete("/api/categorias/:id", deleteCategoria);

export default router;
