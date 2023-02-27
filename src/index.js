const express=require('express');
const connect=require('./config/database');

const app=express();


const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');

app.listen(3000,async ()=>{
    console.log("Server started...");
    await connect();
    console.log("Mongo db connected....");
    // const tweet=await Tweet.create({
    //     content: 'Main Tweet',
    //     userEmail:'x@gmail.com'
        
    // });
    // const tweets=await Tweet.find({userEmail:'x@gmail.com'});
    // console.log(tweets);
    const tweetRepo=new TweetRepository();
    const tweet = await tweetRepo.getAll(0,4);
    console.log(tweet[2].contentWithEmail);
    // const tweet=await tweetRepo.create({
    //     content:'my tweet'
    // });
    // console.log(tweet);
    // tweet.comments.push({content: 'very first comment'});
    // await tweet.save();
    // console.log(tweet);
    
    // const tweet=await tweetRepo.create({content:'Tweet with comment schema'});
    // console.log(tweet);
    //  const comment=await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
});
