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
            grid += "<td></td>"; // Append cell to row
        }
        grid += "</tr>"; // Close table row
    };

    //Empties the old grid then replaces it with the new grid on submit
    $("#pixelCanvas").empty().append(grid);

    //Assign a default color of the grid white
    const defaultColor = "rgb(255, 255, 255)";
    $("td").css("background-color", defaultColor);

    // When clicked toggle between default color and selected color
    $("td").click(function () {
        let color = $("#colorPicker").val(); // Create variable color to hold the current value of the color picker

        // Check if the color of the clicked cell is the default color and assign
        if ($(this).css("background-color") !== defaultColor) {
            $(this).css("background-color", defaultColor);
        } else {
            $(this).css('background-color', color);
        }
    });

    //Return false to prevent default action taken when the form is submitted
    return false;
}

$("#sizePicker").submit(makeGrid);