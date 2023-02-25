var findRelativeRanks = function (score) {
    const scoreSort = score.slice().sort((a, b) => b - a);
    console.log(scoreSort);
    console.log(score);
    let output = [];
    for (let i = 0; i < score.length; i++) {
      const index = scoreSort.indexOf(score[i]);
      if (index === 0) {
        output.push("Gold Medal");
      } else if (index === 1) {
        output.push("Silver Medal");
      } else if (index === 2) {
        output.push("Bronze Medal");
      } else {
        output.push((index + 1).toString());
      }
    }
  
    return output;
  };
  console.log(findRelativeRanks([10, 3, 8, 9, 4]));
  