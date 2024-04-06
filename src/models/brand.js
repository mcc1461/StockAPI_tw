"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
    {   
        "_id": "65343222b67e9681f937f512",
        "name": "Tommy",
        "image": "https://i.pinimg.com/736x/d3/09/1a/d3091a1a5350fede679b2c7461b0745b.jpg"
    },
    {
        "_id": "65343222b67e9681f937f513",
        "name": "LG",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png"
    },
    {
        "_id": "65343222b67e9681f937f514",
        "name": "Samsung",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
    },
/* ------------------------------------------------------- */
// Brand Model:

const BrandSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },

    
    // images: [],
    image: String,

    // createdId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },

    // updatedId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }

}, {
    collection: 'brands',
    timestamps: true
})

// Export:
module.exports = mongoose.model('Brand', BrandSchema)