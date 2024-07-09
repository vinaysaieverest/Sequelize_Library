const express = require('express');
const router = express.Router();
const Reservations = require('../Models/Reservations');
// Get all Reservations
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const reservations = await Reservations.findAll();
        if (reservations.length === 0) return res.status(404).json({ message: "No Books Found" });
        res.json({Reservation: reservations});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one Reservation
router.get('/:id', async (req, res) => {
    try {
        const reservations = await Reservations.findByPk(req.params.id);
        if (reservations === null) {
            return res.status(404).json({ message: "Books Not Found" });
        }
        res.json(reservations);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new Reservation
router.post('/', async (req, res) => {
    try {
        const reservations = await Reservations.create(req.body);
        res.json(reservations);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an Reservation
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Reservations.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedReservation = await Reservations.findByPk(req.params.id);
            res.json(updatedReservation);
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an Reservation
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Reservations.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;