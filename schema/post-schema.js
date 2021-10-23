import  Mongoose  from "mongoose";

const postSchema= Mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    picture:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    categories:{
        type:String,
        require:true,
    },
    createdDate:{
        type:Date,
    },
})


const post=Mongoose.model('post',postSchema);

export default post;