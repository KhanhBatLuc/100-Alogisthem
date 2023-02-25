function findRestaurant(list1, list2) {
    const common = [];
    const map = new Map();
    let minIndexSum = Infinity;
    for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], i);
    }
    for (let j = 0; j < list2.length; j++) {
      const index1 = map.get(list2[j]);
      if (index1 !== undefined) {
        const indexSum = index1 + j;
        if (indexSum < minIndexSum) {
          common.length = 0;
          common.push(list2[j]);
          minIndexSum = indexSum;
        } else if (indexSum === minIndexSum) {
          common.push(list2[j]);
        }
      }
    }
    return common;
  }