const express = require('express');
const router = express.Router();
const Author = require('../Models/Authors');
const Books = require('../Models/Books');

// Get all authors
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const authors = await Author.findAll({include:Books});
        if (authors.length === 0) 
            return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: authors});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
router.get('/:id', async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id,{include:Books});
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});




module.exports = router;