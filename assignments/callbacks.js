// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.



function getLength(arr, banananana) {
  console.log(`The length of the array ${arr} is...`);
  return  banananana(arr);
}

function length(a) {
  return console.log(a.length);
}

getLength (items, length);





function last(arr, callback) {
  // last passes the last item of the array into the callback.
  console.log("The last item of the array is...")
  return callback(arr);
}

function lastItem (a) {
  return console.log(a[a.length-1]);
}

last(items, lastItem);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let add = x + y
  console.log(`${x} added to ${y} is equal to...`)
  return cb(add);
}

function addition(a) {
  return console.log(a);
}

sumNums(2, 3, addition)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y
  console.log(`${x} multiplied by ${y} is equal to...`)
  return cb(product);
}

function multi(a) {
  return console.log(a);
}

multiplyNums(8, 3, multi)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
  return cb(item);
}
}

function present(a) {
  return console.log(`${a} is present in the list!`)
}

contains("Gum", items, present);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}