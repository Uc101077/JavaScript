
//**************************************************1 Escape a String into the String ************************************************************//
//-(skips string inside string)

//1.1  \"\"

const str = 'Helloo \"Utsav\" Chatrola'
console.log(str)  //Helloo "Utsav" Chatrola

const str = 'Helloo \'Utsav\' Chatrola'
console.log(str)   //Helloo 'Utsav' Chatrola

//1.2 double in single/ single in double

const str1 = 'Helloo "Utsav" Chatrola'
console.log(str1)  //Helloo "Utsav" Chatrola

const str1 = "Helloo 'Utsav' Chatrola"
console.log(str1)  //Helloo 'Utsav' Chatrola

//1.3 backticks

const str1 = `Helloo 'Utsav' Chatrola`
console.log(str1)  //Helloo 'Utsav' Chatrola


//**************************************************2 finding a string into string************************************************************//


//1 indexOf

const str2 = "Utsav Chatrola"
console.log(str2.indexOf('U')) //7
console.log(str2.indexOf('U',8)) //-1
console.log(str2.indexOf('U',5)) //7
console.log(str2.indexOf('U', -7)) //7
console.log(str2.indexOf('Chatrola')) //6

const str2 = "9974183761"
console.log(str2.indexOf('7', -2)) //2  //here negative index treated as 0 

const str = "abc";
console.log(str.indexOf("")); // 0

//2 lastIndexOf

const str2 = "Helloo Utsav Chatrola"
console.log(str2.lastIndexOf('u')) //-1 // case-sensitive
console.log(str2.lastIndexOf('U'))  //7
console.log(str2.lastIndexOf('U', 3)) //-1
console.log(str2.lastIndexOf('U', 7))  // 7
console.log(str2.lastIndexOf('U', -17))  // -1
console.log(str2.lastIndexOf('H', -17)) //0  //here negative index treated as 0
const str3 = "abc";
console.log(str3.lastIndexOf("")); //3 length = 3 and end position = 3 '' also searchs from the end

//3 search - return index of first character of string which is provided as parameter

const str2 = "Helloo Utsav Chatrola"
console.log(str2.search('Uts')) //7
console.log(str2.search('Utv')) //-1


//**************************************************3 Extracting string portion************************************************************//


//1 slice (n-1) 

const str3 = "Helloo Utsav Chatrola"
console.log(str3.slice(3)) ////loo-Utsav Chatrola 
console.log(str3.slice(7,12)) // 'Utsav'  return string with (length-1) 
console.log(str3.slice(7,-2)) // 'Utsav Chatro'  //here negative index at second parameter last thi length last thi 2 element sudhi ni string value return kare
console.log(str3.slice(-3)) //ola
console.log(str3.slice(0)) //Helloo Utsav Chatrola
console.log(str3.slice(0,0)) //empty
console.log(str3.slice(-3,-2)) // o

const str3 = "JavaScript";
console.log(str3.slice(4, 4)); //empty

const str = "JavaScript";
console.log(str.slice(-6, -2));  //Scri

const str = "JavaScript";
console.log(str.slice(-50, 3));
console.log(str.slice(3,3)) // empty




//2 substring (n-1) 
const str3 = "Helloo-Utsav Chatrola"
console.log(str3.substring(3))  //loo-Utsav Chatrola 
console.log(str3.substring(7,12)) // 'Utsav' same as slice
console.log(str3.substring(7,-2)) // 'Helloo-' //here first parameter becomes 0 because of negative index and first params which is 7 is goes to second and 
console.log(str3.substring(-3)) // Helloo-Utsav Chatrola
console.log(str3.substring(0,0)) // empty
console.log(str3.substring(0)) //Helloo Utsav Chatrola
console.log(str3.substring(3,3)) // empty
console.log(str3.substring(-3,-2)) //empty





//3 substr - dont follow n-1 because (index, length)
const str3 = "Helloo-Utsav Chatrola"
console.log(str3.substr(3))  //loo-Utsav Chatrola
console.log(str3.substr(7,-3)) // empty string  //negative index not accept
console.log(str3.substr(-3)) //ola //starts from an end of the string
console.log(str3.substring(-3,-1)) //empty
console.log(str3.substr(0,0)) //empty
console.log(str3.substr(0)) //Helloo Utsav Chatrola
console.log(str3.substr(3,3)) // loo  //here it counts length l=1, o=2, o=3




//**************************************************4 replacing a string portion************************************************************//


const str4 = "Helloo-Utsav Chatrola"
console.log(str4.replace('Utsav','Kano')) //Helloo-Kano Chatrola

const str4 = "Helloo-Utsav Utsav Chatrola"
console.log(str4.replace('Utsav','Kano')) //Helloo-Kano Utsav Chatrola
console.log(str4.replace(/Utsav/g, 'Kano')) //Helloo-kano kano Chatrola
console.log(str4.replaceAll('Utsav', "kano")) //Helloo-kano kano Chatrola


//**************************************************5 extracting a string character************************************************************//

//1 charAt

const str5 = "Helloo-Utsav Utsav Chatrola"
console.log(str5.charAt(5)) // o
console.log(str5.charAt(90)) //empty
console.log(str5.charAt(-4)) // empty

//2 charCodeAt - returns asky values of string character

//Asky values
//A-Z = 65 to 90  // a-z = 97 to 122  // 0-9 = 48 t0 57

const str5 = "Helloo-Utsav Chatrola"
console.log(str5.charCodeAt(5)) //111
console.log(str5.charCodeAt(0)) //72
console.log(str5.charCodeAt(100)) //NaN

const str5 = "Helloo-Utsav 3546 Chatrola"
console.log(str5.charCodeAt(13)) //51

//3 property[]

const str5 = "Helloo-Utsav Chatrola"
console.log(str5[4]) //o
console.log(str5[100]) // undefined


//**************************************************other methods************************************************************//

const str = 'Utsav Chatrola'
console.log(str.toUpperCase())  //UTSAV CHATROLA
console.log(str.toLowerCase())  //utsav chatrola


const str = '    Utsav    Chatrola   '    //remove empty spaces from first and last of the string 
space between two string charaters not removed
console.log(str.trim()) //Utsav Chatrola


const str = 'Utsav Chatrola'
console.log(str.split(''))  //converts into an array

console.log(str.split('').reverse().join('')) //alortahC vastU join converts array into string

const str = 'Utsav-Chatrola'
console.log(str.split('-'))  // [ 'Utsav', 'Chatrola' ]
console.log(str.split('-').reverse().join('-')) //Chatrola-Utsav


