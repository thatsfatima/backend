const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({ user: req.user.id });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur !" });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book || book.user.toString() !== req.user.id) {
            return res.status(404).json({ message: "Livre introuvable !" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur !" });
    }
};

exports.createBook = async (req, res) => {
    const { titre, auteur, description, annee } = req.body;

    try {
        const book = await Book.create({
            titre,
            auteur,
            description,
            annee,
            user: req.user.id,
        });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur !" });
    }
};

exports.updateBook = async (req, res) => {
    try {
        let book = await Book.findById(req.params.id);

        if (!book || book.user.toString() !== req.user.id) {
            return res.status(404).json({ message: "Livre introuvable !" });
        }

        book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur !" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book || book.user.toString() !== req.user.id) {
            return res.status(404).json({ message: "Livre introuvable !" });
        }
        
        await book.deleteOne();

        res.status(200).json({ message: "Livre supprime !" });
    } catch (error) {
        res.status(500).json({ message: "Erreur Serveur !" });
    }
};
