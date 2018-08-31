/*
const express =  require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
let app = express();
app.listen(6969,(error) =>{
    if(error) console.log(error);
    else console.log("Running at port 6969!!!");
})
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (request, response) =>{
    response.send("Hello mother fucker!!!");
})

app.use(express.static('../client'));


app.post('/ask', function(request,response){
    console.log("Question: "+request.body.question);
    fs.readFile('./questions.txt', (error, fileData)=>{
        if(error) console.log(error);
        else {
            try {  // check 
                console.log("File Data: "+ fileData);
                let questions = [];
                if(fileData != "" && JSON.parse(fileData).length){
                    questions =  JSON.parse(fileData);
                }
                
                var newQuestion = {question : request.body.question};
                questions.push(newQuestion);    
                fs.writeFile('./questions.txt',JSON.stringify(questions),(error)=>{
                    if(error) console.log(error);
                    else response.redirect('http://localhost:8080/ask.html');
                    //console.log('Success!!');
            })
            } catch (error) {
                console.log("Error: "+error);
            }
        }
        
    })
})
*/


// anothere version

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require('cors');
let app = express();

app.listen(6969, function(error){
    if(error) console.log(error);
    else console.log("Running at port 6969!!!");
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use(express.static('../client'));

app.get('/', (request, response) =>{
    response.send("Hello Mother Fucker!!!");
})

app.post('/ask', (request,response) =>{
    console.log("Question: "+request.body.question);
    let questions = [];
    fs.readFile('./questions.txt', (error,fileData) =>{
        if(error) console.log(error);
        else{
            try {
                console.log("File Data: "+ fileData);
            
                if(fileData != "" && JSON.parse(fileData).length){
                    questions = JSON.parse(fileData);
                }

                var newQuestion = {
                    id: questions.length + 1,
                    questionContent: request.body.question,
                    yes : 0,
                    no : 0
                };
                questions.push(newQuestion);

                fs.writeFile('./questions.txt', JSON.stringify(questions), (error)=>{
                    if(error) console.log(error);
                    else response.redirect('http://localhost:8080/ask.html');   
                })  
            } catch (error) {
                console.log("Error : "+error);
            }
            
        }
    })
    
    
})  // end post method


// send question to url /question
app.get('/question',(request, response) =>{
    fs.readFile('./questions.txt',(error, fileData) =>{
        if(error) console.log(error);
        else{
            try {
                let questions = JSON.parse(fileData);
                let random = Math.floor(Math.random() * questions.length);
                let randomQuestion = questions[random];
                response.send(randomQuestion);
            } catch (error) {
                console.log(error);
            }
        }
    })
})

// change number of yes/no
app.put('/answer',(request,response) =>{
    
    let newAnswer = request.body; // object 
    let questions = [];
    fs.readFile('./questions.txt', (error, fileData) =>{
        if(error) console.log(error);
        else{
            try {
                questions = JSON.parse(fileData);
                for(var i=0;i<questions.length;i++){
                    if(newAnswer.id == questions[i].id){
                        questions[i] =  newAnswer;
                    }
                }
                
                fs.writeFile('./questions.txt', JSON.stringify(questions), (error)=>{
                    if(error) console.log(error);
                    else console.log('Success');   
                })
            } catch (error) {
                console.log(error);
            }
        }
    })
})