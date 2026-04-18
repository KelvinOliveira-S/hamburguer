import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController.js";

const routes = Router();

routes.post("/", AvaliacaoController.create);
routes.get("/", AvaliacaoController.index);

export default routes;