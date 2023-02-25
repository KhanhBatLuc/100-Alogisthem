function arrangeCoins(n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let coins = mid * (mid + 1) / 2;
      if (coins === n) {
        return mid;
      } else if (coins < n) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  }
  