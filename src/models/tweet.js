const mongoose=require('mongoose');

const tweetScema=new mongoose.Schema({
    content: {
        type: String,
        required:true,
        max: [250,'Tweet cannot be more than 250 characters.']
    }, 
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]

},{timestamps:true});

// tweetScema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \n Created by: ${this.userEmail}`;
// });

// tweetScema.pre('save',function(next){
//     console.log("Inside a hook");
//     this.content=this.content+'....';
//     next();
// })


const Tweet=mongoose.model('Tweet',tweetScema);

module.exports=Tweet;