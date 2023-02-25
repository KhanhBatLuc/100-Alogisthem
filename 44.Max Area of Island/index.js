var maxAreaOfIsland = function(grid) {
    const numRows = grid.length;
const numCols = grid[0].length;
let maxArea = 0;

function dfs(row, col) {
   if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === 0) {
       return;
   }

   grid[row][col] = 0; // mark as visited
   maxArea++;

   dfs(row + 1, col);
   dfs(row - 1, col);
   dfs(row, col + 1);
   dfs(row, col - 1);
}

for (let row = 0; row < numRows; row++) {
   for (let col = 0; col < numCols; col++) {
       if (grid[row][col] === 1) {
           let area = 0;
           dfs(row, col);
           maxArea = Math.max(maxArea, area);
       }
   }
}

return maxArea;
};