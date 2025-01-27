
// Function to generate the multiplication table
function generateTable() {
    // Get the number of rows and columns from user input
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    // Get the table container div
    const tableContainer = document.getElementById("table-container");

    // Clear any previous table
    tableContainer.innerHTML = "";

    // Create a new table element
    const table = document.createElement("table");

    // Create table rows and columns
    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement("tr"); // Create a table row

        for (let j = 1; j <= columns; j++) {
            const td = document.createElement("td"); // Create a table cell
            td.textContent = i * j; // Set the cell content to row * column
            tr.appendChild(td); // Append the cell to the row
        }

        table.appendChild(tr); // Append the row to the table
    }

    // Append the table to the container
    tableContainer.appendChild(table);
}

// Generate the initial default table when the page loads
document.addEventListener("DOMContentLoaded", generateTable);

