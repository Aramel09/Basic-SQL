const UsersService = require("../services/usersService");

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async getUsers(req, res) {
    try {
      const users = await this.usersService.getUsers();
      res.send(users);
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }

  async createUser(req, res) {
    try {
      const content = req.body;
      await this.usersService.createUser(content);
      res.status(200).send("User Created");
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
    }
  }
  async updateUser(req, res, userId) {
    try{
      const informacion = {...req.body, id: userId}
      console.log(informacion)
      this.usersService.updateUser(informacion)
      res.status(200).send("User edited")
    }
    catch (e) {
    console.log(e);
    res.status(500).send("ERROR!");
  }
  }
  async deleteUser(req, res, userId) {
    try{
      const idInfo = {id: userId}
      this.usersService.deleteUser(idInfo)
      res.status(200).send("User Deleted")
    }
    catch (e) {
      console.log(e);
      res.status(500).send("ERROR!");
  }}
}

module.exports = UsersController;
