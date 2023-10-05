const mongoose = require('mongoose') // for connecting with mongdb

const productSchema = mongoose.Schema(    // create a sceama
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true   // so that can understand time of created and updated etc
    }
)


const Product = mongoose.model('Product', productSchema);    // you call mongoose.model() on a schema, Mongoose compiles a model for you.

module.exports = Product;   // export it so that can use 
