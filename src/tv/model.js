const mongoose = require("mongoose")

const tvSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    studio: {
        type: String,
        default: "Unknown"
    },
    series: {
        type: Number,
        default: "Unknown"
    }
});

const TV = mongoose.model("TV", tvSchema);

module.exports = TV;