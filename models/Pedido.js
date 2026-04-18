import { DataTypes, Model } from "sequelize";

export default class Pedido extends Model {
  static initModel(sequelize) {
    Pedido.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        mesa: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        nome_cliente: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'pedidos',
        timestamps: true,
        paranoid: true
      }
    );
  }

  static associate(models) {
    Pedido.hasMany(models.Entrega, {
      foreignKey: 'pedido_id',
      as: 'entregas'
    });

    Pedido.hasMany(models.Avaliacao, {
      foreignKey: 'pedido_id',
      as: 'avaliacoes'
    });
  }
}