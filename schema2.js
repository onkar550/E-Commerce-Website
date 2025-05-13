const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
        quantity:{
           type:Number,
            required:true,
        },
        adress:{
            type:String,
            required:true,
        },
        payment:{
            type:String,
        },
        number:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
        }
});

const Info=mongoose.model("Info",schema);
module.exports=Info;

