function range(start, end, step = 1) {
  let result = [];
  const isReversed = step < 0;
  const absStep = Math.abs(step);
  const _start = isReversed ? end : start;
  const _end = isReversed ? start : end;
  
  for (let i = _start; i <= _end; i += absStep) {
    result.push(i);
  }
  
  if (isReversed) return result.reverse();
  
  return result;
}

function sum(nums) {
  return nums.reduce((acc, num) => acc += num);
}
