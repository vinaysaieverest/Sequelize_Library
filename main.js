const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfiguration')
const authors = require('./Models/Authors');
const books = require('./Models/Books');
const members = require('./Models/Members');
const loans = require('./Models/Loans');
const reservations = require('./Models/Reservations');

// Create a new Sequelize instance


const vinaysai = async()=>{
  await sequelize.authenticate();
  console.log("conncetion established");
  await sequelize.sync({force:true});
  console.log("data base created ");
}
vinaysai();
module.exports = { vinaysai };