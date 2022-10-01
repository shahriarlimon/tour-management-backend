const { default: mongoose } = require("mongoose");

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true,
        trim: true

    },
    price: {
        type: Number,
        required: true,
    },
    viewsCount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Tour", tourSchema)