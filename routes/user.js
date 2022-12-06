const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("user test is successfully");
});
router.post("/userPost", (req, res) => {
  const username = req.body.username;
  console.log(username);
  console.log(req.body);

  res.send("Your userName is" +   username);
});
module.exports = router;
