// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    let height, weight;

    height = $("#inputHeight").val();
    weight = $("#inputWeight").val();

    let grid = "";
    // Create a row by looping through the value of #inputHeight
    for (let i = 1; i <= height; i++) {
        grid += "<tr>"; // Open table row
        for (let j = 1; j <= weight; j++) {
            grid += "<td></td>" // Append cell to row
        }
        grid += "</tr>"; // Close table row
    };

    //Empties the old grid then replaces it with the new grid on submit
    $("#pixelCanvas").empty().append(grid);

    //Return false to prevent default action taken when the form is submitted
    return false;
}

$("#sizePicker").submit(makeGrid);