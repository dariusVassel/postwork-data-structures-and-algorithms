function selectionSort(arr) {
  // type your code here
  let orderedArray = []
  let inserted 

  for (let i = 0; i < arr.length; i++){
    inserted = false
    if (i == 0){
      orderedArray.push(arr[i])
    }
    else {
      for (let j = 0; j < orderedArray.length; j++){
        if (arr[i] < orderedArray[j]){
      
          inserted = true;
          
          orderedArray.splice(j, 0, arr[i])
          break
        } 
      }
      if (!inserted){
        orderedArray.push(arr[i])
      }
    }

  }
  return orderedArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
