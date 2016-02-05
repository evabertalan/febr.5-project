'use strict';

var dnaInput = document.querySelector('.DNA-input');
var submitButton = document.querySelector('.submit-button');
// var rnaTranslator = document.querySelector('.translate-rna');

submitButton.addEventListener('click', function() {
  var sequence = dnaInput.value;
  dnaSequenceAnalyser(sequence.toUpperCase());
  dnaToRna(sequence.toUpperCase())
  aminoAcidConverter(sequence);
});

// rnaTranslator.addEventListener('click', function() {
//   var sequence = dnaInput.value;
//   dnaToRna(sequence.toUpperCase());
// });

// for (var i = 0; i < aminoacid_list.length; i++){
//   console.log(aminoacid_list[i]);
//   console.log(aminoacid_list[i].acid_id);
//   console.log(aminoacid_list[i].codon);
// }

