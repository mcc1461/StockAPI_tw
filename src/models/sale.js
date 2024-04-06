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
        "price": 12000,
        "totalPrice": 36000
    },
    {
        "_id": "65343222b67e9681f9370002",
        "userId": "65343222b67e9681f937f511",
        "firmId": "65343222b67e9681f937f522",
        "brandId": "65343222b67e9681f937f518",
        "productId": "65343222b67e9681f937a010", // Correct productId referencing the correct Product
        "categoryId": "65343222b67e9681f93aa52f",
        "quantity": 2,
        "price": 11000,
        "totalPrice": 22000
    },
/* ------------------------------------------------------- */
// Sale Model:

const SaleSchema = new mongoose.Schema({

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
        // required: true,
        default: function() {  // Keep the function name only as "function() { ... }" otherwise it will not work.
            return this.price * this.quantity
        },
       //  For update you need to use transform, default will not work here and only works for create not for update.
       transform: function() { 
            return this.price * this.quantity
        },
        // set gives error so that is not used...
        // set: function (){
        //     return this.totalPrice
        // }
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
    collection: 'sales',
    timestamps: true
})

// Export:
module.exports = mongoose.model('Sale', SaleSchema)