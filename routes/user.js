const app = require("express");
const router = app.Router();
const usercontroller = require("../controller/user");
router.get("/",usercontroller.getAllUser)
router.post("/", usercontroller.addUser)

module.exports = router;