//1 Airthmatic operators

const a = 10;
const b = 20;

sum = a + b;
sub = b - a;
div = b / a;
mul = a * b;
modulus = a % b; // in division shesh kadhva mate

const c = 3;
const d = 4;
let squarert = c ** d; //for getting squareroot of the value here 3*3*3*3 = 81

let x = 5;
x **= 2;

// console.log(sum);
// console.log(sub);
// console.log(div);
// console.log(mul);
// console.log(modulus);
// console.log(squarert);
// console.log(x);

//++ Increament operator & --decreament operator for increase and decrease the value

//2 Assignment Operators

//=
const name = "Utsav";


let count = 1;
let number = "Your number is ";

//console.log((number += count));

//
let s = 20;
let t = 2;

//const plusEq = (s += t);
//const minEq = (s -= t);
//const mulEq = (s *= t);
//const divEq = (s /= t)
//const sqrtEq = (s **= t)
//const modulusEq = (s %= t)

//console.log(plusEq);
//console.log(minEq);
//console.log(mulEq);
//console.log(divEq)
//console.log(sqrtEq)
//console.log(modulusEq)

//3 comparison operator

let myNum = 5;

// ==
if (myNum == "5") {
  console.log("True");
} else {
  console.log("False");
}

// ===
if (myNum === "5") {
  console.log("True");
} else {
  console.log("False");
}

// >
if (myNum > 6) {
  console.log("Greater");
} else {
  console.log("lesser");
}

// <
if (myNum < 6) {
  console.log("true");
} else {
  console.log("false");
}

// >=
if (myNum >= 5) {
  console.log("Right");
} else {
  console.log("Wrong");
}

// >=
if (myNum <= 4) {
  console.log("Right");
} else {
  console.log("Wrong");
}

// !=
let num = 5;

if (num != "5") {
  console.log("Number is not equl to 5");
} else {
  console.log("Number is equl to 5");
}

// !==

if (num !== "5") {
  console.log("Number is equl to 5 but data type not matched");
} else {
  console.log("Number is equl to 5");
}

// >! <!
//here ! operator converts truthy values(number) into 0 which becomes falsy values

if (6 > !7) {
  console.log("true");
} else {
  console.log("false");
}

if (6 < !7) {
  console.log("true");
} else {
  console.log("false");
}

//4 logical operators

//&& and

let hour = 9;

if(hour < 10 && hour > 8){
  console.log('Office is opened')
} else {
  console.log('office closed')
}

// ||OR

if(hour < 4 || hour > 8){
  console.log('Office is opened')
} else {
  console.log('office closed')
}

// ! operator converts truthy values into falsy values and falsy values into truthy values
if (!myNum) {
  console.log("number missing");
} else {
  console.log("number exist");
}

//pre and post increament and decreament

//here pre increament works on the same line that's why it increase the value of pre by 1 before log.
//in simple pre works in the same line
// let pre = 20
// const preSum = pre + ++pre
// console.log(preSum)

// let pre = 12
// const preSub = pre - --pre
// console.log(preSub) //1

//here post increament works on the next line that's why it increase the value of post by 1 after log.
//post works on the next line
// let post = 10
// const postSum = post + post++
// console.log(postSum)

// let post = 12
// const postSub = post - post--
// console.log(postSub) //0

//confusing stuff

// let c = 5;
// c *= c += 3;
// console.log(c);


// let p = 4;
// let q = p *= 2 + 3;
// console.log(p, q);

