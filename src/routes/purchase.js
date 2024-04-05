"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/purchase:

const purchase = require('../controllers/purchase')

// const permissions = require('../middlewares/permissions')

// URL: /purcahases

router.route('/')
    .get(purchase.list)
    .post( purchase.create)

router.route('/:id')
    .get(purchase.read) 
    .put(purchase.update)
    .patch(purchase.update)
    .delete( purchase.delete)

/* ------------------------------------------------------- */
module.exports = router