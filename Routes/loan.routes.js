const express = require('express');
const router = express.Router();
const Loans = require('../Models/Loans')
// Get all loan
router.get('/', async (req, res) => {
    try {
        // Fetch all loan include loans
        const loans = await Loans.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No Loans Found" });
        res.json({Member: loans});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one loan
router.get('/:id', async (req, res) => {
    try {
        const loans = await Loans.findByPk(req.params.id);
        if (loans === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loans);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new loan
router.post('/', async (req, res) => {
    try {
        const loans = await Loans.create(req.body);
        res.json(loans);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an loan
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Loans.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedLoan = await Loans.findByPk(req.params.id);
            res.json(updatedLoan);
        } else {
            res.status(404).json({ message: "Loans Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an loan
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Loans.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;