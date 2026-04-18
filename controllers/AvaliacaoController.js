import Avaliacao from "../models/avaliacao.js";

class AvaliacaoController {

  async create(req, res) {
    try {
      const { nota, pedido_id } = req.body;

      if (nota < 1 || nota > 5) {
        return res.status(400).json({ error: "Nota deve ser entre 1 e 5" });
      }

      const avaliacao = await Avaliacao.create({ nota, pedido_id });

      return res.status(201).json(avaliacao);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async index(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll();
      return res.json(avaliacoes);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new AvaliacaoController();