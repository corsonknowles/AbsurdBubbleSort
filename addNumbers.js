const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




// reader.on('line', (line) => {
//   console.log(`Received: ${line}`);
// });


// const completionCallback = function _completionCallback(sum) {
//   console.log(sum);
//   console.log("Thanks for playing.");
// };

const addNumbers = function _addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question('What is the next number?', (answer) => {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, --numsLeft, completionCallback);
    });
  }
  else {
    completionCallback(sum);
    reader.close();
  }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

//above line commented out

// If numsLeft > 0, then:
// Prompt the user for a number (use reader).
// Pass a callback that:
// Uses parseInt to parse the input.
// Increment the sum and console.log it.
// Recursively calls addNumbers again, passing in:
// the increased sum,
// the decreased numsLeft,
// and the same completionCallback.
// If numsLeft === 0, call completionCallback(sum) so that the total sum can be used.
