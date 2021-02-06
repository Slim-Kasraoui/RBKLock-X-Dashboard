/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

router.get("/", userController.getUsers);

router.get("/:_id", userController.getUserById);

router.post("/", userController.addUser);

router.put("/:_id", userController.updateUserById);

router.delete("/:_id", userController.deleteUserById);

module.exports = router;
