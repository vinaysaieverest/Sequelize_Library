const { DataTypes } = require('sequelize');
const sequelize = require('./dbConfiguration')
const authors = require('./Models/Authors');
const books = require('./Models/Books');
const members = require('./Models/Members');
const loans = require('./Models/Loans');
const reservations = require('./Models/Reservations');
const { authorsData, booksData, membersData, loansData, reservationsData } = require('./Data');

// Create a new Sequelize instance
const vinaysai = async()=>{
  try {
  await sequelize.authenticate();
  console.log("conncetion established");
  await sequelize.sync({force:true});
  console.log("data base created ");

    await authors.bulkCreate(authorsData);
    await books.bulkCreate(booksData);
    await members.bulkCreate(membersData);
    await loans.bulkCreate(loansData);
    await reservations.bulkCreate(reservationsData);
    console.log("data inserted sucessfully");
      const allLoans = await loans.findAll();
       console.log("Loans Table Contents:");
       console.table(allLoans.map(loan => loan.toJSON()))
}
catch (error) {
  console.error('Unable to connect to the database:', error);
}

}
vinaysai();
module.exports = { vinaysai };