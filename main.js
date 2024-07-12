const { DataTypes } = require('sequelize');
const express = require('express');
const app = express();
const sequelize = require('./dbConfiguration')
const authors = require('./Models/Authors');
const books = require('./Models/Books');
const members = require('./Models/Members');
const loans = require('./Models/Loans');
const reservations = require('./Models/Reservations');
const authorRoutes = require('./Routes/authors.routes');
const booksRoutes = require('./Routes/book.routes');
const memberRoutes = require('./Routes/member.routes');
const reservationRoutes = require('./Routes/reservations.routes');
const loanRoutes = require('./Routes/loan.routes');
const Authors_q = require('./Queries/Author.queries')
const Loans_q = require('./Queries/loan.queries')
const members_q = require('./Queries/members.queires')
const loan_a_book = require('./Transactions/Loan_reservation')

// const Authors_q = require('./Queries/Author.queries')
// const Authors_q = require('./Queries/Author.queries')
const { authorsData, booksData, membersData, loansData, reservationsData } = require('./Data');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Create a new Sequelize instance
const vinaysai = async () => {
  try {
    await sequelize.authenticate();
    console.log("conncetion established");
    await sequelize.sync({ force: true });
    console.log("data base created ");


    await authors.bulkCreate(authorsData);
    await books.bulkCreate(booksData);
    await members.bulkCreate(membersData);
    await loans.bulkCreate(loansData);
    await reservations.bulkCreate(reservationsData);
    console.log("data inserted sucessfully");

  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
app.use('/api/ping', ((req, res) => {
  res.json({ message: 'pong' });
}));



const CRUD = async () => {
  try {
    app.use('/api/authors', authorRoutes);
    app.use('/api/loans', loanRoutes);
    app.use('/api/members', memberRoutes);
    app.use('/api/reservations', reservationRoutes);
    app.use('/api/books', booksRoutes);


  }
  catch (error) {
    console.error(error)
  }

}

const Queries = async () => {
  try {
    app.use('/api/authors', Authors_q),
    app.use('/api/loans', Loans_q),
    app.use('/api/member/',members_q);
    app.use('/api/loan_a_book',loan_a_book)


  }
  catch (error) {
    console.error(error)
  }
}





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
vinaysai();
// CRUD();
Queries();
module.exports = { vinaysai };