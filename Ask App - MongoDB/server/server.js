


//  version

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require('cors');

const mongoose = require('mongoose');
const QuestionModel = require('./models/questionModel');
let app = express();

app.listen(6969, function(error){
    if(error) console.log(error);
    else console.log("Running at port 6969!!!");
})

// connect mongo
mongoose.connect('mongodb://localhost/AskApp',(error) =>{
    if(error) console.log("DB connect error!", error)
    else console.log("DB connect success!");
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use(express.static('../client'));

app.get('/', (request, response) =>{
    response.send("Hello Mother Fucker!!!");
})

app.post('/ask', (request,response) =>{
    const newQuestion = {
        content: request.body.question,
        };

    QuestionModel.create(newQuestion, (error, questionCreated)=>{
        if(error) console.log(error);
        else response.redirect('http://localhost:8080/ask.html');
    })
    
    
    
})  // end post method


// send question to url /question
app.get('/question',(request, response) =>{
    QuestionModel.find({    }, (error, questions) =>{
        let random = Math.floor(Math.random() * (questions.length+1));
        //QuestionModel.findOne({ }).skip(random == 0 ? random : (random-1)); 
        console.log(random); 
        QuestionModel
            .findOne({ })
            .skip(random == 0 ? random : (random-1))  
            .exec((error, questionFound) =>{
                if(error) console.log(error);
                else response.send({message: 'Message', question: questionFound});
            })
    })

    
})

// change number of yes/no
app.put('/answer',(request,response) =>{
    
    QuestionModel.findByIdAndUpdate(request.body.id,{$set:{yes: request.body.yes, no : request.body.no}},(error,questionUpdated) =>{
        if(error) console.log(error);
        else console.log('Updated!!!');
    })
    
    
})