"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {

    // return null;  // Yedek almadan çalışmaya devam etmeyin....

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    const User = require('../models/user')
    const Firm = require('../models/firm')
    const Brand = require('../models/brand')
    const Product = require('../models/product')
    const Category = require('../models/category')
    const Purchase = require('../models/purchase')
    const Sale = require('../models/sale')
    // const Address = require('../models/address')
    // const Document = require('../models/document')
    // const Token = require('../models/token')


    await User.insertMany(
        [{
        
        "_id": "65343222b67e9681f937f511",
        "username": "admin",
        "password": "aA?123456",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "isActive": true,
        "isStaff": false,
        "isAdmin": true
    },
    {
        "_id": "65343222b67e9681f937f512",
        "username": "staff1",
        "password": "aA?123456",
        "email": "staff1@site.com",
        "firstName": "Staff1",
        "lastName": "Staffz",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f513",
        "username": "staff2",
        "password": "aA?123456",
        "email": "staff2@site.com",
        "firstName": "Staff2",
        "lastName": "Staffz",
        "isActive": true,
        "isStaff": true,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f514",
        "username": "Ali",
        "password": "aA?123456",
        "email": "ali@site.com",
        "firstName": "Ali",
        "lastName": "Aliz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f515",
        "username": "Veli",
        "password": "aA?123456",
        "email": "veli@site.com",
        "firstName": "Veli",
        "lastName": "Veliz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f516",
        "username": "Aydan",
        "password": "aA?123456",
        "email": "aydan@site.com",
        "firstName": "Aydan",
        "lastName": "Aydanz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f517",
        "username": "Canan",
        "password": "aA?123456",
        "email": "canan@site.com",
        "firstName": "Canan",
        "lastName": "Cananz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
    {
        "_id": "65343222b67e9681f937f518",
        "username": "Emel",
        "password": "aA?123456",
        "email": "emel@site.com",
        "firstName": "Emel",
        "lastName": "Emelz",
        "isActive": true,
        "isStaff": false,
        "isAdmin": false
    },
])
    await Brand.insertMany(
        [
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
            {
                "_id": "65343222b67e9681f937f515",
                "name": "Apple",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
            },
            {
                "_id": "65343222b67e9681f937f516",
                "name": "Huawei",
                "image": "https://www.atlantisavm.com.tr/wp-content/uploads/2019/01/Huawei-logo.jpg"
            },
            {
                "_id": "65343222b67e9681f937f517",
                "name": "Xiaomi",
                "image": "https://cdn.worldvectorlogo.com/logos/xiaomi-logo-2.svg"
            },
            {
                "_id": "65343222b67e9681f937f518", // ID değerini benzersiz olacak şekilde değiştirdim.
                "name": "Salomon",
                "image": "https://logowik.com/content/uploads/images/salomon-group7511.jpg                  " // Burada Salomon'un resmi logosunun URL'sini eklemeniz gerekiyor.
            },
            {
                "_id": "65343222b67e9681f937c018",
                "name": "Cerruti 1881",
                "image": "https://logos-marques.com/wp-content/uploads/2020/01/Cerruti-1881-logo.png"
            },
            {
                "_id": "65343222b67e9681f937c119",
                "name": "Bosch",
                "image": "https://1000logos.net/wp-content/uploads/2016/10/Bosch-logo.jpg"
            },
            {
                "_id": "65343222b67e9681f937c120", // Yeni ve benzersiz bir ID
                "name": "Clinique",
                "image": "https://www.logotypes101.com/logos/781/3EF159B6FAEFC7AE217F68451628BAA2/Clinique.png" // Clinique markasına ait gerçek bir logo URL'si
            }
            
        ]
    )


    await Firm.insertMany([
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
            
            {
                "_id": "65343222b67e9681f937f524",
                "name": "MEDIAMARKT",
                "phone": "+90 232 456 78 90",
                "address": "Bornova, İzmir, Türkiye",
                "image": "https://logowik.com/content/uploads/images/media-markt5647.jpg"
            },
            {
                "_id": "65343222b67e9681f937f525",
                "name": "TEKNOSA",
                "phone": "+90 212 567 89 01",
                "address": "Beşiktaş, İstanbul, Türkiye",
                "image": "https://logowik.com/content/uploads/images/teknosa3240.jpg"
            },
            {
                "_id": "65343222b67e9681f937f526",
                "name": "VATAN",
                "phone": "+90 312 678 90 12",
                "address": "Yenimahalle, Ankara, Türkiye",
                "image": "https://logowik.com/content/uploads/images/233_vatancomputer.jpg"
            },
            {
                "_id": "65343222b67e9681f937f527",
                "name": "N11",
                "phone": "+90 216 789 01 23",
                "address": "Ataşehir, İstanbul, Türkiye",
                "image": "https://logowik.com/content/uploads/images/n112287.jpg"
            }

    ])




    await Category.insertMany([
    {
        "_id": "65343222b67e9681f937f5aa",
        "name": "Electronics"},
    {
        "_id": "65343222b67e9681f937f5bb",
        "name": "Books"},
    {
        "_id": "65343222b67e9681f937f52a",
        "name": "Clothing"},
    {
        "_id": "65343222b67e9681f937f52b",
        "name": "Home"},
    {
        "_id": "65343222b67e9681f937f52c",
        "name": "Sports"},
    {
        "_id": "65343222b67e9681f937f52d",
        "name": "Toys"},
    {
        "_id": "65343222b67e9681f937f52e",
        "name": "Food"},
    {
        "_id": "65343222b67e9681f937f52f",
        "name": "Beauty"},
    {
        "_id": "65343222b67e9681f93aa52f",
        "name": "Shoes"},
    {
        "_id": "65343222b67e9681f937f540",
        "name": "Perfume"
    }

        
    ])
    await Product.insertMany([
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
    {
        "_id": "65343222b67e9681f937a003",
        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f517",
        "name": "Xiaomi Mi 11",
        "quantity": 200,
        "price": 8000,
        "description": "Xiaomi Mi 11 512GB",
        "image": "https://www.teknomehmet.net/wp-content/uploads/2023/05/11ultra-1.jpg",
        "category": "Electronics",
    },
    {   
        "_id": "65343222b67e9681f937a004",

        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f516",
        "name": "Huawei P40 Pro",
        "quantity": 140,
        "price": 7000,
        "description": "Huawei P40 Pro 512GB",
        "image": "https://img.gkbcdn.com/s3/p/2020-03-28/HUAWEI-P40-Pro-6-58--8GB-512GB-5G-Smartphone-White-900400-.jpg",
        "category": "Electronics",
    },
    {   
        "_id": "65343222b67e9681f937a005",

        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f513",
        "name": "Apple MacBook Pro",
        "quantity": 50,
        "price": 11000,
        "description": "Apple MacBook Pro 16\" 1TB",
        "image": "https://resim.epey.com/399868/m_apple-macbook-pro-16-mvvk2tu-1.png",
        "category": "Electronics",
    },
    {   
        "_id": "65343222b67e9681f937a006",

        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f514",
        "name": "Samsung Galaxy Tab S7+",
        "quantity": 70,
        "price": 9000,
        "description": "Samsung Galaxy Tab S7+ 512GB",
        "image": "https://example.com/images/tabs7plus.jpg",
        "category": "Electronics",
    },
    {
        "_id": "65343222b67e9681f937a007",
        "categoryId": "65343222b67e9681f937f5aa",
        "brandId": "65343222b67e9681f937f517",
        "name": "Xiaomi Mi Pad 5",
        "quantity": 90,
        "price": 7000,
        "description": "Xiaomi Mi Pad 5 512GB",
        "image": "https://circles.com.tr/2023-mi-pad-5-tablet-android-10-1-i̇nç-hd-16g-512gb-thumbs_1/269637-thumb.jpeg",
        "category": "Electronics",
    },
    {
        "_id": "65343222b67e9681f937a008",
        "categoryId": "65343222b67e9681f937f52a", // Kıyafetler için varsayılan bir kategori ID'si
        "brandId": "65343222b67e9681f937f512", // Tommy markası için önceden verilen özel bir ID
        "name": "Tommy Hilfiger Erkek Polo T-Shirt",
        "quantity": 200,
        "price": 650,
        "description": "Tommy Hilfiger Slim Fit Erkek Polo T-Shirt Mavi",
        "image": "https://witcdn.exxeselection.com/tommy-hilfiger-pamuklu-slim-fit-erkek-polo-yaka-t-shirt-mw0mw30750-c66-mavi-2855493-46-B.jpg", // Tommy markasına ait gerçek bir resim URL'si
        "category": "Clothing",
    },
    {
        "_id": "65343222b67e9681f937a010", // Yeni ve benzersiz bir ID
        "categoryId": "65343222b67e9681f93aa52f", // Ayakkabılar için varsayılan bir kategori ID'si
        "brandId": "65343222b67e9681f937f518", // Salomon markası için önceden verilen özel bir ID
        "name": "Salomon X Ultra 3 Mid GTX Erkek Yürüyüş Ayakkabısı",
        "quantity": 150,
        "price": 1200,
        "description": "Salomon X Ultra 3 Mid GTX, hafif ve sağlam yapısı ile her türlü arazide konforlu bir yürüyüş deneyimi sunar.",
        "image": "https://m.media-amazon.com/images/I/41GnKvHlv4L._AC_SY780_.jpg", // Salomon markasına ait gerçek bir resim URL'si
        "category": "Shoes",
    },
    {
        "_id": "65343222b67e9681f937a013", // Yeni ve benzersiz bir ID
        "categoryId": "65343222b67e9681f937f540", // Kadın parfümleri için varsayılan bir kategori ID'si
        "brandId": "65343222b67e9681f937c018", // Cerruti markası için önceden verilen özel bir ID
        "name": "Cerruti 1881 Pour Femme Eau de Toilette",
        "quantity": 120,
        "price": 300,
        "description": "Cerruti 1881 Pour Femme, çiçeksi ve odunsu notaların zarif birleşimi ile sofistike ve feminen bir koku sunar.",
        "image": "https://m.media-amazon.com/images/I/51yRiROHMYL._SL1500_.jpg", // Cerruti 1881'e ait gerçek bir resim URL'si
        "category": "Perfume"
    },
    {
        "_id": "65343222b67e9681f937a014", // Yeni ve benzersiz bir ID
        "categoryId": "65343222b67e9681f937f52b", // Kahve makineleri için varsayılan bir kategori ID'si
        "brandId": "65343222b67e9681f937c119", // Bosch markası için önceden verilen özel bir ID
        "name": "Bosch Tassimo Vivy 2 Kahve Makinesi",
        "quantity": 80,
        "price": 450,
        "description": "Bosch Tassimo Vivy 2, kompakt tasarımı ve tek tuşla akıllı içecek hazırlama özelliği ile mükemmel kahve deneyimi sunar.",
        "image": "https://i.ebayimg.com/images/g/AeMAAOSwuVFhmuxe/s-l1600.jpg", // Bosch Tassimo Vivy 2'ye ait gerçek bir resim URL'si
        "category": "Home"
    },
    {
        "_id": "65343222b67e9681f937a016", // Yeni ve benzersiz bir ID
        "categoryId": "65343222b67e9681f937f5aa", // Televizyonlar için varsayılan bir kategori ID'si
        "brandId": "65343222b67e9681f937f514", // Samsung markası için önceden verilen özel bir ID
        "name": "Samsung 55' QLED Smart 4K UHD TV",
        "quantity": 50,
        "price": 1500,
        "description": "Samsung 55' QLED TV, Quantum Dot teknolojisi ile canlı ve gerçekçi renkler sunar. 4K UHD çözünürlüğü ile keskin ve net görüntüler sağlar.",
        "image": "https://cdn.cimri.io/pictures/article/original/28/28982.jpg", // Samsung 55' QLED Smart 4K UHD TV'ye ait gerçek bir resim URL'si
        "category": "Electronics"
    },
    {
        "_id": "65343222b67e9681f937a018", // Yeni ve benzersiz bir ID
        "categoryId": "65343222b67e9681f937f5ab", // Bilgisayarlar için varsayılan bir kategori ID'si
        "brandId": "65343222b67e9681f937f515", // Apple markası için önceden verilen özel bir ID
        "name": "Apple MacBook Pro 13-inch M1",
        "quantity": 30,
        "price": 1299,
        "description": "Apple MacBook Pro 13-inch M1, 8 çekirdekli CPU ve 8 çekirdekli GPU ile olağanüstü performans ve 20 saat pil ömrü sunar.",
        "image": "https://cdn.mos.cms.futurecdn.net/QMa729pgead8uFrroav5f5.jpg", // Apple MacBook Pro 13-inch M1'ye ait gerçek bir resim URL'si
        "category": "Electronics"
    },
    {
        "_id": "65343222b67e9681f937a019", // Yeni ve benzersiz bir ID
        "categoryId": "65343222b67e9681f937f52f", 
        "brandId": "65343222b67e9681f937c120", // Clinique markası için önceden verilen özel bir ID
        "name": "Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator",
        "quantity": 100,
        "price": 39.50,
        "description": "Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator, cildinizi 72 saat boyunca nemlendirir. Hafif ve yağsız formülü ile cildinizi taze ve canlı tutar.",
        "image": "https://m.clinique.com/media/export/cms/products/600x750/cl_sku_KPR701_600x750_0.png", // Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator'a ait gerçek bir resim URL'si
        "category": "Beauty"
    }
    ])
   
    await Purchase.insertMany([
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
        {
            "_id": "65343222b67e9681f9370003",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f523",
            "brandId": "65343222b67e9681f937c018",
            "productId": "65343222b67e9681f937a013", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f540",
            "quantity": 1,
            "price": 8000,
            "totalPrice": 8000
        },
        {
            "_id": "65343222b67e9681f9370004",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f524",
            "brandId": "65343222b67e9681f937c119",
            "productId": "65343222b67e9681f937a014", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f52b",
            "quantity": 4,
            "price": 7000,
            "totalPrice": 28000
        },
        {   
            "_id": "65343222b67e9681f9370005",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f525",
            "brandId": "65343222b67e9681f937f514",
            "productId": "65343222b67e9681f937a016", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f5aa",
            "quantity": 4,
            "price": 7000,
            "totalPrice": 28000
        },
        {   
            "_id": "65343222b67e9681f9370006",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f526",
            "brandId": "65343222b67e9681f937f515",
            "productId": "65343222b67e9681f937a018", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f5aa",
            "quantity": 4,
            "price": 11000,
            "totalPrice": 44000
        },
        {   
            "_id": "65343222b67e9681f9370007",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f527",
            "brandId": "65343222b67e9681f937c120",
            "productId": "65343222b67e9681f937a019", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f52f",
            "quantity": 4,
            "price": 9000,
            "totalPrice": 36000
        },
    ]);
    await Sale.insertMany([
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
        {
            "_id": "65343222b67e9681f9370003",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f523",
            "brandId": "65343222b67e9681f937c018",
            "productId": "65343222b67e9681f937a013", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f540",
            "quantity": 1,
            "price": 10000,
            "totalPrice": 10000
        },
        {
            "_id": "65343222b67e9681f9370004",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f524",
            "brandId": "65343222b67e9681f937c119",
            "productId": "65343222b67e9681f937a014", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f52b",
            "quantity": 4,
            "price": 8000,
            "totalPrice": 32000
        },
        {   
            "_id": "65343222b67e9681f9370005",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f525",
            "brandId": "65343222b67e9681f937f514",
            "productId": "65343222b67e9681f937a016", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f5aa",
            "quantity": 4,
            "price": 9000,
            "totalPrice": 36000
        },
        {   
            "_id": "65343222b67e9681f9370006",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f526",
            "brandId": "65343222b67e9681f937f515",
            "productId": "65343222b67e9681f937a018", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f5aa",
            "quantity": 4,
            "price": 13000,
            "totalPrice": 52000
        },
        {   
            "_id": "65343222b67e9681f9370007",
            "userId": "65343222b67e9681f937f511",
            "firmId": "65343222b67e9681f937f527",
            "brandId": "65343222b67e9681f937c120",
            "productId": "65343222b67e9681f937a019", // Correct productId referencing the correct Product
            "categoryId": "65343222b67e9681f937f52f",
            "quantity": 4,
            "price": 11000,
            "totalPrice": 44000
        },
    ]);
    

    console.log('- Database and all data SYNCED!')


}