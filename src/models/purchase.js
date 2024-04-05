"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "userId": "65343222b67e9681f937f001",
    "carId": "65352f518a9ea121b1ca5001",
    "startDate": "2023-10-10",
    "endDate": "2023-10-16"
}
{
    "userId": "65343222b67e9681f937f002",
    "carId": "65352f518a9ea121b1ca5002",
    "startDate": "2023-10-14",
    "endDate": "2023-10-20"
}
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
    timestamps: true
})

// Export:
module.exports = mongoose.model('Purchase', PurchaseSchema)