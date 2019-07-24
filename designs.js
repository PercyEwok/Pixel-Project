// Select color input
var color = document.getElementById("colorPicker");
var canvas = document.getElementById("pixelCanvas");
// Select size input
var sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});
// When size is submitted by the user, call makeGrid()
function makeGrid() {

var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;
canvas.innerHTML = null;

for (var m = 0; m < height; m++) {
    var row = canvas.insertRow(m);
    for (var n = 0; n < width; n++) {
        var cell = row.insertCell(n);
        cell.addEventListener('click', function(event) {
                        event.target.style.backgroundColor = color.value;
        });
      }
    }
}
