
module.exports = mongoose => {
    const Article = mongoose.model(
      "article",
      mongoose.Schema(
        {
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
            create_by:{
                type: String,
                require: true
            }
        }
      )
    );
    return Article;
  };