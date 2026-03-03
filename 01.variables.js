// There are three types of varibles

//1 var

var name = 'Utsav'
console.log(name)  //Utsav

var name = "Naitikbhai"  //value reassign
console.log(name)  // Naitikbhai

//2 let - block scope

let age = 22
age = 33

console.log(age) //33

//3 const - block scope & value not change

const hobby = 'Cricket'

//hobby = 'football' //wrong we can not change value and not redeclare the variable with same name

console.log(hobby)  //cricket

//variable practice

console.log(fname) //undefined // variable male che but value nathi malti 
var fname = "utsav"
//log undefined because js knows fname is declared but value unable to read

console.log(name) //referance error
const name = 'kano'

console.log(names) //referance error
let names = 'kano'


function greet(fname) {
  let nam = "Utsav";
  function name() {
    let lastName = "Patel";
    console.log(nam);
    function nested() {
      lastName = "Chatrola";
      console.log(nam + lastName);
    }
    nested()
  }
  //console.log(lastName) //we can not access the value of lastName bcz it inside the name function
  name();
}
greet();

function fullName() {
    const firstName = 'Utsav'
    function lastName(){
        const lName = 'Chatrola'
        console.log(firstName+ lName)
        function final() {
            console.log(lName)
        }
        final()
    }
    lastName()
    //console.log(lName) not accessible because lastname function no scope ni outside che
}
fullName()

var firstName = "Utsav";
function fullName() {
  //console.log(firstName)  // undefined because at below var value updates js engine finds var firstName but unable to get values
  var firstName = "Kano";
  function lastName() {
    var lName = "Patel";
    function final() {
      console.log(firstName + lName);
    }
    final();
  }
  lastName();
  console.log(firstName);
  //console.log(lName); //not accessible because its outside of lastName function scope
}
fullName();




