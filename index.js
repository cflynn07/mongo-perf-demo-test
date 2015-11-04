var uuid = require('node-uuid');
var async = require('async');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/navi';

MongoClient.connect(url, function (err, db) {
  console.log('connect', err);
  var entries = db.collection('entries');

  entries.count(function (err, n) {
    var randomFetchElasticUrls = [];
    async.times(1000, function (n, cb) {
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

      async.forEach(randomFetchElasticUrls, function (url, cb) {
        var start = new Date().valueOf();
        // elastic-url has unique index
        entries.find({'elastic-url': url}).toArray(function (err, doc) {
          if (err) { throw err; }
           console.log('lookup time MS:', ((new Date().valueOf()) - start));
          cb();
        });
      }, function () {
        process.exit(0);
      });

    });
  });
});
