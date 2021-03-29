const express = require('express');
const mongoose = require("mongoose");
const app = express()
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(express.urlencoded());
app.use(express.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json('application/json'));
app.use(cors({ origin: 'http://localhost:4200', optionsSuccessStatus: 200 }));

mongoose.connect('mongodb://localhost/JJAG', { useNewUrlParser: true, useUnifiedTopology: true });

var signInSchema = new mongoose.Schema({
    userName : String,
    password : String
});

const signInModel = mongoose.model('signInModel',signInSchema);



app.post("/signIn", (req, res) => {
    console.log("hi")
    console.log(req.body)
    let signInData = new signInModel();
    signInData.userName = req.body.userName;
    signInData.password = req.body.password;
    signInData.save((err,success) => {
        if(err) {
            console.log("not saved");
        }
        else{
            res.send({
                success : true,
                message : "Procreate Will Shortly Connect With You",
                data : null
            })
        }
    });
});

app.listen(port,() => {
    console.log(`service is ON on port ${port}`);
});