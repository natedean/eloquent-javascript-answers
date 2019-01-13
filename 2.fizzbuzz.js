for (let i = 1; i <= 100; i += 1) {
  const isDivBy3 = i % 3 === 0;
  const isDivBy5 = i % 5 === 0;
  
  if (isDivBy3 && isDivBy5) {
    console.log('FizzBuzz');
    continue;
  }
  
  if (isDivBy3) {
    console.log('Fizz');
    continue;
  }
  
  if (i % 5 === 0) {
    console.log('Buzz');
    continue;
  }
  
  console.log(i);
  
}
