const express = require('express')
const session = require('express-session')
const User = require('./../models/user')
const router = express.Router()
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser, async (req, res, next)=>{
    
})

router.get('/login', (req, res) =>{
    if(req.session.logined){
        res.redirect('.././articles')
    }
    else{
        res.render('users/login', {})
    }
})

router.post('/login_action', urlencodedParser, (req, res)=>{
    if(req.session.logined){
        res.redirect('.././articles');
    }
    else{
        if((req.body.username)&&(req.body.password)){
            User.findOne({username: req.body.username, password: req.body.password}).exec(function(err, results){
                if(results != null){
                    req.session.logined = true;
                    req.session.username = results.username;
                    res.redirect('.././articles');
                }
                else{
                    res.redirect('login')
                }
            })
        }
        else {
            res.redirect('login')
        }
    }
})
router.get('/register', (req, res) =>{
    if(req.session.logined){
        res.redirect('.././articles')
    }
    else{
        res.render('users/register', {})
    }
})

router.post('/register_action', urlencodedParser, async (req, res, next)=>{
    if(req.session.logined){
        res.redirect('.././articles')
    }
    else{
        User.findOne({username: req.body.username}).exec(async function(err, results){
            if(results == null){
                req.user = new User()
                
                req.user.username= req.body.username
                req.user.password= req.body.password
                try{
                    req.user  = await req.user.save()
                    res.redirect('login')
                }
                catch(e){
                    console.log(e)
                    res.render('users/register', {user: req.user})
                }
            
            }
            else{
                res.render('users/login', {})
            }
        })
    }
})

router.get('/logout',async (req, res, next)=>{
    req.session.destroy(function(err){
      if (err){
        return next(err)
      }
      else {
          res.redirect('/articles')
      }
    })
  })

module.exports = router

