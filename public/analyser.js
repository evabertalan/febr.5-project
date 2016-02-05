'use strict';

var dnaInput = document.querySelector('.DNA-input');
var submitButton = document.querySelector('.submit-button');
var infoContainer = document.querySelector('.info-container');

submitButton.addEventListener('click', function() {
  var sequence = dnaInput.value;
  dnaSequenceAnalyser(sequence.toUpperCase());
  dnaToRna(sequence.toUpperCase())
  aminoAcidConverter(sequence);
});
