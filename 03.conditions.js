//ternarny

let name = "Utsav";
let surname = "chatrola";
let age = 23;
let adultStatus = true;

//normal ternary

//name == 'Utsav' ? console.log('user verified') : console.log('user not found')

//nested ternary
//age === 23 ? console.log(`You age is ${age}`) : name == 'utsav' ? console.log("name verified") : surname === 'chatrola' ? console.log('surname verified') : console.log('user not found')

//if else

//normal

// if(age > 18){
//     console.log('You are adult')
// } else {
//     console.log("You are minor")
// }

//wthout scope

if (age >= 24) console.log(`your age is ${age}`);
else console.log("Your are not mature");

if (age < 18) console.log("you are minor");
else console.log("you are an adult");

// else if ladder
// if(age < 20){
//     console.log('You are adult')
// } else if(name == 'Utsav'){
//     console.log(`Welcome ${name}`)
// } else if(surname === 'chatrola'){
//     console.log(`Your surname is ${surname}`)
// } else {
//     console.log('No data available')
// }

// nested if

// if (name === "Utsav") {
//     if(!adultStatus){
//         console.log('Minor')
//     } else {
//         console.log('Adult')
//     }
// } else {
//   if (surname === "chatrola") {
//     console.log(`You are belonged from patel caste`);
//   } else {
//     console.log("You come from other caste");
//   }
// }

// switch case

//normal switch case
let month = "Apr";
let year = 2003;

// switch (month) {
//   case 'Jan':
//     break;
//   case "Feb":;
//     break;
//   case 'Mar':
//     break;
//   case 'Apr':
//     console.log('Happy Birthday')
//     break;
//   default:
//     console.log('birth month not found')
//     break;
// }

//nested switch case

// switch (year) {
//   case 2001:
//     console.log('this is the year of 2001')
//     break;
//   case 2002:
//     console.log('this is the year of 2002')
//     break;
//   case 2003:
//     console.log('this is the year of 2003')
//     switch (month) {
//       case "Jan":
//         break;
//       case "Feb":
//         break;
//       case "Mar":
//         break;
//       case "Apr":
//         console.log("Happy Birthday");
//         break;
//       default:
//         console.log("birth month not found");
//         break;
//     }
//     break;
//   case 2004:
//     console.log('this is the year of 2004')
//     break;
//   default:
//     console.log('can not find values')
//     break;
// }
