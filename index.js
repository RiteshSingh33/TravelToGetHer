let express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');
require("./db/connect");
const Register = require("./model/userRegistration");
const { log } = require('console');
// Built in middleware
// app.use(express.static("C:/Users/Rites/OneDrive/Desktop/CabShare/Car Rental/website"));
const staticPath = path.join(__dirname,"./website");


// TO set the view engine
app.set('view engine', 'hbs');

hbs.registerPartials("C:/Users/Rites/OneDrive/Desktop/CabShare/Car Rental/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
// Template engine route
app.get("/home",(req,res)=>{
    res.render('index',{
        Name : "Ritesh"
    });
});

app.get("/ride",(req,res)=>{
    res.render('ride');
})

app.get("/contact",(req,res)=>{
    res.render('contact');
})


app.get("/sign",(req,res)=>{
    res.render('sign');
})

// Create a new user in database
app.post("/sign", async (req,res)=>{
    try{
        const { email, password, confirm_password } = req.body;
        // const password = req.body.password;
        // const cpassword = req.body.confirm_password;
        // console.log(req.body.email);
        if(password===confirm_password){
            const registerUser = new Register({
                email : email,
                password : password,
                confirm_password : confirm_password
            });
            const registered = await registerUser.save();
            console.log("User registered....",registered);
            res.status(201).render("index");
        }else{
            res.send("Passwords are not matching");
        }
    }
    catch(e){
        res.status(400).send(e);
    }
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(`${email} and password ${password}`);

        const userEmail = await Register.findOne({email:email});
        if(userEmail.password===password){
            res.status(201).render("index");
        }else{
            res.send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send("Invalid Credentials");
    }
})

app.get("/home/*",(req,res)=>{
    res.render('404'),{
        errorComment : "Oops! No Page Found"
    };
});

app.get('*', (req,res)=>{
    res.render('404'),{
        errorcomment : "Oops! No Page Found"
    };
})


app.listen(4200,()=>{
    console.log("Listening on port 4200");
});