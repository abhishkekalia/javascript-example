/** Remove duplicate value in array */
const numbers = [0, 1, 2, 3, 4, 0, 1, 2, 1];
(function (numberArr) {
  const uniqueArr = [...new Set(numberArr)];
  //   console.log("removeDuplicateValue", uniqueArr);
})(numbers);

/*** by reduce method *****/
function removeDuplicateValue(numbersArr) {
  return numbersArr.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
}

// console.log("removeDuplicateValue", removeDuplicateValue(numbers));

/**** sorting array */
function sortArrayElements(numbersArr) {
  //   return numbersArr.sort((a, b) => a - b); //ascending order
  return numbersArr.sort((a, b) => b - a); //ascending order
}
// console.log("sortArrayElements", sortArrayElements(numbers));

const personName = ["zesan", "babul", "lokendra", "goswami"];
function sortByAlphabet(personNameArray) {
  return personNameArray.sort((a, b) => b.localeCompare(a));
}
// console.log("sortByAlphabet", sortByAlphabet(personName));
const personNameObject = [
  { name: "zesan" },
  { name: "babul" },
  { name: "lokendra" },
  { name: "goswami" },
];
function sortobject(obj) {
  return obj.sort((a, b) => {
    return b.name.localeCompare(a.name);
  });
}
// console.log("sortByAlphabet", sortobject(personNameObject));

/** Get second highest number from array */
function getSecondHighestNumber(numArray) {
  let firstHighestNumber = numArray[0];
  let secoundHighestNumber = numArray[1];

  for (let i = 0; i < numArray.length; i++) {
    if (firstHighestNumber < numArray[i]) {
      secondHighest = firstHighestNumber;
      firstHighestNumber = numArray[i];
    } else if (
      secoundHighestNumber < numArray[i] &&
      numArray[i] < firstHighestNumber
    ) {
      secoundHighestNumber = numArray[i];
    }
  }
  //   console.log("firstHighestNumber", firstHighestNumber);
  //   console.log("secoundHighestNumber", secoundHighestNumber);
}
// console.log("getSecondHighestNumber",getSecondHighestNumber([99, 92, 10, 1, 98, 93]));

function getSecondHighestNumber(numArray) {
  return numArray.sort((a, b) => b - a)[0];
}

// console.log("getSecondHighestNumber",  getSecondHighestNumber([99, 92, 10, 1, 98, 93]));

/** Check if the string is pelindrome */

// function checkPelindrome(nameStr) {
//   // nameStr = nameStr.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
//   nameStr = nameStr.split(" ").join("");
//   let start = 0;
//   let end = nameStr.length - 1;
//   while (start < end) {
//     if (nameStr[start] !== nameStr[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true
// }
// console.log(
//   "checkPelindrome",
//   checkPelindrome("A man, a plan, a canal, Panama")
// );

// function checkPelindrome(nameStr) {
//   const sdadas = nameStr.split(" ").join(" ")
//   const newNameStr =sdadas.split(" ").reverse().join(" ");
//   console.log("nameStr", sdadas, newNameStr);
//   if (sdadas === newNameStr) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("checkPelindrome",checkPelindrome("A man, a plan, a canal, Panama"));
// console.log("checkPelindrome", checkPelindrome("hello"));

function findMissingNumber(strArr) {
  const n = strArr.length + 1;
  const checkSum = (n * (n + 1)) / 2;
  const arrSum = strArr.reduce((acc, curr) => acc + curr, 0);
  return checkSum - arrSum;
  console.log("findMissingNumber", checkSum, arrSum);
}
console.log("findMissingNumber", findMissingNumber([1, 2, 3, 4, 6, 7]));

function renderLoop() {
  try {
    const obj = { a: "Something", b: "kalia" };
    // for( let [key, value] of Object.entries(obj)){
    //   console.log("obj", key)
    //   console.log("value", value)
    // }
    // Object.freeze(obj);
    // Object.preventExtensions(obj)
    // Object.seal(obj)s
    // delete obj.a
    // obj.a = "abhishek kumar kalia"
    // console.log("Object.values", Object.isFrozen(obj));
    // console.log("Object.values", Object.isExtensible(obj));
    console.log("Object.values", Object.isSealed(obj));
  } catch (error) {
    console.error(error);
  }
}
renderLoop();

function twoSum(nums, target) {
  const seen = {}; // Create a map to store seen numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen[complement] !== undefined) {
      console.log("seenseen", seen[complement]);
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }

  // If no solution is found, return an empty array
  return [];
}
var nums = [2, 7, 11, 15];
var target = [0, 1];

console.log("twoSum", twoSum(nums, 9));

const condition = (a, b) => a > b;
const obj = {
  a: 1,
  b: 2,
  ...(false && { c: 3 }),
  ...(true && { d: 4 }),
  ...(condition(1, 2) && { e: 5 }),
};
console.log("condition------>", obj);

const personaObject = {
  name: "abhishek",
  lastname: "kalia",
  callPersona: function callByRefrence() {
    console.log("callByRefrence", this.name);
  },
  callPersonaArrow: (callByRefrence = () => {
    // personaObject.name = "surendrea";
    this.name= "aditya garwa"

    console.log("callByRefrence", this.name);
  }),
};
personaObject.callPersona();
personaObject.callPersonaArrow();
