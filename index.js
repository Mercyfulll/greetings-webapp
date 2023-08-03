import express from "express";

var app = express();

app.get("/",function(req,res){
    res.send("Greetings Webapp")
})

app.get("/greeted", function(req,res){

    
    res.redirect("/")
});



app.post("/counter/<USER_NAME>", function(req,res){

})

const PORT = process.env.PORT || 3012

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})

