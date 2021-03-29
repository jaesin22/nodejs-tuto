const express = require('express');
const app = express()
const port = 5000

const bodyParser = require('body-parser');

const { auth } = require('./middleware/auth')
const { User } = require('./models/User');
const config = require('./config/key')
const cookieParser = require('cookie-parser');


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world'))

app.post('/api/users/register', (req, res) =>  {


    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({suceess: false, err})
        return res.status(200).json({
            suceess:true
        })
        console.log(doc);
    })
}); 

app.post('/api/users/login', (req,res) => {
    //요청된 이메일을 db에서 읽는지 찾는다
    User.findOne({ email: req.body.email}, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }

        // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
            return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
        
            //비밀번호까지 맞다면 토큰을 생성하기
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다(쿠키에)
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess: true, userId: user._id})
            })
        })
    })
})
// role 0 -> 일반 유저, role 0이 아니면 관리자
app.get('/api/users/auth', auth, (req, res) => {

    //여기까지 미들웨어를 통과했다는 얘기는 authentication 이 true라는 말
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name : req.user.name,
        lastname : req.user.lastname,
        role: req.user.role,
        image: req.user.image

    })
})


app.get('/api/users/logout', auth, (req, res) => {
    console.log('req.user', req.user)
    User.findOneAndUpdate({ _id : req.user._id },
        { token: "" }
        , (err, user) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            })
        })
})


app.listen(port, () => console.log(`example app listening on port ${port}!`))