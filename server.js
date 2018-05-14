const express=require('express');
const bodyParser=require('body-parser');
const hbs=require('hbs');
const app=express();
const path=require('path');

const signup=require('./routes/signup');

app.use(express.static('public'));
app.set('views',path.join(__dirname,'app/views'));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/',signup);

app.listen(3000,()=>{
    console.log('Server connected on port 3000')
});