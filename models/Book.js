const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    auteur: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    annee: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
