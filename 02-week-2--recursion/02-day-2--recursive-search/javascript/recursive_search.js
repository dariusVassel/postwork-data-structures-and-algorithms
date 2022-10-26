function recursiveSearch(arr, target) {
  // type your code here
  console.log(arr, "here")
  if (arr.length === 0) {
    console.log(arr, "1")
    return false;
  }

  if (arr[0] === target) {
    console.log(arr, "2")
    return true;
  }

  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
