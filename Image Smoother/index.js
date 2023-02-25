function imageSmoother(image) {
    const m = image.length;
    const n = image[0].length;
    const result = new Array(m);
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n);
      for (let j = 0; j < n; j++) {
        let sum = 0;
        let count = 0;
        for (let r = i - 1; r <= i + 1; r++) {
          for (let c = j - 1; c <= j + 1; c++) {
            if (r >= 0 && r < m && c >= 0 && c < n) {
              sum += image[r][c];
              count++;
            }
          }
        }
        result[i][j] = Math.floor(sum / count);
      }
    }
    return result;
  }
  