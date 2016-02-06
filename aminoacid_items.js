'use strict';

function Aminoacid(connection) {
  this.list = function(callback) {
    connection.query('SELECT * FROM aminoacids;', function(err, res){
      callback(err, res);
    });
  };
  this.select = function(amino_letter, callback) {
    connection.query('SELECT * FROM aminoacids WHERE amino_letter=?', amino_letter, function(err, res) {
      callback(err, res);
    });
  };
}

module.exports = Aminoacid;