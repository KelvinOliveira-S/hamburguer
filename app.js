import express from 'express';
import sequelize from "./models/Database.js";

import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from "./routes/avaliacaoRoutes.js";
import pedidoRoutes from "./routes/pedidosRoutes.js";
import produtoRoutes from "./routes/produtoRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API rodando 🚀');
});

// ROTAS
app.use('/categorias', categoriaRoutes);
app.use("/avaliacoes", avaliacaoRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/produtos", produtoRoutes);

// 🔥 CONEXÃO COM BANCO
sequelize.authenticate()
  .then(() => {
    console.log("Banco conectado com sucesso 🚀");
  })
  .catch(err => {
    console.error("Erro ao conectar no banco:", err);
  });

app.listen(port, () => {
    console.log(`Servidor: http://localhost:${port}`);
});