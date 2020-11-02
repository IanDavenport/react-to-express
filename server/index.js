const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({question: 'What is the answer to life, the universe and everything?'});
});

app.post('/', (req, res) => {
    if (req.body.answer == '42') {
        res.send('Correct');
    } else {
        res.send('In Correct');
    }
});

app.listen(3001);


//  TO START 'SERVER' -
//  USE THE SPLIT WINDOW IN TERMINAL (LEFT OF WASTE BIN) AND RUN:
//  ==>   NPX NODEMON 
