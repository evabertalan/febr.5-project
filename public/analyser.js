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

console.log(aminoacid_list[3]);
console.log(aminoacid_list[3].acid_id);
console.log(aminoacid_list[3].codon);


for (var i = 0; i < aminoacid_list.length; i++){
  console.log(aminoacid_list[i]);
}
