const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routers/apiRouter');
const bodyParser = require('body-parser');
//=======================================================================
mongoose.connect('mongodb://localhost/tk-hotgirl',{ useNewUrlParser: true },(error) =>{
    if(error) console.log(error);
    else console.log('Connect to DB success!!!');
});

let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//========================================================================
app.get('/', (request,response) =>{
    response.send('Techkids Hotgirl');
})

app.use('/api',apiRouter);

//====================================================================================
app.listen(6969,(error) =>{
    if(error) console.log(error);
    else console.log("Server run at port 6969...")
});