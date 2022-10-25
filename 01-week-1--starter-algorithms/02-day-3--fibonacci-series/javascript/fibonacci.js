function fibonacci(num) {
  // type your code here
  let fibonacciSeries = []

  for (let i=0; i <= num; i++){
    if(i == 0){
      fibonacciSeries.push(i)
    }
    else if(i == 1){
      fibonacciSeries.push(i)
    }
    else{
      fibonacciSeries.push(fibonacciSeries[i-1] + fibonacciSeries[i-2])
    }  
  }
  console.log(fibonacciSeries)
  return(fibonacciSeries[num])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 55");
  console.log("=>", fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
