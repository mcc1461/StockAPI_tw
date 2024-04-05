"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Category Controller:

const Category = require('../models/category')
// const User = require('../models/user')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "List Categorys"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Category)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Category),
            data
           
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Create Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Category'
                }
            }
        */
       
       // createdId ve updatedId verisini req.user'dan al:
    //    req.body.createdId = req.user._id
    //    req.body.updatedId = req.user._id
       
       const data = await Category.create(req.body)
       console.log(data)
        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Get Single Category"
        */

        const data = await Category.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Update Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: '#/definitions/Category'
                }
            }
        */

        // updatedId verisini req.user'dan al:
        // req.body.updatedId = req.user._id

        const data = await Category.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Category.findOne({ _id: req.params.id }) // updated data
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Categorys"]
            #swagger.summary = "Delete Category"
        */

        const data = await Category.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}