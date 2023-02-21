/**
 * @param {string[]} words
 * @return {number}
 */
const letterToMorse = {
    'a': '.-',   'b': '-...', 'c': '-.-.', 'd': '-..',  'e': '.',    'f': '..-.',
    'g': '--.',  'h': '....', 'i': '..',   'j': '.---', 'k': '-.-',  'l': '.-..',
    'm': '--',   'n': '-.',   'o': '---',  'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...',  't': '-',    'u': '..-',  'v': '...-', 'w': '.--',  'x': '-..-',
    'y': '-.--', 'z': '--..'
  };
  
  var uniqueMorseRepresentations = function(words) {
      const transformations = new Set();
    for (let word of words) {
      let transformation = '';
      for (let letter of word) {
        transformation += letterToMorse[letter];
      }
      transformations.add(transformation);
    }
    return transformations.size;
  };