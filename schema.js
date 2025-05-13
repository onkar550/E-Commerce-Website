const mongoose=require("mongoose");

let allshops=new mongoose.Schema({
    img:{
        type:String
    },
    name:{
      type:String
    },
    price:{
       type:Number,
    },
});

const Shop=mongoose.model("Shop",allshops);
module.exports=Shop;