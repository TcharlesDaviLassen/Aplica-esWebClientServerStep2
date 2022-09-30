import { Sequelize, DataTypes, Model } from 'sequelize';
import  sequelize  from "../db/sequelize";

class Usuario extends Model {

  static async localizaUsuario(email: string, senha: string) {
    return await Usuario.findOne({
      where: {
        email: email,
        senha: senha
      }
    });

  }
}

Usuario.init(
  {
    nome: {
      type: DataTypes.STRING
    },
    senha: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Sessao',
    freezeTableName: true,
    tableName: 'sessao',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'alteracao'
  });


  export default Usuario;