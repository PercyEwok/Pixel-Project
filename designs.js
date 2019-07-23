// Select color input and store
var color = document.getElementById("colorPicker");
// Select size input and store
var sizePicker = document.getElementById("sizePicker");
// Define variables and store values for DOM elements
var canvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;
canvas.innerHTML = null;

//loop over each row
for (var m = 0; m < height; m++) {
    var row = canvas.insertRow(m);
    for (var n = 0; n < width; n++) {
        var cell = row.insertCell(n);
        cell.addEventListener('click', function(event) {
            // color when a cell is clicked
            event.target.style.backgroundColor = color.value;
        });
      }
    }
}
