//*********************************************Truthy Values************************************************************//
//String, '0', array, object, Number, true, 3.2, -3.2, Date, 'false', 1n

//*********************************************Falsy Values************************************************************//
//false, '', 0, -0, null, undefined, NaN, 0n

//************************************************unique cases************************************************************//
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined
// console.log(typeof this) //object
//console.log(typeof NaN); //number
//console.log(typeof []); //object
//console.log(typeof {}) //object

// console.log(typeof function(){}) //function
// let b = new Number(5);
// console.log(typeof b) //object because Number is non-primitive data type

// console.log(10<10) //false
// console.log(10>10) //false
//console.log(5 > 3 > 1); // false  5>3 returns true true becomes 1 and 1>1 is false

// console.log('Utsav' - 2) //NaN
// console.log('Utsav'+2) //Utsav2
// console.log('2'+2) //22
// console.log(2+ '2') //22
//console.log('10' - '2' + 5); //13
// console.log(2+ 5 + '2') //72
// console.log('2'+ 5 + 2) //252
//console.log('2'+ 5 * 2) //210 //multiplication happens first
//console.log(2+ 5*2) //12
//console.log('5' + true + 2); '5true2'
//console.log('2'+ 3+ 5*6) //2330
//console.log('10'%2) //0
// console.log(2+ '5' + 2) //252
// console.log(2 - '3') // -1 //here it converts 3 into number
// console.log('2' - 3) // -1 //JavaScript automatically converts '2' (a string) into a number.
//console.log('3' - '2') // here it converts all string values into number
// console.log(10 === 10) //true
// console.log('10' === 10) //false
// console.log('10' == 10) //true
// console.log(null == 0);//false
//console.log( 0 == '' ); // true '' converts in to a number
//console.log('0' == '')  //false
//console.log('0' === '') // false
// console.log(null == 0); // false
// console.log(null >= 0); //false
//console.log(null <= 0); //true
// console.log(null> 0) //false
// console.log(null< 0)//false
// console.log(undefined == 0); //false
// console.log(null == false) //false
// console.log(undefined < 0); // false
// console.log(undefined > 0); //false
//  console.log(undefined <= 0); // false
//  console.log(undefined >= 0); //false
//console.log(null == undefined); //true bcz value comparison
//console.log(null === undefined); //false bcz value and data type comparison
//console.log({} == {}) //false  Objects are compared by reference, not by value.
// object A (memory address 0x01)
// object B (memory address 0x02)
//console.log(![]); //false
//console.log([]); //true
//console.log([1,2,3].length); //3
//console.log([1,2,3].indexOf(2)); //1
//console.log([].length == []) //true because here it compares the length of array length= 0 with empty array
//console.log([].length == [].length) //true 0 == 0
//console.log(![] == []) //true here value comparison should be 0 == 0 (length comparison happens returns 0)
//console.log([] == ![]) //true here value comparison should be 0 == 0 (length comparison happens returns 0)
//console.log([] == []) //false different array references
// console.log([null] == "") //true
// console.log([undefined] == "") //true
// console.log([] + {}); //[object Object]    [] becomes "" and {} becomes [object Object]
// console.log({} + []); //[object Object]
//console.log([] + [] + 1); // '1'
//console.log([].length + {}); //0[object Object]
//console.log([1] + [2]); //12  + converts [2] into string '2'
//console.log('hi' && 0 && 'bye'); //0

// arr1= []
// console.log(arr1 == arr1) //true because same array refrances
// arr1=[]
// arr2 = arr1
// console.log(arr1 == arr2) //true

// if([1,2].length){
//     console.log('true')
// } else {
//     console.log('false')
// } //true //length=2 is truthy

// if(![1,2].length){
//     console.log('true')
// } else {
//     console.log('false')
// } //false !length=2 becomes falsy

// const arr = [1,2,3,4,5]
// const arraylength = arr.length

//console.log(arr[arraylength -1]) //5
//console.log(arr[3]) //3 here it checks indexOf an array

// const x = 10;
// const y = 20;
// const z = (x,y)
// console.log(z) //20 //Because of the comma operator it evaluates and throw it away then evaluates b and return value of y
