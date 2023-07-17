import { Router } from "express";
import {
  getAcciones,
  postAcciones,
} from "../Controllers/Acciones.controllers.js";

const router = Router();

router.get("/api/acciones", getAcciones);
router.post("/api/acciones", postAcciones);

export default router;
