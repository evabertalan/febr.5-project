var dnaToRna = function(dnaSequence) {
  var rnaSequence = '';
  rowAdder(dnaSequence);
  for (var i = 0; i < dnaSequence.length; i++) {
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
  rowAdder(rnaSequence);
};
