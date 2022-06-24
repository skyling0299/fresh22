const db = require("../models");
const User = db.users;
const session = require('express-session')

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};


exports.findOne = (req, res) => {
  User.findOne ({username: req.body.username, password: req.body.password})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found user with username " +req.body.username });
      else {
        res.send(data);
        req.session.logined = true;
      }
    })
    .catch(err => {
      res.status(500).send({
         message: "Error retrieving User with id=" + req.body.username 
      });
    });
};


