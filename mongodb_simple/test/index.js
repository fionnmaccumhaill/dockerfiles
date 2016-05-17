'use strict';

// connect to mongo
var assert = require('assert');
var murl = 'mongodb://192.168.99.100:27017/test?connectTimeoutMS=2500';
var mdb = 'doctest';
var mcoll = "dockertest_collection";
console.log("db:" + mdb + " : " + mcoll + " : " + murl);
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;

function insert(aDocument, aCallback) {
    // console.log("inside insert"+aDSarray[0]);
    var myCollection;
    MongoClient.connect(murl, function(err, db) {
        console.log("connecting");
        assert.equal(err, null);
        myCollection = db.collection(mcoll);
        myCollection.insertOne(aDocument, (err, result) => {
            assert.equal(err, null);
            console.log(aDocument);
            count(mongoCallback);
            db.close();
        });
    });
}

// read documents from collection
function count(aCallback) {
    var myCollection;
    MongoClient.connect(murl, function(err, db) {
        assert.equal(err, null);
        myCollection = db.collection(mcoll);
        myCollection.find().count(function(err, count) {
            console.log('count error:'+err);
            console.log("count:"+count);
            aCallback(err, db, myCollection);
        })
    });
}

function mongoCallback(err, db, aCollection) {
    console.log("callback error:"+err);
    db.close();
}

var theDoc = { "city" : "new haven", "state" : "CT", "condition" : "7 of 9s"};
insert(theDoc, mongoCallback);
