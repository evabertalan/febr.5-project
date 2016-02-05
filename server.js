'use srtict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var Aminoacid = require('./aminoacid_items.js');

app.use(bodyParser.json());
app.use(express.static('public'));
app.listen(3000);


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aminoacids',
  timezone: 'utc'
});

var aminoacids = new Aminoacid(connection);
connection.connect();

app.get('/aminoacids', function(req, res) {
  aminoacids.list(function(err, result){
    if (err){
      res.json({status: 'not exists'});
    } else {
      res.json(result);
    }
  });
});

app.get('/aminoacids/:amino_letter', function(req, res) {
  aminoacids.select(req.params.amino_letter, function(err, result){
    if (err){
      res.json({status: 'not exists'});
    } else {
      res.json(result);
    }
  });
});