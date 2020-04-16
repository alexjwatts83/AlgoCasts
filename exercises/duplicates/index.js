function areThereDuplicates(...args) {
  let obj = {};
  for (let arg of args) {
      if (obj[arg] !== undefined){
          return true;
      }
      obj[arg] = 1;
  }
  return false;
}

module.exports = areThereDuplicates;