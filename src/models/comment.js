const mongoose=require('mongoose');

const commentScema=new mongoose.Schema({
    content: {
        type: String,
        required:true
    },
    userEmail: {
        type:String
    },
    
},{timestamps:true});

const Comment=mongoose.model('Comment',commentScema);

module.exports=Comment;