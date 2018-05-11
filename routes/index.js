var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var AWS = require('aws-sdk');
var accessKey = "";
var secretAccessIDD = "";

//var s3 = new AWS.S3({

// accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY


//});


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'AWS S3 BUCKET Operations' });

});

router.post('/auth', function(req, res, next) {
    console.log('inside auth under index route');

    accessKey = req.body.accessToken;
    secretAccessKey = req.body.secretKey;

    // console.log("got data from" + process.env.AWS_ACCESS_KEY_ID, process.env.AWS_ACCESS_KEY_ID);
    console.log("got data from controller", accessKey);
    console.log("got data from controller", secretAccessKey);

    //checking frontend value to backend
    //  s3.accessKeyId = accessKey;
    // s3.secretAccessId = secretAccessKey;

    var s3 = new AWS.S3({
        accessKeyId: req.body.accessToken,
        secretAccessKey: req.body.secretKey

    });
    console.log("S3secret", s3.secretAccessKey);
    console.log("s3keyyy", s3.accessKeyId);


    s3.listBuckets(function(err, data) {
        if (err) {
            console.log("Error", err);
            res.status(500);
            res.send(err);
            return;
        } else {
            res.status(200);
            res.json(data);
            return;
            console.log("Bucket List", data);
            //console.log("nameBucketsssss");



        }
    });


    /*task to do
      1. get the aws-sdk 
      2. add key and token from env 
      3. make a list bucket request using aws-sdk function
      4. if you get a list of buckets pass to the successblock in controller
      5. handle error response too
      
    
    
    */
})



//===========Delete Back-end===========================

router.post('/deleteb', function(req, res, next) {
    console.log('inside Delete Backend');

    //  accessKey = req.body.accessToken;
    //secretAccessKey = req.body.secretKey;

    console.log("Delete-Backend Got Data from Controller " + accessKey, +secretAccessKey);

    var s3 = new AWS.S3({
        accessKeyId: req.body.accessToken,
        secretAccessKey: req.body.secretKey

    });

    var params = {
        Bucket: req.body.bucketName
    };
    console.log(params);


    s3.deleteBucket(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            res.status(500);
            res.send(err);
            return;
        } else {

            res.status(200);
            res.json(data);
            console.log(data); // successful response
            return;
        }
    });
    console.log("param");







})



//==================================================//

//============Create Bucket========================//

router.post('/createBucket', function(req, res, next) {
    console.log('inside Create Bucket Backend');


    var s3 = new AWS.S3({
        accessKeyId: req.body.accessToken,
        secretAccessKey: req.body.secretKey

    });
    console.log(req.body.bucketName);
    var params = {
        Bucket: req.body.bucketName
    };



    s3.createBucket(params, function(err, data) {
        if (err) {

            console.log("Error", err);
            res.status(500);
            res.send(err);
            return;
        } else {

            res.status(200);
            res.json(data);
            console.log("Success", data.Location);
            return;

        }
    });
    console.log("param");







})




//=================================================//




module.exports = router;