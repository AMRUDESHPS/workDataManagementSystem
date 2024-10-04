var db = require('../config/connection')
var collection = require('../config/collections')
const { ObjectId } = require('mongodb');

module.exports = {
    getAllEmployees() {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(collection.EMPLOYEES_COLLECTION).find().toArray()
            resolve(products)
        })
    },
};