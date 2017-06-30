const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  const askIfGreaterThan = function _askIfGreaterThan (el1, el2, callback) {
    reader.question(`is ${el1} greater than ${el2}? (yes or no)>`, (answer) => {
      if (answer === 'yes') {
        callback(true);
      }
      else {
        callback(false);
      }
    });
  };

// askIfGreaterThan (12, 20, (args) => console.log(args));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
const innerBubbleSortLoop = function _innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    i++;
    let switchThis = askIfGreaterThan(arr[i], arr[i + 1], (x) => {return x;});
      if (switchThis) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      }
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
};

// const dummyFunction = function _dummyFunction (i) {
//   console.log("In outer bubble sort");
//   console.log(`${i} this is line 46 -- why does it print i as true?` );
// };

// innerBubbleSortLoop([1,2,3], 2, true, dummyFunction);

const absurdBubbleSort = function _absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    let i = 0;
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback();
    }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
