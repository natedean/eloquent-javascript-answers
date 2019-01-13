let size;

function makeChessboard(size = 8) {
  let str = '';
  let isLeadingSpace = true;
  
  for (let i = 0; i < size; i += 1) {
    let isSpace = isLeadingSpace;
    
    for (let j = 0; j < size; j += 1) {
      str += isSpace ? ' ' : '#';
      isSpace = !isSpace;
    }
    
    if (i < size - 1) {
      str += '\n';
      isLeadingSpace = !isLeadingSpace;
    }
  }
  
  return str;
}

console.log(makeChessboard());
