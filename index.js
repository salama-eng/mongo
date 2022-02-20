const express = require('express');
const mongoose = require('mongoose');
const users = require('./models/users');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/coding_academy').then((result)=>console.log(result)).catch((err)=>console.log(err));

app.get(['/', '/home'], auth, (req, res)=>{
    res.render('index');
});
app.post('/add_user', (req, res)=>{
    const user = new users({
        name: req.body.name,
        email: req.body.email,
        
    }).save();
    res.render('user_info', {info: req.body});
    res.end();
});
function auth(req, res, next){
    next();
}
app.listen(4000, console.log('listening on port 3000'));