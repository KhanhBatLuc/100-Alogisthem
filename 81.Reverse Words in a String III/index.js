function reverseWords(s) {
    // Split the string into an array of words
    const words = s.split(" ");
    
    // Iterate through each word and reverse its characters
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split("").reverse().join("");
    }
    
    // Join the array of reversed words back into a string
    return words.join(" ");
  }
  