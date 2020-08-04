const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add a name"],
        unique:true,
        trim:true,
        maxlength:[50, "Name can not be more then 50 characters"]
    },
    slug:String,
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
});

CategorySchema.pre("save", function(next){
    this.slug = slugify(this.name, {lower:true})
    next()
})

module.exports = mongoose.model("Category", CategorySchema);