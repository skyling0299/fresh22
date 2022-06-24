const db = require("../models");
const Article = db.articles;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
    create_by: req.body.create_by
  });

  article
    .save(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the article."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  Article.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving article."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Article.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
         message: "Error retrieving Article with id=" + id 
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Article.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update article with id=${id}. Maybe article was not found!`
        });
      } else res.send({ message: "article was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating article with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;
  Article.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
        });
      } else {
        res.send({
          message: "Article was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Article with id=" + id
      });
    });
};
