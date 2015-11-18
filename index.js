var uuid = require('node-uuid');
var async = require('async');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/navi';

MongoClient.connect(url, function (err, db) {
  console.log('connect', err);
  var entries = db.collection('entries');

  entries.count(function (err, n) {
    var randomFetchElasticUrls = [];
    async.timesSeries(30, function (n, cb) {
      var nthDocument = Math.floor(Math.random()*n);
      entries.find({}, {
        limit: 1,
        skip: nthDocument
      }).toArray(function (err, docs) {
        if (err) { throw err; }
        randomFetchElasticUrls.push(docs[0]['elastic-url']);
        cb();
      });
    }, function () {
      console.log('-----------------------------');
      console.time('startall');
      async.eachLimit(randomFetchElasticUrls, 1, function (url, cb) {
        console.time(url);
        // elastic-url has unique index
        entries.find({'elastic-url': url}).toArray(function (err, doc) {
          console.timeEnd(url);
          if (err) { throw err; }
          cb();
        });
      }, function () {
        console.timeEnd('startall');
        process.exit(0);
      });
    });
  });
});
