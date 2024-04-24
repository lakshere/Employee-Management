module.exports = app =>{
    const user = require("../controller/user.controller");

    var router = require("express").Router();

    // Create a new user
    router.post("/", user.create);

    // Retrieve all user
    router.get("/", user.findAll);

    // Retrieve a single user with id
    router.get("/:user_id", user.findOne);

    // Update a User with id
    router.put("/:id", user.update);

    // Delete a user with id
    router.delete("/:user_id", user.delete);
    

    app.use('/api/users', router);

}