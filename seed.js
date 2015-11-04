var uuid = require('node-uuid');
var async = require('async');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/navi';

MongoClient.connect(url, function (err, db) {
  console.log('connect', err);
  var entries = db.collection('entries');
  var numDocuments = 1000 * 300;
  var count = 0;
  async.times(numDocuments, function (n, cb) {
    console.log('insert', count);
    count++;
    entries.insert({
      "elastic-url": uuid.v4()
    }, cb);
  }, function () {
    console.log('done');
    process.exit();
  });
});
