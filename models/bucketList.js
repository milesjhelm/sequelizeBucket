// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var bucketList = {
  all: function(cb) {
    orm.all("bucket_list", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("bucket_list", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("bucket_list", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (bucketListController.js).
module.exports = bucketList;
