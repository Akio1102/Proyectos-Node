import { Router } from "express";
import {
  getProductos,
  getProductoID,
  postProducto,
  putProducto,
  deleteProducto,
} from "../Controllers/productos.controllers.js";

const router = Router();

router.get("/api/productos", getProductos);
router.get("/api/productos/:id", getProductoID);
router.post("/api/productos", postProducto);
router.put("/api/productos/:id", putProducto);
router.delete("/api/productos/:id", deleteProducto);

export default router;
