'use strict';

var aminoTable = document.querySelector('.aminoacid-info');

var sequenceHandler = function(sequence) {
  var row = aminoTable.insertRow(0);
  for (var i=0; i < sequence.length; i++){
    var cell = row.insertCell(i);
    cell.setAttribute('class', sequence[i]);
    cell.innerHTML = sequence[i];
  }
};