import express from "express";
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./swagger.json";
import userRoutes from "./src/routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", userRoutes);

export default app;
