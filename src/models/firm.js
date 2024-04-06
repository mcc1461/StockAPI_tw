"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
    {   
        "_id": "65343222b67e9681f937f521",
        "name": "BOYNER",
        "phone": "+90 212 123 45 67",
        "address": "Maslak, İstanbul, Türkiye",
        "image": "https://logowik.com/content/uploads/images/242_boyner.jpg"
    },
    {
        "_id": "65343222b67e9681f937f522",
        "name": "FLO",
        "phone": "+90 312 234 56 78",
        "address": "Çankaya, Ankara, Türkiye",
        "image": "https://logowik.com/content/uploads/images/flo9618.jpg"
        
    },
    {
        "_id": "65343222b67e9681f937f523",
        "name": "TRENDYOL",
        "phone": "+90 216 345 67 89",
        "address": "Kadıköy, İstanbul, Türkiye",
        "image": "https://logowik.com/content/uploads/images/trendyolcom2977.jpg"
    },
/* ------------------------------------------------------- */
// Firm Model:

const FirmSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },

    phone: {
        type: String,
        trim: true,
        required: false,
    },

    address: {
        type: String,
        trim: true,
        required: false,
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
    collection: 'firms',
    timestamps: true
})

// Export:
module.exports = mongoose.model('Firm', FirmSchema)