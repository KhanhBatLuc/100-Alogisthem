var toGoatLatin = function(sentence) {
    const words = sentence.split(" ");
 const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
 let result = "";

 for (let i = 0; i < words.length; i++) {
   const word = words[i];
   const firstLetter = word[0];
   let goatWord = "";

   if (vowels.has(firstLetter)) {
     goatWord = word + "ma";
   } else {
     goatWord = word.slice(1) + firstLetter + "ma";
   }

   goatWord += "a".repeat(i + 1);
   result += goatWord + " ";
 }

 return result.trim();
};