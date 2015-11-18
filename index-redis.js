var redis = require("redis");
var uuid = require('node-uuid');
var async = require('async');

var client = redis.createClient();

client.hkeys('navi', function (err, res) {
  var randomFetchElasticUrls = [];

  async.times(30, function (n, cb) {
    var nthKey = res[Math.floor(Math.random()*res.length)];
    randomFetchElasticUrls.push(nthKey);
    cb();
  }, function () {
    console.log('-----------------------------');
    console.time('startall');
    async.eachLimit(randomFetchElasticUrls, 1, function (url, cb) {
      console.time(url);
      // elastic-url has unique index
      client.hget('navi', url, function (err, res) {
        if (err) throw err;
        console.timeEnd(url);
        cb();
      });
    }, function () {
      console.timeEnd('startall');
      process.exit(0);
    });
  });
});
