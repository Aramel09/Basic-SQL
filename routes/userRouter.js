const express = require("express");
const UsersController = require("../controllers/usersController");
const UsersRepo = require("../repos/usersRepo");
const pool = require("../utils/pool");

const userRouter = express.Router();

const userRepo = new UsersRepo();

const usersController = new UsersController();

userRouter.get("/users", async (req, res) => usersController.getUsers(req, res));

userRouter.post("/user", (req, res,) => usersController.createUser(req, res));

userRouter.put("/user/:id", (req, res)  => 
    {const userId = req.params.id
    usersController.updateUser(req, res, userId)})

userRouter.delete("/user/:id", (req, res) =>{
    const userId = req.params.id
    usersController.deleteUser(req, res, userId)})



// // put
// // delete
module.exports = userRouter;
