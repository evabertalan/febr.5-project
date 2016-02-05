'use strict';

var dnaInput = document.querySelector('.DNA-input');
var submitButton = document.querySelector('.submit-button');
var rnaTranslator = document.querySelector('.translate-rna');



submitButton.addEventListener('click', function() {
  var sequence = dnaInput.value;
  console.log(sequence.toUpperCase());
  dnaSequenceAnalyser(sequence.toUpperCase());
});

rnaTranslator.addEventListener('click', function() {
  var sequence = dnaInput.value;
  dnaToRna(sequence.toUpperCase());
});