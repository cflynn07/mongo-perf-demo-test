var uuid = require('node-uuid');
var async = require('async');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/navi';

MongoClient.connect(url, function (err, db) {
  console.log('connect', err);
  var entries = db.collection('entries');
  entries.ensureIndex({'elastic-url': 1}, {unique: true});
  var numDocuments = 1000 * 300;
  var count = 0;
  async.times(numDocuments, function (n, cb) {
    console.log('insert', count);
    count++;
    entries.insert({
      "elastic-url": uuid.v4(),
      'direct-urls': {
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        },
        'XKCD5': {
          dockerHost: '0.0.0.0',
          branch: 'master',
          url: 'www.google.com',
          ports: {
            '80': 22344 ,
            '8080': 23425
          }
        }
      },
      'user-mappings': {
        'user1': 'mapping',
        'user2': 'mapping',
        'user3': 'mapping',
        'user4': 'mapping',
        'user5': 'mapping',
        'user6': 'mapping',
        'user7': 'mapping',
      },
      'org': 55555
    }, cb);
  }, function () {
    console.log('done');
    process.exit();
  });
});
