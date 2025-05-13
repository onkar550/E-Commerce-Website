const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Shop=require("./models/schema.js");
const Info=require("./models/schema2.js");
const ejsmate=require("ejs-mate"); 
const methodoverride=require("method-override");
const wrapasync=require("./utils/wrapasync.js");
const ExpressError=require("./utils/expresserror.js")
const cookieparser=require("cookie-parser");
const session=require("express-session");
const passport=require("passport");
const local=require("passport-local");
const User=require("./models/user.js");


app.use(cookieparser());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsmate);
app.use(methodoverride("_method"));   


const sessionoption={
  secret:"mysecret",
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now() + 7 * 24 *60* 60 * 1000,
    maxAge:7 * 24 *60* 60 * 1000,
  },
}


app.use(session(sessionoption));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new local(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


main().then((res)=>{console.log("success..!");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

app.listen(8080,()=>{
    console.log("app is listening to port");
});



//index route
app.get("/shops",wrapasync(async(req,res)=>{
  let shops=await Shop.find();
  res.render("index.ejs",{shops})
}));

//show route
// app.get("/shops/:id/new",async(req,res)=>{
//   let {id}=req.params;
//   const find=await Shop.findById(id);
//   res.render("show.ejs",{find})
// });



//index route of info
app.get("/info",wrapasync(async(req,res)=>{
  let buy=await Info.find();
  res.render("index2.ejs",{buy});
}));

//create route
app.get("/info/new2",(req,res)=>{
  res.render("new2.ejs");
});

app.post("/info",wrapasync(async(req,res,next)=>{
  let{quantity,adress,payment,number,name}=req.body;
  const newinfo=new Info({
    name:name,
    quantity:quantity,
    adress:adress,
    payment:payment, 
    number:number,
    date:new Date(),
  });

  await newinfo.save();
  res.redirect("/info");
}
   
));

//edit route
app.get("/info/:id/edit",wrapasync(async(req,res)=>{
  let {id}=req.params;
  const edit=await Info.findById(id);
  res.render("edit.ejs",{edit})
}));

app.put("/info/:id",wrapasync(async(req,res)=>{
  let {id}=req.params;
 await Info.findByIdAndUpdate(id,{...req.body.edit});
 res.redirect("/info");
}));

//Delete Route
app.delete("/info/:id",wrapasync(async(req,res)=>{
  let {id}=req.params;
  await Info.findByIdAndDelete(id);
  res.redirect("/info");
}));

//Sign up
app.get("/signup",(req,res)=>{
  res.render("signup.ejs");
})

app.post("/signup",async(req,res)=>{
   let{username,email,password}=req.body;
   const newuser=({username,email});
   let registereduser= await User.register(newuser,password);
   res.redirect("/shops")
  
});

//Login
app.get("/login",(req,res)=>{
  res.render("login.ejs");
});

app.post("/login",passport.authenticate
("local",{failureRedirect:"/login",failureFlash:true})
,async(req,res)=>{
 res.redirect("/shops")
});

//Logout
app.get("/logout",(req,res,next)=>{
  req.logout((err)=>{
    if(err){
      next(err);
    }
    res.redirect("/shops");
  })
})


//Middleware declration
app.use((err,req,res,next)=>{
  let { statusCode = 500, message = 'Internal Server Error' } = err;
  // res.status(statusCode).send(message);
  res.render("error.ejs",{message});
})

// app.all("*",(req,res,next)=>{
//   next(new ExpressError(404,"Page not found"));
// })


app.get("/",(req,res)=>{

})