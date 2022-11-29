// const express = require("express");
// const UsersController = require("../controllers/usersController");
// const UsersRepo = require("../repos/usersRepo");
// const pool = require("../utils/pool");

// const userRouter = express.Router();

// const userRepo = new UsersRepo();

// const usersController = new UsersController();

// userRouter.get("/users", async (req, res) => {

//     const info = await userRepo.getUsers()
//     console.log("GET was good")
//     res.send(info.rows)
// })

// userRouter.post("/user", async (req, res) => {

//     const username = req.body.username;
//     const password = req.body.password
//     console.log(username)
//     console.log(password)
//     userRepo.createUser({username, password, haircolor})

//     const values = req.body;
//     console.log(values)
//     await userRepo.createUser(req.body)
//     res.send("POST was good")
// })

// userRouter.put("/user/:id", async (req, res) =>{ 
//     const userId = req.params.id

//     const value = req.body
//     console.log(value, userId)

//     const nombre = {...req.body, id: userId}
//     console.log(nombre)

//     await userRepo.editUser(nombre)


//     res.send("Ok")


// })

// userRouter.delete("/user/:id", (req, res) =>{
//     const userId = req.params.id
//     userRepo.deleteUser({id: userId})
//     res.send("Account deleted")
// })
// put
// delete
// module.exports = userRouter;
