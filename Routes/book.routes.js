const express = require('express');
const router = express.Router();
const Author = require('../Models/Books');
const Books = require('../Models/Books');
// Get all authors
router.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const books = await Books.findAll();
        if (books.length === 0) return res.status(404).json({ message: "No Books Found" });
        res.json({Book: books});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
// Get one BOOK
router.get('/:id', async (req, res) => {
    try {
        const books = await Books.findByPk(req.params.id);
        if (books === null) {
            return res.status(404).json({ message: "Books Not Found" });
        }
        res.json(books);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Create a new BOOK
router.post('/', async (req, res) => {
    try {
        const books = await Books.create(req.body);
        res.json(author);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update an BOOK
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Books.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await Books.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});
// Delete an BOOK
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Books.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = router;