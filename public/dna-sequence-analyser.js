var dnaSequenceAnalyser = function(sequence) {
  var numberOfA = 0;
  var numberOfT = 0;
  var numberOfG = 0;
  var numberOfC = 0;
  var numberOfUndefined = 0;

  var sequenceLength = sequence.length;
  rowAdder(sequenceLength)
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] === 'A') {
      numberOfA += 1;
    } else if (sequence[i] === 'T') {
      numberOfT += 1; 
    } else if (sequence[i] === 'G') {
      numberOfG += 1;
    } else if (sequence[i] === 'C') {
      numberOfC += 1;
    } else {
      numberOfUndefined += 1;
    }
  }
  createTable(['A', 'T', 'G', 'C']);
  createCells([numberOfA, numberOfT, numberOfG, numberOfC]);
  createCells([(numberOfA/sequenceLength)*100, (numberOfT/sequenceLength)*100, (numberOfG/sequenceLength)*100, (numberOfC/sequenceLength)*100]);
};