module.exports = app =>{
    const user = require("../controller/user.controller");

    var router = require("express").Router();

    // Create a new user
    router.post("/", user.create);

    // Retrieve all user
    router.get("/", user.findAll);

    // Retrieve a single user with id
    router.get("/:user_id", user.findOne);

<<<<<<< HEAD
    // Update a User with id
    router.put("/:id", user.update);
=======
    // Delete a user with id
    router.delete("/:user_id", user.delete);
>>>>>>> 063ca062c8caa34a82e0b3ac57d52b54e23be834

    app.use('/api/users', router);

}