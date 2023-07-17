import { Router } from "express";
import {
  getCotizaciones,
  getCotizacionID,
  postCotizacion,
  putCotizacion,
  deleteCotizacion,
} from "../Controllers/cotizaciones.controllers.js";

const router = Router();

router.get("/api/cotizaciones", getCotizaciones);
router.get("/api/cotizaciones/:id", getCotizacionID);
router.post("/api/cotizaciones", postCotizacion);
router.put("/api/cotizaciones/:id", putCotizacion);
router.delete("/api/cotizaciones/:id", deleteCotizacion);

export default router;
