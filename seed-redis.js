var redis = require("redis");
var uuid = require('node-uuid');
var async = require('async');

var client = redis.createClient();
var numDocuments = 1000 * 300;
var count = 0;

async.timesSeries(numDocuments, function (n, cb) {
  console.log('insert', count);
  count++;
  client.hset('navi', uuid.v4(), JSON.stringify({
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
  }), function () {
    console.log('args', arguments);
    cb();
  });
}, function () {
  console.log('done');
  process.exit();
});
