var checkRecord = function (s) {
    let absent = 0;
    let late = false;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "A") {
        absent++;
      } else if (s[i] === "L") {
        if (s[i + 1] === "L" && s[i + 2] === "L") {
          late = true;
        }
      }
    }
  
    if (absent > 2 || late) {
      return false;
    } else {
      return true;
    }
  };
  console.log(checkRecord("PPALLL"));