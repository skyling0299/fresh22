module.exports = app => {
    const users = require("../controller/user.controller.js");
    var router = require("express").Router();
 
    router.post("/register", users.create);
   
    router.post("/login", users.findOne);

    app.use('/api/users', router);
  };