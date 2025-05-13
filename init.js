const mongoose=require("mongoose");
const Shop=require("./models/schema.js")

main().then((res)=>{console.log(res);})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

let alldata=[
    {
        img:"https://images.unsplash.com/photo-1566560987237-180e89fd37d1?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"T-shirt(Calvin Kein)",
        price:800,
    },
    {
        img:"https://images.unsplash.com/photo-1591512879019-23e6cc70531d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:" t-shirt(Paradise)",
        price:700,
    },
    {
        img:"https://images.unsplash.com/photo-1624373607006-348f61ea2d76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"T-shirt (Lust culture)",
        price:500,
    },
    {
        img:"https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Shirt(Calvin-Kein)",
        price:900,
    },
    {
        img:"https://images.unsplash.com/photo-1602810318660-d2c46b750f88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Shirt(Calvin-Kein)",
        price:400,
    },
    {
        img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Shirt(Raymon)",
        price:500,
    },
    {
        img:"https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Shirt(Raymon)",
        price:800,
      
    },
    {
        img:"https://images.unsplash.com/photo-1602810317536-5d5e8a552d15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Shirt",
        price:1000,
    },
    {
        img:"https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"T-shirt(Out cast)",
        price:800,
}
];

Shop.insertMany(alldata);