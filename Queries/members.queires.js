const express = require('express');
const router = express.Router();
const Books = require('../Models/Books');
const Members = require('../Models/Members');
const Loans = require('../Models/Loans');
const { includes } = require('lodash');
const Reservation = require('../Models/Reservations');
// const { includes } = require('lodash');

// Get all loans
router.get('/', async (req, res) => {
    try {
        // Fetch all loans include books
        const member_loans = await Members.findAll({include:Loans}

        )
           
        if (member_loans.length === 0) 
            return res.status(404).json({ message: "No Loans Found" });
        res.json({Member_Loans:member_loans});
        const member_reservation = await Members.findAll({include:Reservation})
        if (member_reservation.length === 0) 
            return res.status(404).json({ message: "No Reservation Found" });
        res.json({Member_Reservation:member_reservation});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
router.get('/loans', async (req, res) => {
    try {
        // Fetch all loans include books
        const member_reservation = await Members.findAll({include:Reservation})
        if (member_reservation.length === 0) 
            return res.status(404).json({ message: "No Reservation Found" });
        res.json({Member_Reservation:member_reservation});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
router.get('/:id',async(req,res)=>{
    try{
        const member = await Members.findByPk(req.params.id,{include:Loans},{include:Reservation});
        if(member.length === 0)
            return res.status(404).json({ message: "No Reservation  and Loan Found" });
        res.json({Member_Details:member});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
    
})
module.exports = router;