const mongoose = require('mongoose')

//user in database's data colomn

const messageSchema = new mongoose.Schema({
    create_by: {
        type: String, 
        required: true
    },
    article_id:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    create_at:{
        type: Date,
        default:()=> Date.now()
    }
})

module.exports = mongoose.model('message', messageSchema)