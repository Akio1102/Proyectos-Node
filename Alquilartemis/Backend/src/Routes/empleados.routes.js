import { Router } from "express";
import {
  getEmpleados,
  getEmpleadoID,
  postEmpleado,
  putEmpleado,
  deleteEmpleado,
} from "../Controllers/empleados.controllers.js";

const router = Router();

router.get("/api/empleados", getEmpleados);
router.get("/api/empleados/:id", getEmpleadoID);
router.post("/api/empleados", postEmpleado);
router.put("/api/empleados/:id", putEmpleado);
router.delete("/api/empleados/:id", deleteEmpleado);

export default router;
