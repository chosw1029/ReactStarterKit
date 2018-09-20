var express = require("express");
var router = express.Router();

/* GET restapi listing. */
router.get("/", function(req, res, next) {
  res.send("REST API TEST");
});

module.exports = router;
