
var numRow=9;
var numCol=9;
var grid_div=$('div#grid');
var curColor="red";
//can add as many colours as desired
var rainbow=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

$(document).ready(function(){
	makeTable();
	 // mouseenter event
  colourChange();
});

function makeTable() {
	if (numRow === 0 && numCol === 0) {
		alert("Please enter a number greater than zero!")
	}
	else {
		curColor="red"
		table = document.createElement('table');
		for (var i=0; i<numRow; i++){
			row = document.createElement('tr');
				for (var j=0; j<numRow; j++) {
					col = document.createElement('td');
					col.className = "grid";
					row.appendChild(col);
				}
				table.appendChild(row);
		}
		grid_div.html(table)
	}
	colourChange();
};


//gets the grid size

//selects and makes sure a valid colour is entered


//applyHover() applies a class to the element
//that has a mouse pointer on it.
function reset() {
	$('div#grid').empty();

	var userInput = prompt("Enter grid size");
	if (isNaN(userInput)) {
    alert("Error: You didn't enter a number!");
  }
  else if (userInput < 2 || userInput > 64)
  {
    alert("Error: your number isn't in the accepted range");
  }
  else {
  	numRow = userInput;
  	numCol = userInput;
  	makeTable();
  	colourChange();
  }
};


function colourChange()
{
  $(".grid").mouseenter(function() {
    $(this).css("background-color", "#000");
  });
}
