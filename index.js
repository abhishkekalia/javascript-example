// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersArray = [-3, 0, -4, 4, 5, 6, 7, 1, 7, 1, 2, 3, 8, 9, 10];
const stringArray = ["abhishek", "Rajesh", "bablu"];
const ObectArray = [
  { value: -3 },
  { value: 0 },
  { value: -4 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 6 },
  { value: 7 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
];

// numbersArray.unshift(2E2)

/*** sorting array */

// numbersArray.sort((a, b) => a - b);
// numbersArray.sort((a, b) => Math.abs(a) - Math.abs(b));
// console.log("hello abhishek", numbersArray);
// stringArray.sort((a, b) => b.localeCompare(a));
// console.log("hello abhishek", stringArray);
// ObectArray.sort((a, b) => b.value - a.value);

/*** sorting array */
/*** bubble sort */
// const n = numbersArray.length;
// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//           return arr
//         }
//       }
//     }
//   }

// bubbleSort(numbersArray);
// console.log("hello abhishek", bubbleSort(numbersArray));
// console.log("hello abhishek", numbersArray);

/*** remove duplicate value */
// function removeDuplicates(arr) {
//     return [...new Set(arr)]
//   }

// Example usage:
//   const numbers = [1, 2, 3, 2, 4, 1, 5];

// console.log(ObectArray);

// function removeDuplicateObjects(arr, key) {
//   return arr.reduce((acc, obj) => {
//     if (!key) {
//       if (!acc.some((accObj) => accObj === obj) && obj > 0) {
//         acc.push(obj);
//       }
//       if (!acc.includes(obj)) {
//         acc.push(obj);
//       }
//     } else {
//       if (!acc.some((accObj) => accObj[key] === obj[key])) {
//         acc.push(obj);
//       }
//     }
//     return acc;
//   }, []);
// }

// // console.log(removeDuplicateObjects(numbersArray));
// console.log("Math.max", Math.max(...numbersArray));
// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }

//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }

//   console.log("apply", person.fullName.apply(person1, ["Oslo", "Norway"]))

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// // let fullName = person.fullName.bind(member)();
// let fullName = person.fullName.bind(member)();
// console.log("apply", fullName);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   // return Math.floor(Math.random() * (max - min + 1)) + min;
//   return  Math.floor(Math.random() * (max - min + 1))
// }
// console.log("Math.min", getRandomInt(1000, 2000));
// new Promise((resolve, reject)=>{
//   console.log(2)
//   setTimeout (()=>resolve(3),0)
//   reject(4)
// }).then(res=>{
//   console.log(res)
// }).catch(error=>{
//   console.log(error)
// })
// console.log(1)

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject(new Error(`Failed to fetch data from ${url}`));
//       }
//     };
//     xhr.onerror = () => {
//       reject(new Error(`Network error while fetching data from ${url}`));
//     };
//     xhr.send();
//   });
// }

// const url1 = "https://catfact.ninja/fact";
// const url2 = "https://catfact.ninja/fact";
// const url3 = "https://catfact.ninja/fact";

// Promise.race([fetchData(url1), fetchData(url2), fetchData(url3)])
//   .then((data) => {
//     console.log("First data received:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// console.log("Math.abs", Math.round(-5.6).toFixed(2))
// console.log("Math.abs", Math.fround("2.005"))

// Matchologists

/*** reverse string programme */

// const string= "Hello World";

// function reverseString(str){
//   return str.split("").reverse().join("")

// }
// console.log(reverseString(string))

/** check wheather string is pelindrom */

function checkPelindrome(str) {
  return str == str.split("").reverse().join("");
  // return str.split("").reverse().join("")
}
// console.log(checkPelindrome("pop"))

/*** find the max number in array */
// console.log(Math.max(...numbersArray))
/** write a javascript function that can take array of input and return even number array */

function getEvenNumber(arr) {
  // const data = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2!==0) {
  //     data.push(arr[i]);
  //   }
  // }
  // return data;
  return arr.reduce(
    (acc, value) => {
      if (value % 2 == 0) {
        acc.push({ value: value });
      }
      return acc;
    },
    [22, 21, 22]
  );
}
// console.log("getEvenNumber", getEvenNumber(numbersArray));
/** find the factorial number */
function findFactorial(number) {
  if (number === 0 || number == 1) {
    return 1;
  } else {
    console.log("findFactorial", number * findFactorial(number - 1));

    return number * findFactorial(number - 1);
  }
}
// console.log("findFactorial", );
// findFactorial(10)
const myObject = {
  simpleFunction: function () {
    console.log("simpleFunction", this);
  },
  arrowFunction: () => {
    console.log(
      "arrowFunction",
      this.localStorage.setItem("ketone", "abhishek")
    );
  },
};
// myObject.simpleFunction()
// myObject.arrowFunction()

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (let property in person) {
  console.log(property, person[property]);
}
const numbers = [1, 2, 3, 4, "5", 0.5];
for (let number of numbers) {
  console.log(number);
}

var callFunction = 10;
console.log("hello callFunction", callFunction);
callFunction = 20;
console.log("hello callFunction", callFunction);

// function callFunction(){
// }

// const a = [1, 2, 5, 4, [7, 8, 9, [8, 9, 8]]];
// const getsimpleArray = (data)=>{
//   Array.from(data=>{
//     console.log("getsimpleArray", data)
//   })
//   return data
// }
// console.log("aa", getsimpleArray(a))

// const a = [1, 2, 5, 4, [7, 8, 9, [8, 9, 8]]];

// const getSimpleArray = (data) => {
//   if (Array.isArray(data)) {
//   return data.reduce((acc, value)=>{
//     if(Array.isArray (value)){
//       return acc.concat(getSimpleArray(value))

//     }
//     return acc.concat(value)
//   },[])
//   }
//   return data;
// };

// console.log("aa", getSimpleArray(a));

/**** maxOccurringChar */

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

/*********** findMissingOdd *******/

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
// const a = [6, 1, 4, 7, 2, 4, 7];

// const missingOdd = findMissingOdd(a);

// if (missingOdd !== null) {
//   console.log("The missing odd number is:", missingOdd);
// } else {
//   console.log("No missing odd number found in the array.");
// }

/******** uniqueSortedArray */
const a = [6, 1, 4, 7, 2, 4, 7];
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

const uniqueSortedArray = () => {
  return [...new Set(a)].sort((a, b) => b - a);
};
console.log("The second highest number is " + uniqueSortedArray());

/****** nullish colashing operator */
var name;

const newName = name ?? "Lokendra";

// console.log("newName",newName);

/*** */

const fullName = (fName, lName) => {
  return;
  fName + "___" + lName;
};

fullName("ambarish", "___", "mamidi");
/** */

var abc = "1";
function hello() {
  console.log(abc);

  var abc = "2";
  console.log(abc);
}

hello();

/**** */

// for(let i=0;i< 5; i++){

//     setTimeout(function(){

//      console.log(i)

//     },i*1000);

// }

console.log(1 + -"1" + "2"); //02
console.log("1" + "1" + "2"); //112
/**** */
// const user = {
//   name: "abhishek",
//   getName: function () {
//     return this.name;
//   },
//   getArrow:()=>{
//     this.name="kalia";
//     return this.name
//   }
// };
// console.log("user.getName", user.getArrow());

/**  */
// function selfcalling() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i);
//             // What is logged?
//         }, i * 1000);
//     }
// }
// function selfcalling() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout((function(j) {
//             return function log() {
//                 console.log(j);
//             };
//         })(i), i * 1000);
//     }
// }
// selfcalling()

/*** */
var x = 5,
  y = 10;
function sum() {
  var x = 2,
    y = 3;
  console.log(x + y);
}
sum();

/*** fibonacci */
function fibonacci(n) {
  const series = [0, 1]; // Initialize the series with the first two numbers

  // Generate the Fibonacci sequence
  // for (let i = 2; i < n; i++) {
  //   const next = series[i - 1] + series[i - 2];
  //   series.push(next);
  // }

  // return series;
  for (let i = 2; i < n; i++) {
    const next = series[i - 1] + series[i - 2];
    series.push(next);
  }
  return series;
}

// console.log("fibonacci", fibonacci(4));

// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const sum = (n * (n + 1)) / 2;
//   const arrSum = arr.reduce((acc, curr) => acc + curr, 0);

//   return sum - arrSum;
// }

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n*(n+1))/2;
  const arrsum = arr.reduce()
}
console.log("findMissingnumber", findMissingnumber([1, 2, 3, 4, 6]));

let number = 10;
function renderNumber() {
  console.log("number", number);
  //  let number = 20
  // console.table(["number", number])
  console.timeStamp("Starting operation");
}
renderNumber();
