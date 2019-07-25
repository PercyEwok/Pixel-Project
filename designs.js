//This code builds a single-page web app that allows users to draw pixel art on a customizable canvas!

//Assign variables to reference table HTML element
//variable that will allow user to select color
var color = document.getElementById("colorPicker");
//variable that will incorportae a pixelCanvas
var canvas = document.getElementById("pixelCanvas");
// variable that will allow user to select size of canvas
var sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    //Add Event that when useru click on Submit button, it goes to default and clears previous grid, retrieves input numerical values and proceeds to make grid function
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    canvas.innerHTML = null;
    //Create nested loop to create rows then columns to create grid
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
