var dnaSequenceAnalyser = function(sequence) {
  var numberOfA = 0;
  var numberOfT = 0;
  var numberOfG = 0;
  var numberOfC = 0;
  var numberOfUndefined = 0;

  var sequenceLength = sequence.length;
  console.log(sequenceLength);
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
  console.log('numberOfA: ', numberOfA);
  console.log('numberOfT: ', numberOfT);
  console.log('numberOfG: ', numberOfG);
  console.log('numberOfC: ', numberOfC);
  console.log('numberOfUndefined: ',numberOfUndefined);
  console.log('*'*20);
  console.log('percent numberOfA: ', (numberOfA/sequenceLength)*100);
  console.log('percent numberOfT: ', (numberOfT/sequenceLength)*100);
  console.log('percent numberOfG: ', (numberOfG/sequenceLength)*100);
  console.log('percent numberOfC: ', (numberOfC/sequenceLength)*100);
  console.log('percent numberOfUndefined: ',(numberOfUndefined/sequenceLength)*100);
};
