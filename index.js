import pg from 'pg';
import express from "express";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import flash from 'express-flash';
import session from 'express-session';
import greetMe from "./greet.js";

var app = express();
let greet = greetMe();


var connectionString = "postgres://greet_user:V1x74KGd7kbwqe6wYXZLq3OMElcFSoQ2@dpg-cj6ftrme546c73aek3q0-a.oregon-postgres.render.com/greet"
var pgClient = new pg.Client({
    connectionString,
    ssl:{
        rejectUnauthorized : false
    }
});
pgClient.connect()

// const client = pg({
//     host:"localhost",
//     user:"greet_user",
//     port:5432,
//     password: "V1x74KGd7kbwqe6wYXZLq3OMElcFSoQ2",
//     database:"greet"
// })

// client.connect();


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

app.use(function (req, res, next) {
    res.locals.messages = req.flash();
    next();
  });
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get("/",function(req,res){

    res.render("index",{
        error : req.flash('error'),
        language : greet.getLanguageSelector(),
        name : greet.getValidateName(),
        count : greet.getCounter(),
    })
    
})

app.post("/counter", function(req,res){
        var namesList = []
        var user = greet.setValidateName(req.body.name)
        var select = greet.setLanguageSelector(req.body.languages)
        var selected = greet.getLanguageSelector()
        var userCount = greet.greetedUsers(req.body.name)
        
//    if(greet.getLanguageSelector() == ''){
//         req.flash('error', 'Please select language');
//    } else if (greet.setValidateName(req.body.name) == ''){
//         req.flash('error', 'Please enter name')
//    } else if(greet.setValidateName(req.body.name) == '' && greet.getLanguageSelector() == ''){
//         req.flash('error', 'Missing entries enter name and select language')
//    }else{
//    }
    user
    select
    selected
    userCount
    res.redirect("/")
})
app.get("/counter/User_name", function(req,res){
    const userName = req.params.User_name
    console.log(greet.getNamesList())
    res.render("counter",{

        namesList : greet.getNamesList()
    
    })
})

const PORT = process.env.PORT || 3012

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})

