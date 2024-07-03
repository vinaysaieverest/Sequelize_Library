const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizedb', 'visa', 'visa', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false
  
  });
  module.exports = sequelize;