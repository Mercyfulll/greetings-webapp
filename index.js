import express from "express";
import bodyParser from "body-parser";
import { engine } from "express-handlebars";
import greetMe from "./greet.js";

var app = express();
let greet = greetMe();


app.use(express.static(('public')))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/",function(req,res){

    res.render("index",{
        name : greet.getValidateName(),
        language : greet.getLanguageSelector()
    })
})

app.get("/greeted", function(req,res){

    
    res.redirect("/")
});



app.post("/counter/User_name", function(req,res){
    const languageSelected = req.params.User_name


    greet.setValidateName(req.body.name)
    greet.setLanguageSelector(req.body.language)
    console.log(greet.setValidateName(req.body.name))

    res.redirect("/")

})

const PORT = process.env.PORT || 3012

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})

