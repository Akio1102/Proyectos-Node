import express from "express";
import categoriasRoutes from "./Routes/categorias.routes.js";
import constructorasRoutes from "./Routes/constructoras.routes.js";
import cotizacionesRoutes from "./Routes/cotizaciones.routes.js";
import empleadosRoutes from "./Routes/empleados.routes.js";
import productosRoutes from "./Routes/productos.routes.js";
import productosXcotizacionesRoutes from "./Routes/productosXcotizaciones.routes.js";

const app = express();
const puerto = 4000;

app.set("PORT", puerto);
app.use(express.json());
app.use(categoriasRoutes);
app.use(constructorasRoutes);
app.use(cotizacionesRoutes);
app.use(empleadosRoutes);
app.use(productosRoutes);
app.use(productosXcotizacionesRoutes);
export default app;
