'use stirct';

var rowAdder = function(data) {
  var newRow = document.createElement('p');
  newRow.innerText = data;
  infoContainer.appendChild(newRow);
};
