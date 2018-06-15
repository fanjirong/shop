const express = require('express')
const apilist = require('./apilist.js')
const bodyParser = require('body-parser')
let app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.all('*',function(req,res,next){
    res.header({
        'Access-Control-Allow-Origin':'*', //cors
        "Accept-Content":"application/json",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
        "Accept-Content":"application/json"
    })
    next()
})

apilist(app)
app.listen('3000',function(){
   console.log('server start at:3000')
})
