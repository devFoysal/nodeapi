const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    categoryId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:[true, "Please add a name"],
        unique:true,
        trim:true,
        maxlength:[50, "Name can not be more then 50 characters"]
    },
    slug:String,
    description:{
        type:String,
        required:[true, 'Please add a description'],
        maxlength:[500, 'Description can not be more then 500 characters']
    },
    status:{
        type:Boolean,
        default:1
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt:{
        type: Date
    }
})

module.exports = mongoose.model("Product", ProductSchema);