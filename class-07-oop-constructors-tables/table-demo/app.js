'use strict';

// get each table row
var allRows = document.getElementsByTagName('tr');

// want first and third elements of each table row
for (var i = 0; i < allRows.length; i++){
  var thisRow = allRows[i];
  for (var j = 0; j < thisRow.children.length; j++){
    if (j % 2 === 1) {
      thisRow.children[j].className = 'green';
    }
  }
}

/* Building a table from scratch */
// Step 1: Create the <table> element
// Step 2: Give the table a id or class (or both)
// Step 3: Append the table to the DOM
// Step 4: Create a <thead> for my column names
// Step 5: Append <thead> to the table
// Step 6: Create and append a <th> for every hour
// Step 7: Create a <tr> element
// Step 8: Create one td for every hour + one blank td to start + one blank td to end
// Step 9: Append the <tr> to the table
// Step 10: Append the <td>s to the <tr>
// Repeat steps 7 through 10 for as many stores as you have
// Finally: Create your totals row at the bottom
