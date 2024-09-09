// Hoc Functions => HOC are simple componets Takes another component as prop and change their behaviour return same component
// const a = (num1) => {
//   return (num2) => {
//     if (num2) {
//       return a(num1 + num2);
//     }
//     return num1;
//   };
// };
// console.log(a(10)(20)(40)());

// Define a function that takes a callback function as an argument

// function fetchData(callback) {
//   // Simulate fetching data asynchronously
//   setTimeout(() => {
//     const data = 'Some data from an API';
//     // Invoke the callback function and pass the fetched data as an argument
//     callback(data);
//   }, 2000); // Simulate a delay of 2 seconds
// }

// // Define a callback function to handle the fetched data
// function handleData(data) {
//   console.log('Data received:', data);
// }

// // Call the fetchData function and pass the handleData callback function
// fetchData(handleData);

// x and y are of same type, then use ===
// x is undefined and y is null, return true
// x is null and y is undefined, return true
// if there is any non premitive value, convert it into string
// x is number and y is string, convert y into number
// x is boolean and y is string, convert x into number

// const a = [1, 2, 5, 4, [7, 8, 9, [8, 9, 8]]];
// const aa = (data) => {
//   let newData = [];
//   if (Array.isArray(data)) {
//     data.map((item, index) => {
//       newData.push(...aa(item));
//     });
//   } else {
//     newData.push(data);
//   }
//   return newData;
// };

// const a = [1, 2, 5, 4, [7, 8, 9, [8, 9, 8]]];

// function flattenArray(arr) {
//   return arr.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
//     []
//   );
// }

// const flattenedArray = flattenArray(a);
// console.log(flattenedArray);

// const a = "this is the javascript code and have to find the max chat";

// function maxOccurringChar(str) {
//   const charFrequency = {};
//   let maxChar = "";
//   let maxCount = 0;

//   // Count the frequency of each character
//   for (let char of str) {
//     charFrequency[char] = (charFrequency[char] || 0) + 1;
//     if (charFrequency[char] > maxCount) {
//       maxCount = charFrequency[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// const maxChar = maxOccurringChar(a);

// missing number
//

// function findMissingOdd(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 1] - arr[i] !== 2) {
//       return arr[i] + 2; // Found the missing odd number
//     }
//   }
//   return null; // No missing odd number found
// }
// const aa = (arr) => {
//   let a = 0;
//   arr.map((item, i) => {
//     if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 1] - arr[i] !== 2) {
//       return (a = arr[i] + 2);
//     } else {
//       return null;
//     }
//   });
//   return a;
// };
// const missingOdd = findMissingOdd(a);
// if (missingOdd !== null) {
//   console.log("The missing odd number is:", missingOdd);
// } else {
//   console.log("No missing odd number found in the array.");
// }

// const a = [6, 1, 4, 7, 2, 4, 7];
// const uniqueSortedArray = a
//   .filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   })
//   .sort((a, b) => b - a);
// if (uniqueSortedArray.length > 1) {
//   console.log("The second highest number is " + uniqueSortedArray[1]);
// } else {
//   console.log("There is no second highest number in the array");
// }

// a = "2";

// let a = "--";

// console.log(a); // '--'

// const clothes = ['jacket', 't-shirt'];

// clothes.length = 0;

// console.log(clothes[0]); //undefined

// const fn = (a, ...nums, x, y) => {
//     console.log(x, y)
// }

// fn(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12); //error

// const name = '';

// const newName = name ?? 'Lokendra';

// console.log(newName); // ''

// const fullName = (fName,lName) =>{
//     return
//         fName + '___' + lName
// };

// fullName('ambarish','___','mamidi'); ambarish______

// var abc = '1'

// function hello(){

//     console.log(abc)

//     var abc ='2'

// }

// hello(); //undefined

// for(let i=0;i< 5; i++){

//     setTimeout(function(){

//      console.log(i)

//     },i*1000);

// }
// 0 1 2 3 4

// console.log(1 +  -"1" + "2");//02
// console.log(+"1" +  "1" + "2");//112

// const user = {
//         firstName: 'Lokendra!',
//         getName() {
//             const firstName = 'Jadon!';
//             return this.firstName;
//         }
//     };
//     console.log(user.getName()); // Lokendra!

// function a() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i);
//             // What is logged?
//         }, i * 1000);
//     }
// }

// a();
//3
// 3
// 3

// var x = 5, y = 10;
// function sum() {
//     var x = 2, y = 3
//     console.log(x + y);
// }
// console.log(x + y) // 15

//     (function (x) {
//         return (function (y) {
//             console.log(x)
//         })(2);
//     })(5) //5

// console.log(012) // 10

// function fibonacci(n) {
//     const series = [0, 1]; // Initialize the series with the first two numbers

//     // Generate the Fibonacci sequence
//     for (let i = 2; i < n; i++) {
//         const next = series[i - 1] + series[i - 2];
//         series.push(next);
//     }

//     return series;
// }

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function generateFibonacciSeries(length) {
//     const series = [];

//     for (let i = 0; i < length; i++) {
//         series.push(fibonacci(i));
//     }

//     return series;
// }
// console.log(generateFibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// let aa = [99, 92, 10, 1, 98, 93];

// let seconHighest = (arr) => {
//   let highest = arr[0];
//   let second = arr[1];
//   for (let i = 0; i < arr.length; i++) {
//     if (highest < arr[i]) {
//       // highest = arr[i]
//       // second =highest
//       secondHighest = highest;
//       highest = arr[i];
//     } else if (second < arr[i] && arr[i] < highest) {
//       second = arr[i];
//     }
//   }
//   return second;
// };

// console.log(seconHighest(aa), "Number.MIN_SAFE_INTEGER;");

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//   }
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe"
// };

// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe"
// };

// // Call the fullName function with person1 as the context
// console.log(person.fullName.call(person1, "New York", "USA"));
// // Output: John Doe, New York, USA

// const numbers = [5, 3, 8, 1, 2];
// const max = Math.max.apply(null, numbers);
// console.log(max); // Output: 8

// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // Output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX()); // Output: 42

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
// Output: 'quick'

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

  return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 3, 5]));
// Output: 4

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// function maxSubArraySum(a) {
//   var max_so_far = Number.MAX_SAFE_INTEGER;
//   var max_ending_here = 0;
//   for (var i = 0; i < size; i++) {
//     max_ending_here = max_ending_here + a[i];
//     if (max_so_far < max_ending_here) max_so_far = max_ending_here;

//     if (max_ending_here < 0) max_ending_here = 0;
//   }
//   return max_so_far;
// }
// console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

var findErrorNums = function (n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.reduce((a, b) => a + b, 1);
};
console.log(findErrorNums(80));

var findErrorNums = function (n) {
  if (n < 2) {
    return 1;
  }
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;
  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }
  return thirdStep;
};
console.log(findErrorNums(80));

var romanToInt = function (s) {
  let sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = str.length - 1;

  // Loop until the pointers meet
  while (start < end) {
    // If characters at current positions don't match, return false
    if (str[start] !== str[end]) {
      return false;
    }
    // Move pointers towards the middle
    start++;
    end--;
  }

  // If loop completes without returning false, string is a palindrome
  return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

function uniqueData(data) {
  const uniqueMap = {};

  // Iterate over the data array
  data.forEach((item) => {
    // If the 's' property is not in the uniqueMap, add it
    if (!uniqueMap[item.s]) {
      uniqueMap[item.s] = item;
    } else {
      // If the 's' property already exists in the uniqueMap, update the score
      uniqueMap[item.s].score = item.score;
    }
  });

  // Convert the uniqueMap values back to an array
  return Object.values(uniqueMap);
}

// Example usage
console.log(
  uniqueData([
    { s: 1, score: 20 },
    { s: 2, score: 30 },
    { s: 1, score: 40 },
  ])
);
// Output: [{s: 1, score: 40}, {s: 2, score: 30}]

function uniqueData(arr) {
  return arr.reduce((unique, item) => {
    unique[item.s] = item;
    return Object.values(unique);
  }, {});
}
console.log(
  uniqueData([
    { s: 1, score: 20 },
    { s: 2, score: 30 },
    { s: 1, score: 40 },
  ])
);

function uniqueData(arr) {
  // Create a Set to store unique keys
  const uniqueKeys = new Set();

  // Iterate over each object in the array
  arr.forEach((obj) => {
    // Extract keys from the current object and add them to the Set
    Object.keys(obj).forEach((key) => {
      uniqueKeys.add(key);
    });
  });

  // Convert the Set back to an array and return the sum of its values
  return [...uniqueKeys].reduce((sum, key) => sum + key, 0);
}

// Test the function
const data = [
  { apple: 2, orange: 20, banana: 10, grapes: 10 },
  { apple: 2, orange: 20, banana: 10 },
  { apple: 2, orange: 20, banana: 10, grapes: 10 },
];

console.log(uniqueData(data)); // Output: "appleorangebananagrapes"

function uniqueData(arr) {
  let a = {};
  arr.map((item, i) => {
    return Object.keys(item).forEach((val) => {
      if (a[val]) {
        a[val] += item[val];
      } else {
        a[val] = item[val];
      }
    });
  });
  return a;
}
// console.log(uniqueData([{s:1,score:20},{s:2,score:30},{s:1,score:40}]))
console.log(
  uniqueData([
    { apple: 2, orange: 20, banana: 10, grapes: 10 },
    { apple: 2, orange: 20, banana: 10 },
    { apple: 2, orange: 20, banana: 10, grapes: 10 },
  ])
);

function sum(a, b) {
  if (arguments.length === 1) {
    return function (b) {
      return a + b;
    };
  } else {
    return a + b;
  }
}
console.log(sum(2, 3)); // Output: 5
console.log(sum(2)(3)); // Output: 5

var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};
display();

function display() {
  var a = (b = 10);
}

display();

console.log("b", typeof b === "undefined");

console.log("a", typeof a === "undefined");

function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);
console.log(multiply3());

var number = 1;
const result = (function (number) {
  delete number;
  console.log("result", number);
  return number;
})(10);

var a = [
  { id: 1, name: "M1" },
  { id: 2, name: "M2" },
  { id: 3, name: "M3" },
];

// Adding a new element
var newElement = { id: 4, name: "M4" };
a.push(newElement);

// Deleting an element with id 2
var idToDelete = 2;
a = a.filter((item) => item.id !== idToDelete);

// Updating the element with id 3
var idToUpdate = 3;
var updatedElement = { id: 3, name: "Updated M3" };
a = a.map((item) => (item.id === idToUpdate ? updatedElement : item));

console.log(a);


function counter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const increment = counter();
  console.log(increment()); // 1
  console.log(increment()); // 2
  