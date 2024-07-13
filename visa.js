//To Create Loan we need to call the URL with (https://localhost:3000/api/loan_a_book/book_id/member_id)



const express = require('express');
const Sequelize = require('./dbConfiguration'); // Assuming this is your Sequelize instance
const Loans = require('./Models/Loans');
const Reservation = require('./Models/Reservations');
const router = express.Router();
const { Op } = require('sequelize');
const Books = require('./Models/Books');

router.get('/:id/:member_id', async (req, res) => {
    try {
        const books_id = parseInt(req.params.id);
        const members_id = parseInt(req.params.member_id);

        // Ensure the values are integers and not NaN
        if (isNaN(books_id) || isNaN(members_id)) {
            return res.status(400).json({ message: "Invalid book or member ID" });
        }

        // Check if there's a reservation for the specified book and member
        const reservation = await Reservation.findOne({
            where: {
                member_id: members_id,
                book_id: books_id
            }
        });

        // If no reservation found, return 404
        if (!reservation) {
            return res.status(404).json({ message: "No reservation found for this book by this person" });
        }

        // Start a transaction to handle loan creation and reservation deletion
        await Sequelize.transaction(async (t) => {
            try {
                // Fetch the earliest reservation date for the given book
                const earliestReservation = await Reservation.findOne({
                    where: {
                        book_id: books_id
                    },
                    order: [['reservation_date', 'ASC']],
                    // attributes: ['reservation_date'],
                    transaction: t
                });
                // console.log(earliestReservation)
                console.log(earliestReservation.member_id)

                // Check if the earliest reservation is not null and belongs to the current member
                if (earliestReservation && earliestReservation.member_id !== members_id) {
                    return res.status(404).json({ message: "This book is already reserved by someone else" });
                }
                // console.log(earliestReservation.member_id)

                // Create a loan record
                const loan = await Loans.create({
                    member_id: members_id,
                    book_id: books_id,
                    loan_date: new Date(), // Adjust as necessary
                    due_date: new Date(new Date().setDate(new Date().getDate() + 14)) // Example: 2 weeks from now
                }, { transaction: t });

                // Delete the reservation
                await Reservation.destroy({
                    where: {
                        member_id: members_id,
                        book_id: books_id
                    },
                    transaction: t
                });

                // Send success response
                res.status(200).json({
                    message: "Loan created and reservation deleted successfully",
                    // reservation: reservation,
                    // loan: loan
                });

            } catch (error) {
                // If any error occurs within the transaction, rollback changes
                await t.rollback();
                throw error; // Throw error to be caught by outer try-catch block
            }
        });

    } catch (error) {
        // Handle any error that occurred during the request processing
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;