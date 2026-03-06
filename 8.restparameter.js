//rest parameter = return an array // used in function params
// function normal(name, age, bool, profession){
//     console.log(name) //Utsav
//     console.log(age)  //23
//     console.log(bool)  // true
//     console.log(profession)  //{ profession: 'Software Engineer' }
// }
// normal('Utsav', 23, true, {profession: 'Software Engineer'})


// 1. Collecting Function Parameters  //rest parameter works with function parameter  //converts into an array

// Rest parameter = rest parameter converts received values of functions parameters into array
// The Rest Parameter allows functions to accept an indefinite number of arguments as an array. It collects multiple arguments into a single array parameter.
// rest use kariye to multiple parameter define karva na pade.

// function restParams(...params){
//     //console.log(params)  // [ 'Utsav', 23, true, { profession: 'Software Engineer' } ]  //here it converts all the params value into array
// }
// restParams('Utsav', 23, true, {profession: 'Software Engineer'})

//default parameters

// function mul(factor, ...nums) {
//     return nums.map(num => num * factor);
// }
// console.log(mul(2,1,2,3,4,5))

// function greet(greeting, ...names) {
//     return `${greeting}, ${names.join(' and ')}`;
// }
// console.log(greet("Hey", "Tanamaya", "Sonam"));


// 2  Filtering Properties in Objects

// const { a, ...rest } = { a: 1, b: 'Patel', c: 3 };
// console.log(a)
// console.log(rest)


// 3 Destructuring with Rest

// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first) //1 
// console.log(rest) //[2,3,4]

