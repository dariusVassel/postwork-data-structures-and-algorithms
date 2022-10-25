function reverseString(str) {
  // type your code here

  var reversed = ""

  for(var i=0; i < str.length; i++){
    //console.log(str[i])
    reversed = str[i] + reversed 
  }

  console.log("reversed", reversed)
  return reversed
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
