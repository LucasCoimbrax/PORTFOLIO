// Importação
const Sequelize = require("sequelize");
const database = require("../config/bd");

const cadaster = database.define("Cadasters", {
  Cliente: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },

  Descricao: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },

  TypeCall: {
    type: Sequelize.STRING(50),
  }
});

module.exports = cadaster;
