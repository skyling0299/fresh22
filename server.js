const express = require('express')
const mongoose= require('mongoose')
const app = express()
const article_router = require('./routes/articles')
const user_router = require('./routes/users')
const article = require('./models/article')
const user = require('./models/user')
const method_override = require('method-override')
const session = require('express-session')


mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(method_override('_method'))


app.use(session({
  secret: 'mySecret',
  name: 'username', // optional
  saveUninitialized: false,
  resave: true,
  loggined: false
}))

app.use('/public/stylesheet', express.static('style.css'));

app.get('/articles', async (req, res) => {
    const articles = await article.find().sort({create_at: 'desc'})
    res.render('articles/index', { articles: articles, req: req }) // render裡面放路徑，記得加單引號
}) // set up the route, / means index
app.get('/users', (req, res) =>{
    res.render('users/login', {}) 
})


app.use('/articles', article_router) // 網址會多一個/articles 在前面
app.use('/users', user_router)
// app.use('/public/stylesheet', express.static('style.css'));

app.listen(5000) // 5000 = port number, going to run on port 5000
// cannot get/ -->because no route(will do in line4)

