const {TweetRepository}=require('../repository/index');

class TweetService{
    constructor(){
        this.TweetRepository=new TweetRepository();
    }
    async create(data){
        const content=data.content;
        const tags=content.match(/(#\w+)/g); //this regex extracts hashtags
        tags=tags.map((tag)=>tag.substr(1));
        console.log(tags);
        const tweet =await this.TweetRepository.create(data);
        //todo create hashtags and add more
        /**
         * 1. bulcreate mongoose 
         * 2. filer title of hashtags based on multiple tags
         * 3. how to add tweet id's inside all the hashtags
         */

        return tweet;
    }
}

module.exports=TweetService;

// this is my #first #tweet .I am really #exicted.