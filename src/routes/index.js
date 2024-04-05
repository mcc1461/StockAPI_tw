"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use('/auth', require('./auth'))
// user:
router.use('/users', require('./user'))
// token:
router.use('/tokens', require('./token'))

// address:
// router.use('/addresses', require('./address'))

// firm:
router.use('/firms', require('./firm'))
// brand:
router.use('/brands', require('./brand'))
// category:
router.use('/categories', require('./category'))
// product:
router.use('/products', require('./product'))
// purchase:
router.use('/purchases', require('./purchase'))  
// sale:
router.use('/sales', require('./sale'))


// document:
// router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router