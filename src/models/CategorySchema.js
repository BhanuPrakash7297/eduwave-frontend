import mongoose from 'mongoose';



const CategorySchema=new mongoose.Schema({
    name:String,
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ]
});


const Category=mongoose.models.Categories || mongoose.model("Categories",CategorySchema);

export default Category;

