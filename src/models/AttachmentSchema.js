import mongoose from "mongoose";


const AttachmentSchema=new Schema({
     name:{
        type:String,
     },
     url:{
        type:String,
     },
     courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
     },
});



export default mongoose.models.Attachment || mongoose.model("Attachment",AttachmentSchema);
