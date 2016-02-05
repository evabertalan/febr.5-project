var aminoAcidConverter = function(sequence) {
  var blockOfThree = '';
  var aminoAcidSequence = '';
  var molecularWeight = 0;
  for (var i = 0; i < sequence.length; i = i+3) {
    blockOfThree += sequence[i];
    blockOfThree += sequence[i+1];
    blockOfThree += sequence[i+2];
    for (var j = 0; j < aminoacid_list.length; j++) {
      for (var k =0; k < aminoacid_list[j].codon.length; k++) {
        if (blockOfThree === aminoacid_list[j].codon[k]) {
          aminoAcidSequence += aminoacid_list[j].acid_id;
          molecularWeight += aminoacid_list[j].mw;
        }
      }
    }
    blockOfThree = '';
  }
  console.log(aminoAcidSequence);
  console.log(molecularWeight/1000, 'kDa');
};

