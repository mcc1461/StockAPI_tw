"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

    "name": "Electronics",
    "name": "Books",
    "name": "Clothing",
    "name": "Home",
    "name": "Sports",
    
/* ------------------------------------------------------- */
// Category Model:

const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },


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
    collection: 'categories', 
    timestamps: true
})

// Export:
module.exports = mongoose.model('Category', CategorySchema)