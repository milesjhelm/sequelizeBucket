var express = require("express");
var router = express.Router();

var bucket = require("../models/bucketList.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  bucket.all(function(data) {
    console.log(data)
    var bucketNotDone = [];
    var bucketDone = [];
    console.log(data);
    for (var i=0; i < data.length; i++) {
      if (data[i].done) {
        bucketDone.push(data[i]);
      } else {
        bucketNotDone.push(data[i]);
      }
    } 

    res.render("index", {BucketNotDone: bucketNotDone, BucketDone: bucketDone});
  });
});

router.post("/", function(req, res) {
  bucket.create([
    "name", "done"
  ], [
    req.body.hobby, "0"
  ], function(result) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bucket.update({
    done: req.body.done
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
