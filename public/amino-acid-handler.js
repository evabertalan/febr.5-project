'use strict';

var aminoTable = document.querySelector('.aminoacid-info');

var aminoAcidHandler = function(aminoAcidSequence) {
  var row = aminoTable.insertRow(0);
  for (var i=0; i < aminoAcidSequence.length; i++){
    var cell = row.insertCell(i);
    cell.setAttribute('id', aminoAcidSequence[i]);
    cell.innerHTML = aminoAcidSequence[i];
  }
};