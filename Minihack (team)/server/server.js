const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../client'));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.put('/player', (req, res) => {
    // const player = req.body;
    console.log(req.body);
    // QuestionModel.findById(questionId, (err, questionFound) => {
    //   if(err) console.log(err)
    //   if(!questionFound) res.send({ message: 'Question not found!', question: null })
    //   else {
    //     questionFound[answer] += 1;
    //     questionFound.save((err, questionUpdated) => {
    //       if(err) console.log(err)
    //       else res.send({ message: 'Success', question: questionUpdated });
    //     })
    //   }
    // });
  });

app.listen(6969, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening at port 6969!");
});