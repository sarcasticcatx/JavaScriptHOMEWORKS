function makeATable() {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");

    for (let x = 0; x < 4; x++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`row ${i}, column ${x}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  document.body.appendChild(table);
  table.style.border = "5px solid hotpink";
  table.style.background = "lightblue";
}
