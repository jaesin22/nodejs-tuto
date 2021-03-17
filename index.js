const express = require('express');
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key')


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world'))

app.post('/register', (req, res) =>  {


    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({suceess: false, err})
        return res.status(200).json({
            suceess:true
        })
    })
});

app.listen(port, () => console.log('example app listening on port ${port}!'))