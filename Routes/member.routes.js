const express = require('express');
const router = express.Router();
const Members = require('../Models/Members')
// Get all authors
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const members = await Members.findAll();
        if (members.length === 0) return res.status(404).json({ message: "No Members Found" });
        res.json({Member: members});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one BOOK
router.get('/:id', async (req, res) => {
    try {
        const members = await Members.findByPk(req.params.id);
        if (members === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(members);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new BOOK
router.post('/', async (req, res) => {
    try {
        const members = await Members.create(req.body);
        res.json(members);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an BOOK
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Members.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedMember = await Members.findByPk(req.params.id);
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: "Members Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an BOOK
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Members.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Member Deleted" });
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;