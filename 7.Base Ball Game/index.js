var calPoints = function (operations) {
    let array = [];
  
    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "+") {
        const newValue = array[array.length - 1] + array[array.length - 2];
        array.push(newValue);
      } else if (operations[i] === "D") {
        const lastElement = array[array.length - 1];
        const newValue = lastElement * 2;
        array.push(newValue);
      } else if (operations[i] === "C") {
        array.splice(array.length - 1);
      } else {
        array.push(Number(operations[i]));
      }
    }
   const sum = array.reduce((partialSum, a) => partialSum + a, 0);
   return sum
  };
  