
function generateTable() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);

    const tableContainer = document.getElementById("table-container");

    tableContainer.innerHTML = "";

    const table = document.createElement("table");

    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <= columns; j++) {
            const td = document.createElement("td"); 
            td.textContent = i * j; 
            tr.appendChild(td);  
        }

        table.appendChild(tr); 
    }

    tableContainer.appendChild(table);
}

document.addEventListener("DOMContentLoaded", generateTable);

