"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
    {
        "_id": "65343222b67e9681f9370001",
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f521",
        "brandId": "65343222b67e9681f937f512",
        "productId": "65343222b67e9681f937a008", // Correct productId referencing the correct Product
        "categoryId": "65343222b67e9681f937f52a",
        "quantity": 3,
        "price": 10000,
        "totalPrice": 30000
    },
    {
        "_id": "65343222b67e9681f9370002",
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f522",
        "brandId": "65343222b67e9681f937f518",
        "productId": "65343222b67e9681f937a010", // Correct productId referencing the correct Product
        "categoryId": "65343222b67e9681f93aa52f",
        "quantity": 2,
        "price": 9000,
        "totalPrice": 18000
    },
/* ------------------------------------------------------- */
// Purchase Model:

const PurchaseSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    firmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm',
        required: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
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
    // },
    // status : {
    //     type: String,
    //     enum: ['pending', 'completed'],
    //     default: 'pending'
    // }
}, {
    collection: 'purchases',
    timestamps: true,
})

// Export:
module.exports = mongoose.model('Purchase', PurchaseSchema)