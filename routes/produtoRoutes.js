import express from "express";
import db from "../models/index.js";

const { Produto } = db;

const router = express.Router();

router.get("/", async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

router.post("/", async (req, res) => {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
});

export default router; // 🔥 ESSENCIAL