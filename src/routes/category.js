"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/category:

const category = require('../controllers/category')

// const permissions = require('../middlewares/permissions')

// URL: /categorys

router.route('/')
    .get(category.list)
    .post( category.create)

router.route('/:id')
    .get(category.read)
    .put(category.update)
    .patch(category.update)
    .delete( category.delete)

/* ------------------------------------------------------- */
module.exports = router