const mongoose=require("mongoose");
const passportmongoose=require("passport-local-mongoose");
const schema=mongoose.Schema;

const userschema=new schema({
    email:{
        type:String,
        required:true,
    }
})

userschema.plugin(passportmongoose);

module.exports=mongoose.model("User",userschema)
