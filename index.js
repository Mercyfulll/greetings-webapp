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

// app.use(function (req, res, next) {
//     res.locals.messages = req.flash();
//     next();
//   });
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get("/",function(req,res){
    

    res.render("index",{
        language : greet.getLanguageSelector(),
        name : greet.getValidateName(),
        count : greet.getCounter(),
        errorM : req.flash('error')
    })
    
})

app.get("/greeted", function(req,res){
    
    res.render("greeted",{
        namesGreeted : greet.getNamesGreetings()
        
    })
})


app.post("/counter", function(req,res){
        var user = req.body.name;
        var selected = req.body.languages;
        var msg = '';
        
        if(!selected && !user){
                msg = req.flash('error', 'Missing entries enter name and select language');
                setTimeout(() => {
                    msg = '';
                  }, 3000);
        } else if (!user){
                msg = req.flash('error',  'Please enter name');
        }else if(!selected){
                msg = req.flash('error', 'Please select language');
        }else if(user && selected){
             greet.setValidateName(req.body.name)
             greet.setLanguageSelector(req.body.languages)
             greet.greetedUsers(req.body.name)
        }
   
    res.redirect("/")
})
app.get("/counter/:User_name", function(req,res){
    const userName = req.params.User_name
    console.log(userName)

    res.render("counter",{
        userName ,
        number : greet.getObject(userName)
    
    })
})

const PORT = process.env.PORT || 3012

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})

