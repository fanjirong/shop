const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
//定义接口
module.exports = function(app){
    //首页商品列表
    const goodPath = path.resolve(__dirname+'/goodslist')
    app.get('/index/recommend.action',(req,res)=>{
       // console.log(res.query)
        if(req.query.page>5){
             res.json({
                code:1000,
                msg:'没有更多数据了'
            })
        }else{
            let data = fs.readFileSync(goodPath+`/data${req.query.page}.json`,'utf-8')
            setTimeout(()=>{
                 res.json(data)
            },2000)
        }
    })

    const classify = path.resolve(__dirname+'/fenlei')
    app.get('/index.php',(req,res)=>{
        let data = fs.readFileSync(classify+`/data${req.query.cid}.json`,'utf-8')
         res.end(data)
    })

    app.post('/api/user/register',(req,res)=>{
        let userpath = path.resolve(__dirname+'/user')
        let userlist = JSON.parse(fs.readFileSync(userpath+'/user.json','utf-8'))
        if(userlist.some(element=>{
             req.body.username==element.username
        })){
             res.json({
                msg:'该用户已存在',
                code:0
            })
        }
        userlist.push(req.body)
        fs.writeFile(userpath+'/user.json',JSON.stringify(userlist),function(err){
            if(err){
                 res.json({
                    msg:'err',
                    code:0
                })
            }else{
                 res.json({
                    msg:'success',
                    code:1
                })
            }
        })
    })
    app.post('/api/user/login',(req,res)=>{
        console.log(req.body)
        let token = jwt.sign(req.body,'1601E')
        res.json({
            msg:'sucess',
            code:1,
            token
        })
    })
}
