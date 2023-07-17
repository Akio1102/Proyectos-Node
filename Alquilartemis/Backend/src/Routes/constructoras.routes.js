import { Router } from "express";
import {
  getConstructoras,
  getConstructoraID,
  postConstructora,
  putConstructora,
  deleteContructora,
} from "../Controllers/constructoras.controllers.js";

const router = Router();

router.get("/api/constructoras", getConstructoras);
router.get("/api/constructoras/:id", getConstructoraID);
router.post("/api/constructoras", postConstructora);
router.put("/api/constructoras/:id", putConstructora);
router.delete("/api/constructoras/:id", deleteContructora);

export default router;
