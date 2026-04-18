import sequelize from './Database.js';

import Categoria from './Categoria.js';
import Produto from './Produto.js';
import Pedido from './Pedido.js';
import Entrega from './Entrega.js';
import Avaliacao from './Avaliacao.js';

const db = {
  Categoria,
  Produto,
  Pedido,
  Entrega,
  Avaliacao
};

// 🔥 inicializa models com sequelize
Object.values(db).forEach(model => {
  if (model.initModel) {
    model.initModel(sequelize);
  }
});

// 🔥 associações
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;