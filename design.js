/*
 * JavaScript Project: Pixel ART MAKER
 *
 * @Version: 1.0
 *
 * Create by Viraj Deshaval @ 27/03/2021
 */

/*
 * Features:
 *     - The user can create a canvas of any (reasonable) size.
 *     - The user can color the pixels in the grid.
 *     - The user can reset the grid to a blank state.
 *     - BE CAREFUL ABOUT THE SELECTING OF EVENT TARGET AND ELEMENTS
 *
 */

// When size is submitted by the user, call makeGrid()
function makeGrid(row, column) {
    let myTable = document.getElementById('pixelCanvas'); // get the table element
    myTable.innerHTML = ""; // reset the table element

    // for each row create <tr> tag
    for (var i = 0; i < row; i++) {
      var createRow = document.createElement("TR"); // Create rows using the <tr> tag

      for (var j = 0; j < column; j++) {
        var createColumn = document.createElement("TD"); // create columns using the <td> tag
        createRow.appendChild(createColumn); // add columns to each row
      }
      // add all the rows to the table
      myTable.appendChild(createRow);
    }
      // create a single click event on table which handles on any cell clicked
      // Code improved performance wise
      myTable.addEventListener('click', function (event){
      // sets the value of color every time you click
      let color = document.getElementById('colorPicker').value;
      if (event.target && event.target.nodeName === 'TD') {
          // set the color on target element when click event happens
          event.target.style.backgroundColor = color;
      }
    })
}

document.getElementById("sizePicker").addEventListener("submit", function(event){
  // prevents the default action to occur when form submitted
  event.preventDefault();
  // gets the values of height and weight
  const row = Number(document.getElementById('inputHeight').value);
  const column = Number(document.getElementById('inputWidth').value);
  makeGrid(row, column);
});

// adding default Grid to document
makeGrid(10, 10)
