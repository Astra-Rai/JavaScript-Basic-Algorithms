// Reserse a string
// Brainstorming, Part 1

// Step 1: Store a string in a variable "name", use var
var name = 'astra';
console.log(name);// output: "astra" 

// Step 2: Convert String to an array using split() method 
var stringToArray = name.split("");//use split method to covert string to an array
console.log(stringToArray);// output: [object Array] (5), ["a","s","t","r","a"]

// Step 3: Reverse element in array
var reverseArray = stringToArray.reverse();//use reverse() method to reverse array, stringToArray, output: "a, r, t, s, a"
console.log(reverseArray);// output: // [object Array] (5) ["a","r","t","s","a"]

// Step 4: Convert array, "reverseArray" to a string by using the join method
// Join characters in string by NO space

var convertArrayToString = reverseArray.join(); //output: "a,r,t,s,a"
console.log(convertArrayToString);// 


// Step 6: Remove commans between each character in string
var convertArrayToString = reverseArray.join(""); 
console.log(convertArrayToString);//output: "artsa"

