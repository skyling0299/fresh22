const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const create_dom_purifier = require('dompurify')
const {JSDOM} = require('jsdom')
const dompurify = create_dom_purifier(new JSDOM().window)

const articleSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    description:{
        type: String
    }, 
    markdown: {
        type: String,
        required: true
    },
    create_at:{
        type: Date,
        default:()=> Date.now()
    },
    slug:{
        type: String,
        require: true,
    },
    sanitized_html:{
        type: String,
        required: true
    },
    create_by:{
        type: String,
        require: true
    }
})

articleSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, { lower: true, strict : true })
    }
    if(this.markdown){
        this.sanitized_html = dompurify.sanitize(this.markdown)
    } 

    next()
})

module.exports = mongoose.model('article', articleSchema)