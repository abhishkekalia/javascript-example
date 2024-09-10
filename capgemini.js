const a = 1;
function foo() {
  //   a = 3;
  console.log("foo", a);
}
foo();

let b = "1";
function bar() {
  b = "2";
  console.log("bar", b);
}
bar();

var d = "1";
function foobar() {
  console.log("foobar", d);
  // var d = "5";
  d = "5";
  console.log("foobar", d);
}
foobar();

const callBy = {
  name: "abhishek",
  lastName: "kalia",
  simpleFunction: function () {
    console.log("simpleFunction", this.name);
  },
  arrowFunction: () => {
    this.lastName = "abhishek kumar kalia";
    console.log("arrowFunction", this.lastName);
  },
};
callBy.simpleFunction();
callBy.arrowFunction();

const person = {
  name: "abhishek kumar",
  mobileNumber: "123456789",
};

/** check float value is greater or less */
const x = 9.11;
const y = 9.9;

if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is greater than y");
}

document.getElementById("parent").addEventListener("click", ()=>{
console.log("parent clicked")
})
document.getElementById("child").addEventListener("click",()=>{
  console.log("child clicked")
})
document.getElementById('todo-list').addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove();
  }
})

/**** Explain closures */
 function fooa (ax){
  return function inner  (ay){
    return ax*ay
  }
}

console.log("value of a",fooa(5)(10))
// function display() {

//   var f = g = 20;


// }
// display()
// console.log('f',f , typeof f === 'undefined');

//  console.log('g',g, typeof g === 'undefined');

 function calculate(x) {
  function multiply(y) {
      return x * y;
   }
  return multiply;
}
 
const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);
console.log(multiply3(3)); 
