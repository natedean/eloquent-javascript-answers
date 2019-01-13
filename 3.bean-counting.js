function countChar(str, char) {
  return str.split('').reduce((acc, _char) => {
    if (_char === char) acc += 1;
    return acc;
  }, 0);
}

function countBs(str) {
  return countChar(str, 'B'); 
}
