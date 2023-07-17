import { Router } from "express";
import {
  getProductosXCotizaciones,
  getProductoXCotizacionID,
  postProductoXCotizacion,
  putProductoXCotizacion,
  deleteProductoXCotizacion,
} from "../Controllers/productosXcotizaciones.controllers.js";

const router = Router();

router.get("/api/productos_x_cotizaciones", getProductosXCotizaciones);
router.get("/api/productos_x_cotizaciones/:id", getProductoXCotizacionID);
router.post("/api/productos_x_cotizaciones", postProductoXCotizacion);
router.put("/api/productos_x_cotizaciones/:id", putProductoXCotizacion);
router.delete("/api/productos_x_cotizaciones/:id", deleteProductoXCotizacion);

export default router;
