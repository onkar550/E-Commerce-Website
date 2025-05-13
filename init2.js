const mongoose=require("mongoose");
const Info=require("./models/schema2.js");

main().then((res)=>{console.log("success..!");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

let allinfo=[
    {
        name:"Kalvin klein",
        quantity:1,
        adress:"Manthale nagar,Latur" ,
        payment:"Cash on delivary",
        number:8262941778,
        date:new Date()
    },
    {
        name:"Kalvin klein",
        quantity:1,
        adress:"Manthale nagar,Latur" ,
        payment:"Cash on delivary",
        number:8262941778,
        date:new Date()
    },
    {
        name:"Kalvin klein",
        quantity:1,
        adress:"Manthale nagar,Latur" ,
        payment:"Cash on delivary",
        number:8262941778,
        date:new Date()
    }
];

Info.insertMany(allinfo).then((res)=>{
    console.log(res);
})