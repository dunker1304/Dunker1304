
const express = require('express');
const path = require('path');
let app = express();

// create port
app.listen(6969,(error) =>{
    if(error) console.log(error);
    else console.log("Port : 6969") 
})

/*
app.get('/',(request, response) =>{
    console.log(__dirname);
    //response.send("Home Page");
    
    response.sendFile('D:/Techkids/Code/FE-CSS/index.html');
    //response.sendFile(path.resolve(__dirname,'../Node JS/intro.js'));
    // __dirname + '/home.html'
})
*/



// allow user access this folder
//app.use(express.static('../FE-CSS'));




/*
// load css file
app.get('/index.css',(request, response) =>{
    console.log(__dirname);
    response.sendFile('D:/Techkids/Code/FE-CSS/index.css');
    
})*/

// get name
app.get('/:name', (request,response) =>{
    response.send("Hello "+request.params.name);
})

app.get('/',(request,response)=>{
    response.send("Hello "+request.query.name);
})

