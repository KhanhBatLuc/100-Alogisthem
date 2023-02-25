var uncommonFromSentences = function (s1, s2) {
    let uncommonWords = [];
      for(let i = 0; i<  s1.split(" ").length; i++) {
          if(uncommonWords.includes(s1.split(" ")[i])) {
              const index = uncommonWords.indexOf(s1.split(" ")[i]);
              uncommonWords.splice(index, 1)
          }
          else {
              uncommonWords.push(s1.split(" ")[i])
          }
      }
    for (let i = 0; i < s2.split(" ").length; i++) {
      if (uncommonWords.includes(s2.split(" ")[i])) {
        const index = uncommonWords.indexOf(s2.split(" ")[i]);
        uncommonWords.splice(index, 1)
      } else {
          uncommonWords.push(s2.split(" ")[i])
      }
    }
    return uncommonWords;
  };
  console.log(uncommonFromSentences("apple apple", "banana"));