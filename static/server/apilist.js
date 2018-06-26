const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
//定义接口
module.exports = function(app){
    //首页商品列表
    const goodPath = path.resolve(__dirname+'/goodslist')  //首页商品数据
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

    const classify = path.resolve(__dirname+'/fenlei')  //分类数据
    app.get('/index.php',(req,res)=>{
        let data = fs.readFileSync(classify+`/data${req.query.cid}.json`,'utf-8')
         res.end(data)
    })

    app.post('/api/user/register',(req,res)=>{  //注册接口
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
    app.post('/api/user/login',(req,res)=>{  //登录接口
        let userpath = path.resolve(__dirname+'/user')
        let userlist = JSON.parse(fs.readFileSync(userpath+'/user.json','utf-8'))
        let flag = false;
        userlist.forEach(item=>{
             if(item.username===req.body.username&&item.password===req.body.password){
                 flag=true;
             }
        })
        if(flag){
            let token = jwt.sign(req.body,'1601E',{expiresIn:60*60*60})
            res.json({
                msg:'sucess',
                code:1,
                token
            })
        }else{
             res.json({
                msg:'用户名或密码错误',
                code:0
            })
        }
        
    })


    app.post('/api/goodslist',(req,res)=>{  //购物车商品接口
        jwt.verify(req.body.token,'1601E',function(err,decoded){
            if(err){
                res.json({
                    code:0,
                    msg:err
                })
            }else{
                let goodslist = JSON.parse(fs.readFileSync(__dirname+'/shoplist/shoplist.json','utf-8'));
                res.json({
                    code:1,
                    msg:'success',
                    data:goodslist[decoded.username]
                })
            }
        })  //解密token
    })

    app.post('/api/addshop',function(req,res){  //添加购物车接口
        if(!req.body.token){
            res.json({
                code:2,
                msg:'参数错误'
            })
            return
        }
        jwt.verify(req.body.token,'1601E',function(err,decoded){
            if(err){
                res.json({
                    code:0,
                    msg:'登录超时，请重新登录'
                })
            }else{
                let shoplist=JSON.parse(fs.readFileSync(__dirname+'/shoplist/shoplist.json','utf-8'))

                if(shoplist[decoded.username]){
                    let flag = false;  //判断手否存在
                    shoplist[decoded.username].forEach((item,index)=>{
                        if(item.wname == req.body.list.wname){
                            ++item.count;
                            flag=true;
                        }
                    })
                     if(!flag){
                        let o = {
                            ...req.body.list,
                            count:1
                        }
                        shoplist[decoded.username].push(o)
                    }
                }else{
                    shoplist[decoded.username] = [{count:1,...req.body.list}];
                }
                fs.writeFile(__dirname+'/shoplist/shoplist.json',JSON.stringify(shoplist),(err)=>{
                    if(err){
                         res.json({
                            code:0,
                            msg:'写入错误'
                        })
                    }else{
                         res.json({
                            code:1,
                            msg:'添加成功'
                        })
                    }
                })
            }
        })  //解密token
    })

    app.post('/api/shop/count',function(req,res){  //修改购物车数据
        if(!req.body.token){
            res.json({
                code:2,
                msg:'参数错误'
            })
            return
        }
        jwt.verify(req.body.token,'1601E',function(err,decoded){
            if(err){
                res.json({
                    code:0,
                    msg:'登录超时，请重新登录'
                })
            }else{
                let shoplist=JSON.parse(fs.readFileSync(__dirname+'/shoplist/shoplist.json','utf-8'))
                let goodslist = shoplist[decoded.username];
                goodslist = goodslist.map((item,index)=>{
                    if(item.wname==req.body.name){
                        item.count = req.body.count
                    }
                })
                fs.writeFile(__dirname+'/shoplist/shoplist.json',JSON.stringify(shoplist),(err)=>{
                    if(err){
                         res.json({
                            code:0,
                            msg:'写入错误'
                        })
                    }else{
                         res.json({
                            code:1,
                            msg:'修改成功'
                        })
                    }
                })
            }
        }) 
    })

    app.post('/api/shop/del',function(req,res){  //删除购物车数据
        if(!req.body.token){
            res.json({
                code:2,
                msg:'参数错误'
            })
            return
        }
        jwt.verify(req.body.token,'1601E',function(err,decoded){
            if(err){
                res.json({
                    code:0,
                    msg:'登录超时，请重新登录'
                })
            }else{
                let shoplist=JSON.parse(fs.readFileSync(__dirname+'/shoplist/shoplist.json','utf-8'))
                let goodslist = shoplist[decoded.username];
                let del = [];
                let goodslists = goodslist.forEach((item,index)=>{
                     req.body.name.forEach((v,i)=>{
                         if(item.wname==v){
                             del.push(index);
                             del.forEach((ii)=>{
                                 if(index == ii){
                                     goodslist.splice(ii,1)
                                 }
                             })
                         }
                     })
                })
                 console.log(goodslists)
                fs.writeFile(__dirname+'/shoplist/shoplist.json',JSON.stringify(shoplist),(err)=>{
                    if(err){
                        res.json({
                            code:0,
                            msg:'写入错误'
                        })
                    }else{
                        res.json({
                            code:1,
                            msg:'删除成功'
                        })
                    }
                })
            }
        }) 
    })

    app.post('/api/getcity',(req,res)=>{   //获取地址
        console.log(req.body)
        let addlist = JSON.parse(fs.readFileSync(__dirname+'/city/add.json','utf-8'))
        jwt.verify(req.body.token,'1601E',function(err,decoded){
            if(err){
                res.json({
                    code:0,
                    msg:'登录超时，请重新登录'
                })
            }else{
                if(addlist[decoded.username]){
                    addlist[decoded.username].push(req.body.data)
                }else{
                    addlist[decoded.username]=[req.body.data]
                }
                fs.writeFile(__dirname+'/city/add.json',JSON.stringify(addlist),(err)=>{
                    if(err){
                         res.json({
                            code:2,
                            msg:'写入错误'
                        })
                    }else{
                         res.json({
                            code:1,
                            msg:'保存成功'
                        })
                    }
                })
            }
        })
    })
}
