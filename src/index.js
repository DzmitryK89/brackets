module.exports = function check(str, bracketsConfig) {
  // your solution
  const brackets = [];
  bracketsConfig.forEach(item => brackets.push(item.join('')));
  let string = str;
  let counter = str.length;
  while (counter > 0) {
    for (let key of brackets) {
      if (string.includes(key)) string = string.replace(key, '');
    }
    counter--;
  }
  return !string.length;
}
