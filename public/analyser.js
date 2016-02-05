'use strict';

var url = 'http://localhost:3000/aminoacids';

var dnaInput = document.querySelector('.DNA-input');
var submitButton = document.querySelector('.submit-button');
var infoContainer = document.querySelector('.info-container');
var selectAmino = document.querySelector('.aminoacid-info');
var aminoContainer = document.querySelector('.aminoacid-lister');

submitButton.addEventListener('click', function() {
  var sequence = dnaInput.value;
  dnaSequenceAnalyser(sequence.toUpperCase());
  dnaToRna(sequence.toUpperCase())
  aminoAcidConverter(sequence);
});


var aminoLister = function(response) {
  aminoContainer.innerHTML = '';
  var aminoAcid = JSON.parse(response);
  console.log(aminoAcid);
  for (var i = 0; i < aminoAcid.length; i++) {
    tabelOfInformation(aminoAcid[i]);
    console.log(aminoAcid[i].picture);
  }
};

selectAmino.addEventListener('click', function(e) {
  var amino_letter = e.target.getAttribute('class');
  createRequest('GET', url +'/' + amino_letter, undefined, aminoLister);
});

var tabelOfInformation = function (info) {
    var row1 = aminoContainer.insertRow(0);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    cell1.innerHTML = 'name: ';
    cell2.innerHTML = info.name;

    var row2 = aminoContainer.insertRow(1);
    var cell3 = row2.insertCell(0);
    var cell4 = row2.insertCell(1);
    cell3.innerHTML = 'molecular weight: ';
    cell4.innerHTML = info.molecular_weight;

    var row3 = aminoContainer.insertRow(2);
    var cell5 = row3.insertCell(0);
    var cell6 = row3.insertCell(1);
    cell5.innerHTML = 'Side chain polarity: ';
    cell6.innerHTML = info.polarity;

    var row4 = aminoContainer.insertRow(3);
    var cell7 = row4.insertCell(0);
    var cell8 = row4.insertCell(1);
    cell7.innerHTML = 'picture: ';
    cell8.innerHTML = "<img style='width:150px;height:120px;' src=" +info.picture+">";

};