import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    urlOrig:{
        type:String,
        required:true
    },
    urlShort: {
        type: String,
        required: true
    },
    createdAt:{
        required:true,
        type:Date,
    }
},{timestamps:false})

export default mongoose.model('Url',urlSchema)