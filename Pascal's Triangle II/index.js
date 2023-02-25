function getRow(rowIndex) {
    let row = [1]; // Initialize the first row with 1
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            // Calculate the values in the current row
            row[j] = row[j] + row[j - 1];
        }
        // Add the last element to the row
        row.push(1);
    }
    return row;
}
