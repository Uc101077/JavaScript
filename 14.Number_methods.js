
//1 Number.isFinite() -- returns boolean 
//check kare ke number readable che ke nahi inifinte values and wrong data type mate false return kare

console.log(Number.isFinite(1.10)) // true
console.log(Number.isFinite(-1.10)) // true
console.log(Number.isFinite(1)) //true
console.log(Number.isFinite(!1)) //false  //! operator converts number
console.log(Number.isFinite(0)) //true
console.log(Number.isFinite(-0)) //true
console.log(Number.isFinite(Infinity)) // false


//data type validation
console.log(Number.isFinite(null)) //false
console.log(Number.isFinite(undefined)) //false
console.log(Number.isFinite('10')) //false
console.log(Number.isFinite('1.10')) //false
console.log(Number.isFinite('1.10')) //false
console.log(Number.isFinite(true)) //false
console.log(Number.isFinite({})) //false
console.log(Number.isFinite([])) //false


//2 Number.isNaN() -- returns boolean
strict checks data type is number or not
console.log(Number.isNaN(1.10)) // false
console.log(Number.isNaN(-1.10)) // false
console.log(Number.isNaN(1)) //false
console.log(Number.isNaN(!1)) //false  //! operator converts number
console.log(Number.isNaN(0)) //false
console.log(Number.isNaN(-0)) //false
console.log(Number.isNaN(Infinity)) // false

//data type validation
console.log(Number.isNaN(null)) //false
console.log(Number.isNaN('10')) //false
console.log(Number.isNaN('1.10')) //false
console.log(Number.isNaN('1.10')) //false
console.log(Number.isNaN(true)) //false
console.log(Number.isNaN({})) //false
console.log(Number.isNaN([])) //false
console.log(Number.isNaN(undefined)) //false


//3 Number.isInteger() -- returns boolean
// strict checks data type is integer or not  // decimal value integer no kevay
console.log(Number.isInteger(1.10)) // false
console.log(Number.isInteger(-1.10)) // false  //decimal values not allowed
console.log(Number.isInteger(1)) //true
console.log(Number.isInteger(!1)) //false  //! operator converts number
console.log(Number.isInteger(0)) //true
console.log(Number.isInteger(-0)) //true
console.log(Number.isInteger(Infinity)) // false  //////bcz values must be finite


//data type validation
console.log(Number.isInteger(null)) //false
console.log(Number.isInteger('10')) //false
console.log(Number.isInteger('1.10')) //false
console.log(Number.isInteger('1.10')) //false
console.log(Number.isInteger(true)) //false
console.log(Number.isInteger({})) //false
console.log(Number.isInteger([])) //false
console.log(Number.isInteger(undefined)) //false
console.log(Number.isInteger(NaN)) //false



//global methods - isNaN() and isFinite()

console.log(isFinite("10")) //true
console.log(isFinite('')) //true //empty = 0 
console.log(isFinite(null)) //true
console.log(isFinite("abc"))// false
console.log(isFinite(true)) //true


console.log(isNaN("10")) //false
console.log(isNaN(null)) //false
// console.log(isNaN("abc"))// true
// console.log(isNaN(NaN)) //true
// console.log(isNaN('')) //false

