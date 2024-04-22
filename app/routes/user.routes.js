module.exports = app =>{
    const user = require("../controller/user.controller");

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.create);

    app.use('/api/users', router);

}