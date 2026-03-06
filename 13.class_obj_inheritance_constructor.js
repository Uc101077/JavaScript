//1 normal class object

// class data {
//     constructor(name){  //here we declare parameters
//         this.firstName = name
//     }
//     displayName(){ //here it calls the
//         console.log(`My name is ${this.firstName}`)
//     }
// }
// const data1 = new data('Utsav')
// data1.displayName()

//2 Inheritance using super and extend

// class bio{
//     constructor(name,surname) {
//         this.fname = name
//         this.lname = surname
//     }
//     displayData(){
//         return `My name is ${this.fname} ${this.lname}`
//     }
// }

// class updateBio extends bio{ //extend accsess function bio
//     constructor(name,surname,address){
//         super(name,surname)  //it takes values of name,surname from bio
//             this.address = address
//     }
//     displayUpdatedData(){
//         console.log(`My name is ${super.displayData()} and I am living in ${this.address}`)
//     }
// }
// const data1 = new updateBio('Utsav','Chatrola','Surat')
// data1.displayUpdatedData()  //My name is My name is Utsav Chatrola and I am living in Surat
// const data2 = new updateBio('Kano','Patel','Amreli')
// data2.displayUpdatedData()

// console.log(data1 instanceof updateBio) //true

//how it works

// function data(fname, lname) {
//   this.firstName = fname;
//   this.lastName = lname;
// }

// data.prototype.fnameTransform = function () {
//   return this.firstName.toUpperCase();
// };

// data.prototype.lnameTransform = function () {
//   return this.lastName.toLowerCase();
// };

// const data1 = new data('utsav','Chatrola');

// console.log(data1.fnameTransform())
// console.log(data1.lnameTransform())

