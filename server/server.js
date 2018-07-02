const express = require('express')
const apilist = require('./apilist.js')
const bodyParser = require('body-parser')
const path =require('path')
let app = express();

const ejs = require('ejs')
app.engine('html',ejs.__express);
app.set('view engine','html')
app.use(express.static(path.resolve(process.cwd()+'/../')))



app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.all('*',function(req,res,next){
    res.header({
        'Access-Control-Allow-Origin':'*', //cors
        "Accept-Content":"application/json",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE'
    })
    next()
})

app.get('/',function(req,res,next){
    res.render('index',{title:'HTML'})
})

apilist(app)
app.listen('3000',function(){
   console.log('server start at:3000')
})
