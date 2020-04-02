// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capitalized = '';
  let n = str.length;
  
  capitalized = str[0].toUpperCase();

  for(let i = 1; i < n; i++) {
    capitalized = (str[i-1]===' ') 
        ? `${capitalized}${str[i].toUpperCase()}`
        : `${capitalized}${str[i]}`;
  }

  return capitalized;
}

function capitalize2(str) {
  let split = str.split(' ');

  for(let i = 0; i < split.length; i++) {
    var word = split[i];
    split[i] = word[0].toUpperCase() + word.substr(1);
  }

  return split.join(' ');
}

module.exports = capitalize;
