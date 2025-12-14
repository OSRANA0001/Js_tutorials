console.log("hello sir");
console.log("I am good how about you");

// string/

// // integers
// let num = 99;
// console.log(typeof(num));

// let c = 55.65;
// console.log(c);
// console.log(typeof(c));

// // boolean
// let b = false;
// console.log(b);
// console.log(typeof(b))

// let empty;
// console.log(typeof(empty));

// empty=null;
// console.log(typeof(empty));

// int a = hello; sopl (a)

// creating object

// let student = {
//     name : "Raju",
//     age : 10,
//     city : "dholakpur"
// }

// console.log(student);
// console.log(student.name)

// value type , reference type

// let a = "os";
// b=a;
// a="rana";
// console.log(a);
// console.log(b);

// let c = {name: "hellosingh"};
// let d = c;
// c.name="byesingh";
// console.log(c);
// console.log(d);

// arrays
// let arr = ['hello','sir','like','bye',33,21,null,true]
// console.log(arr[0]);
// console.log(arr);
// console.log(typeof(arr));

// functions
// function grade (yourGrade){
//     console.log("MY grade "+yourGrade);
// }
// grade("A+");
// grade(85);
// grade(33);

// hoisting

// random(789);
// console.log(z);
// function random(rv){
//     console.log("random prints "+rv);
// }

// var z = 25;
// random("hello");

// hoisting
console.log(std);
student("Rohit");

function student(name) {
  console.log("The student name is : " + name);
}
var std = 5;
console.log(std);

// this and windows

console.log(t);
console.log(this.t);
console.log(window.t);

var t = 15;

console.log(t);
console.log(this.t);
console.log(window.t);

console.log(this === window);

// let , const , var
// let,const - they are local scoped
// var - is globally

let cu = 10;
const en = 15;
var bt = 20;

console.log(cu);
console.log(en);
console.log(bt);

// blocked scoped
{
  let abc = 15;
  const ijk = 25;
  var xyz = 45;
}
//console.log(abc);
//console.log(ijk);

console.log(xyz);

// lexical Scope
function ca() {
  //let nam = ("maharaj");
  console.log(nam);
}
let nam = "rahul";
ca();

// higher order functions !! ALL FUNCTION IS JAVASCRIPT IS CALLED FIRST CLASS CITIZENS

function sum(a, b) {
  // in console it will take up global S
  return a + b;
}
console.log(sum(5, 10));

function diff(a, b) {
  return a - b;
}
console.log(diff(15, 5));

// passing function as function
function operand(operation, a, b) {
  return operation(a, b);
}
console.log(operand(diff, 100, 50));

// passing a function to a variable
let add = function sum(a, b) {
  // in console inside script
  return a + b;
};
console.log(add(10, 10));

// function returing a function
function outer() {
  function inner() {
    console.log("Printing hellos");
  }
  return inner;
  //let x = 50;
  // console.log("this is the value of x : " + x);
}
//let x = 35;
console.log(outer());
let banana = outer();
banana();

// function + lexical scope = closure
let a = 10;
function out() {
  a = 45;
  function inn() {
    console.log("the value of a :" + a);
  }
  return inn;
}
let al = out();
a = 50;
al();

// arrow function

function edition(a, b) {
  // normal function
  return a + b;
}

let anotherEdition = (a, b) => a + b; // arrow
console.log(anotherEdition(5, 25));

// Call back
function bye(callback) {
  setTimeout(() => {
    let data = "Data fetched";
    callback(data, null);
  }, 2000);
}
function handlebye(data, error) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}
bye(handlebye);

// promises - pending , fullfilled , rejected

function pro() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched successfully");
    }, 5000);
  });
}

async function handle() {
  try {
    const result = await pro();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
handle();
