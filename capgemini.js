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
    this.lastName = "abhishek kumar kalia"
    console.log("arrowFunction", this.lastName);
  },
};
callBy.simpleFunction();
callBy.arrowFunction();

const person = {
  name: "abhishek kumar",
  mobileNumber: "123456789"
}