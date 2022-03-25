const express = require('express')
const Article = require('./../models/article')
const Message = require('./../models/message')
const router = express.Router()
var bodyParser = require('body-parser')
//const article = require('./../models/article')
const { mongo, Mongoose } = require('mongoose')
const mongoose = require('mongoose')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req,res)=>{
    res.render('/articles')
})

router.get('/new', (req, res) =>{
    if(req.session.logined == true){
        res.render('articles/new', {article: new Article(), username: req.session.username, req:req})
    }
    else{
        res.render('articles/new', {article: new Article(), username: "Anonymous", req:req})
    }
})

router.get('/edit/:id', async (req, res) =>{
    const _article = await Article.findById(req.params.id)
    res.render('articles/edit', {article: _article , username: _article.create_by})
})

router.get('/:id', async (req, res)=>{
    const _article = await Article.findById(req.params.id)
    const _message = await Message.find({article_id: req.params.id}).sort({create_at: 'desc'})
    if(_article == null ) res.redirect('/')
    else res.render('articles/show', { article: _article, req: req, message: _message, id: req.params.id})
})

router.post('/', urlencodedParser, async (req, res, next)=>{
    req.article = new Article()
    next()
}, save_article_and_redirect('new'))

router.put('/:id', async (req, res, next) =>{
    req.article = await Article.findById(req.params.id)
    next()
}, save_article_and_redirect('edit'))   

router.delete('/:id', async (req, res) =>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/articles')
})

function save_article_and_redirect(path){
    return async (req, res)=>{
        req.article.title= req.body.title  
        req.article.description= req.body.description
        req.article.markdown= req.body.markdown
        req.article.create_by= req.body.create_by
        
        try{
            req.article = await req.article.save()
            res.redirect(`/articles/${req.article.id}`)
        }catch(e){
            console.log(e)
            res.render(`articles/${path}`, {article: req.article, req:req})
        } 
    }
}

router.get('/:id/messages/new', (req, res) =>{
    if(req.session.logined == true){
        res.render('articles/messages/new', {message: new Message(), username: req.session.username, id:req.params.id, req:req})
    }
    else{
        res.render('articles/messages/new', {message: new Message(), username: "Anonymous", id: req.params.id, req: req})
    }
})

router.get('/messages/edit/:id', async (req, res) =>{
    const _message = await Message.findById(req.params.id)
    res.render('articles/messages/edit', {message: _message , username: _message.create_by, id: _message.article_id, req:req})
})


router.post('/post_messages', urlencodedParser, async (req, res, next)=>{
    req.message = new Message()

    req.message.create_by= req.body.create_by
    req.message.content= req.body.content
    //req.message.article_slug = req.body.slug
    req.message.article_id = req.body.id

    try{
        req.message  = await req.message.save()
        res.redirect(`/articles/`+req.body.id)
    }
    catch(e){
        console.log(e)
        if(req.session.logined == true){
            _username = req.session.username
        }
        else{
            _username = "Anonymous"
        }
        res.render(`articles/messages/new`, { message: req.message, username: _username, id: req.params.id, req:req})
    }
})

router.put('/messages/:id', async (req, res, next) =>{
    req.message = await Message.findById(req.params.id)
    req.message.content= req.body.content  
    try{
        req.message = await req.message.save()
        res.redirect(`/articles/`+req.body.id)
    }catch(e){
        console.log(e)
        res.render(`articles/messages/edit`, { message: req.message, username: req.session.username, req:req})
    } 
})

router.delete('/messages/:id', async (req, res) =>{
    const _message = await Message.findById(req.params.id)
    await Message.findByIdAndDelete(req.params.id)
    res.redirect('/articles/'+ _message.article_id)
})

module.exports = router

