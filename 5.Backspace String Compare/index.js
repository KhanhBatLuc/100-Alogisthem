var backspaceCompare = function(s, t) {
    let stackS = [];
  let stackT = [];

  // iterate through string s, pushing characters onto stackS or popping from stackS
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      stackS.pop();
    } else {
      stackS.push(s[i]);
    }
  }

  // iterate through string t, pushing characters onto stackT or popping from stackT
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '#') {
      stackT.pop();
    } else {
      stackT.push(t[i]);
    }
  }

  // convert stacks to strings and compare
  let strS = stackS.join('');
  let strT = stackT.join('');
  return strS === strT; 
};