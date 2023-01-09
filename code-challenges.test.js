// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: 

//Pseudo Code: 
//Input: an array of strings
//Output: The input array without the first item from the array and shaffles the remaining content
//Function: A fxn called shuffledArray which uses the .shift method to first remove the first variable in the array. Next using the .sort method and a random number generator using Math.random, the remaining variables of the array will be randomly put into an order and return an array. 

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// describe("shuffledArray", () => {
//   const expected = ["yellow", "blue", "pink", "green"];
//   it("returns an array where the first variable is removed and the remaining variables' order is shuffled", () => {
//     expect(["yellow", "blue", "pink", "green"]).toEqual(expect.arrayContaining(expected));
//   });
//     it('does not match if received does not contain expected elements', () => {
//       expect(["yellow", "blue", "pink"]).not.toEqual(expect.arrayContaining(expected));
//   })
// })

// b) Create the function that makes the test pass.
// const shuffledArray = (array) => {
//      array.shift()
//     return array.sort(() => Math.random() - 0.5)
//   }
//   shuffledArray(colors1)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
//Pseudo Code:
//Input: Object with labelled keys as upvotes and downvotes and values
//Outputs: Number which is the end tally of up votes and down votes
//Functions: A fxn called endTally which uses logic to subtract the down votes from the upvotes 

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// describe("endTally", () => {
//   it("returns the up votes and down votes end tally", () => {
//     expect(greeter()).toEqual(11)
//   })
// })
// b) Create the function that makes the test pass.
const endTally = (object) => {
  return object.upVotes - object.downVotes
}
endTally(votes1)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//Pseudo Code: 
//Input: 2 array with strings
//Output: a combination of the arrays without duplicate values 
//Function: A variable called bothArr which will combine the arrays. Then a fxn called combinationArr will use the filter iteration to remove items in the array that equal the same as another item in the array
// describe("combinationArr", () => {
//   it("returns a combination of the array without duplicate values", () => {
//     expect(greeter()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })

// b) Create the function that makes the test pass.
const bothArr = dataArray1 + dataArray2

const combinationArr = (array) => {
  return array.filter((value, index) => {
    if (value === value) return value
  })
}
combinationArr(bothArr)