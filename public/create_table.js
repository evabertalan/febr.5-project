'use strict';

var table = document.querySelector('.info-table');

var createTable = function(arrayOfColumnName) {
	var mainRow = table.insertRow(0);
	mainRow.setAttribute('class', 'main-row');
	for (var i = 0; i < arrayOfColumnName.length; i++ ) {
		var cell = mainRow.insertCell(i);
		cell.innerHTML = arrayOfColumnName[i];
	}
};

var createCells = function(arrayOfCells) {
	var newRow = table.insertRow(1);
	for (var i = 0; i < arrayOfCells.length; i++) {
		var cell = newRow.insertCell(i);
		cell.innerHTML = arrayOfCells[i];
	}
};