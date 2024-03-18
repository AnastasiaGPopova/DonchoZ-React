const mongoose = require('mongoose')

const paintingSchema = new mongoose.Schema({
    paintingName: {
        type: String,
        required: true,
        match: [/[A-Z0-9][a-zA-Z0-9]+/, "Record name should start with capital letter!"],
        minLength: [2, "Record name should be at least 2 characters !"],
        maxLength: [40, "Record name should be max 30 characters !"]
    }, 
    description: {
        type: String,
        required: true,
        minLength: [5, "Description should be at least 5 characters !"]
    }, 
    year: {
        type: Number,
        required: true,
        min: [1940, "Year should be at greater then 1940 and less then 2024 !"],
        max: [2023, "Year should be at greater then 1950 and less then 2024 !"]
    }, 
    imageUrl: {
        type: String,
        required: true,
        validate : {
            validator: function (value){
                return value.startsWith("http://") || value.startsWith("https://")
            },
            message: "Invalid URL!"
        }
    }, 
    genre: {
        type: String,
        required: true,
        //minLength: [3, "Too short! Genre should be at least 3 characters !"]
    }, 
}, { timestamps: true })

const Painting = mongoose.model('Painting', paintingSchema)
module.exports = Painting