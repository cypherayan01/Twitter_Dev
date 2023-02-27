const mongoose=require('mongoose');

const tweetScema=new mongoose.Schema({
    content: {
        type: String,
        required:true
    },
    userEmail: {
        type:String
    },
    comments: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{timestamps:true});

tweetScema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \n Created by: ${this.userEmail}`;
});



const Tweet=mongoose.model('Tweet',tweetScema);

module.exports=Tweet;