'use strict';

function Aminoacid(connection) {
  this.list = function(callback) {
    connection.query('SELECT * FROM aminoacids;', function(err, res){
      callback(err, res);
    });
  };
}

module.exports = Aminoacid;