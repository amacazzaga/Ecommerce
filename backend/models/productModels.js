const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const productSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    price :{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    image :{
        type: String,
        required: false /*for now*/ 
    }
})

module.exports = mongoose.model("products", productSchema);
/*name the collection with the string*/