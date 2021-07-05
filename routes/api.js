const app = require("express");
const router = app.Router();
const userRouter = require("./user");
router.use("/user", userRouter);


module.exports = router;
