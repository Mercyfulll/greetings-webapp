import pgPromise from 'pg-promise';
import express from "express";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import flash from 'express-flash';
import session from 'express-session';
import greetMe from "./greet.js";
import querries from "./service/database.js"

var app = express();
let greet = greetMe();
const pgp = pgPromise();

const connectionString = process.env.DATABASE_URL || 'postgres://greet_user:V1x74KGd7kbwqe6wYXZLq3OMElcFSoQ2@dpg-cj6ftrme546c73aek3q0-a.oregon-postgres.render.com/greet?ssl=true';

const db = pgp(connectionString);

let data = querries(db);

app.use(express.static(('public')))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(session({
    secret : 'This is a string',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get("/",async function(req,res){
    
    let counter = await data.counter() 
     let counts = counter.count

    res.render("index",{
        language : greet.getLanguageSelector(),
        name : greet.getValidateName(),
        counts,
    })
     ;
})

app.get("/greeted", async function(req,res){
    const names = await data.getUsers()
    
    res.render("greeted",{
        names 
    })
    
})

app.post("/", async function(req,res){
        var user = req.body.name;
        var selected = req.body.languages;

        if(!selected && !user){
                req.flash('error', 'Missing entries enter name and select language');
        } else if (!user){
                req.flash('error',  'Please enter name');
        }else if(!selected){
                req.flash('error', 'Please select language');
        }else if(user && selected && user != ''){
            greet.setValidateName(user)
            greet.setLanguageSelector(selected)
            greet.greetedUsers(req.body.name)
            await data.addUsers(greet.getValidateName())
        }
        
   
    res.redirect("/")
})
app.get("/counter/:User_name", async function(req,res){
    const userName = req.params.User_name
    let num = await data.greetNumber(userName) 
    let number = num.sum    
    
    res.render("counter",{
        userName ,
        number
    })
})

app.post("/reset", async function(req,res){
    greet.reset()
    await data.deleteAll()

    res.redirect("/")
})

const PORT = process.env.PORT || 3012

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})

