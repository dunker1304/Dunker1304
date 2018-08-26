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
