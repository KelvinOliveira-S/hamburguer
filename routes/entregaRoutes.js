import express from "express";
import EntregaController from "../controllers/EntregaController.js";

const router = express.Router();

router.get("/", EntregaController.index);
router.get("/:id", EntregaController.show);
router.post("/", EntregaController.store);
router.put("/:id", EntregaController.update);
router.delete("/:id", EntregaController.destroy);

export default router;