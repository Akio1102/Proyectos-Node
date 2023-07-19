import { Router } from "express";
import CamisasRoutes from "./camisas.routes.js";
import CiclasRoutes from "./ciclas.routes.js";
import CiclistasRoutes from "./ciclistas.routes.js";
import EquiposRoutes from "./equipos.routes.js";
import EtapasRoutes from "./etapas.routes.js";
import PremiosRoutes from "./premios.routes.js";

const router = Router();

router.use(CamisasRoutes);
router.use(CiclasRoutes);
router.use(CiclistasRoutes);
router.use(EquiposRoutes);
router.use(EtapasRoutes);
router.use(PremiosRoutes);

export default router;
