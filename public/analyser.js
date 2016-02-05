'use strict';

var dnaInput = document.querySelector('.DNA-input');
var submitButton = document.querySelector('.submit-button');
var rnaTranslator = document.querySelector('.translate-rna');



submitButton.addEventListener('click', function() {
  var sequence = dnaInput.value;
  console.log(sequence.toUpperCase());
  dnaSequenceAnalyser(sequence.toUpperCase());
});


var dnaToRna = function(dnaSequence) {
  var rnaSequence = ''
  for (var i = 0; i < dnaSequence.length: i++) {
    if (dnaSequence[i] === 'A'){
      rnaSequence += 'U';
    } else if (dnaSequence[i] === 'T'){
      rnaSequence += 'A';
    }else if (dnaSequence[i] === 'G'){
      rnaSequence += 'C';
    }else if (dnaSequence[i] === 'C'){
      rnaSequence += 'G';
    }
  }
  console.log(rnaSequence);
};

rnaTranslator.addEventListener('click', function() {
  var sequence = dnaInput.value;
  dnaToRna(sequence);
});