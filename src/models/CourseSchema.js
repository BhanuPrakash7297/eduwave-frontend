import mongoose from "mongoose";



const CourseSchema=new mongoose.Schema({

        userId:{
            type:String,
            required:true,
            unique:true
        },

        title:{
            type:String,
            required:true,
        },
        
        description:{
            type:String,
        },

       imageUrl:{
        type:String
       }
       ,
       price:{
        type:String
       }
,
       isPublished:{
        type:String
       }
       ,
       categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
       }
    },
    {timestamps:true}
);


const Course=mongoose.models.Course || mongoose.model("Course",CourseSchema);

export default Course;