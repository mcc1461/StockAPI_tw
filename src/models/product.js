"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
    {
        "_id": "65343222b67e9681f937a001",
        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f515",
        "name": "Apple iPhone 12 Pro Max",
        "quantity": 100,
        "price": 10000,
        "description": "Apple iPhone 12 Pro Max 512GB",
        "image": "https://netrinoimages.s3.eu-west-2.amazonaws.com/2023/11/09/1600268/478455/apple_iphone_12_pro_max_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4901277.png",
        "category": "Electronics",
    },
    {
        "_id": "65343222b67e9681f937a002",
        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f514",
        "name": "Samsung Galaxy S21 Ultra",
        "quantity": 100,  
        "price": 9000,
        "description": "Samsung Galaxy S21 Ultra 512GB",
        "image": "https://m.media-amazon.com/images/I/81r1MQWy8+L.jpg",
        "category": "Electronics",
    },
    
/* ------------------------------------------------------- */
// Product Model:

const ProductSchema = new mongoose.Schema({

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
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
    // }

}, {
    collection: 'products',
    timestamps: true
})

// Export:
module.exports = mongoose.model('Product', ProductSchema)