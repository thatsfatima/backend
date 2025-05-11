const express = require("express");
const router = express.Router();
const { 
    getAllBooks, 
    getBookById, 
    createBook, 
    updateBook, 
    deleteBook 
} = require("../controllers/bookController");

const { protect } = require("../middlewares/authMiddleware");

router.get("/", protect, getAllBooks);
router.get("/:id", protect, getBookById);
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;
