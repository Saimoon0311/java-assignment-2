// chapter no 21 - 25
// task # 1

// var first = prompt("Enter your first name")
// var last = prompt("Enter your last name")
// var a = " "
// alert(first+a+ last )


// task # 2

// var a = prompt("Enter your favourate mobile")
// var b = a.length
// alert (a)
// alert(b)


// task # 3

// var a = "Pakistan"
// var b = a.indexOf("n")
// alert(b)



// task # 4

// var a = "Hello world"
// var b = a.lastIndexOf("l")
// alert(b)



// task # 5

// var a = "Pakistan"
// var b = a.charAt(3)
// alert(b)




// task # 7

// var text ="hyderabad"
// var indexnum = text.indexOf("hyderabad");
// var first = text.slice(0,indexnum);
// var rep = "Islamabad";
// var third = text.slice (indexnum+12);
// alert(first + rep + third);



// task # 8

// var text ="Ali and Sami are best friends. They play cricket and football together"
// var indexnum = text.indexOf("and");
// var first = text.slice(0,indexnum);
// var rep = "&";
// var third = text.slice (indexnum+12);
// alert(first + rep + third);



// task # 9

// var a = 472
// var b = a.toString()
// document.write("value: "+ a + "<br>")
// document.write("Type: number" + "<br>")
// document.write("value: "+ b + "<br>")
// document.write("Type: string" + "<br>")



// task # 10

// var a = "peanuts"
// var b = a.toUpperCase()

// document.write(a + "<br>")
// document.write(b + "<br>")



// task # 11

// var a = prompt("Enter any word")
// var b = a.slice(0,1)
// var c = b.toUpperCase()
// var d = a.slice(1,30)
// alert (c+d)



// task # 12

// var a = 35.36
// var b = a.toString()
// var c = Math.floor(b)
// alert (a)
// alert (c)



// task # 17

// var a= "Pakistan"
// var b = a.charAt(7)
// alert (b)


// chapter # 26 - 30
// task # 1

// var a = prompt("Enter any positive number")
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// document.write("number: "+ a + "<br>")
// document.write("round off value: "+ b + "<br>")
// document.write("floor value: "+ c + "<br>")
// document.write("ceil value: "+ d + "<br>")



// taak # 2

// var a = prompt("Enter any negative number")
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// document.write("number: "+ a + "<br>")
// document.write("round off value: "+ b + "<br>")
// document.write("floor value: "+ c + "<br>")
// document.write("ceil value: "+ d + "<br>")



// task # 3

// var a = prompt("Enter any number")
// var b = a.toString()
// alert (b)



// task # 4

// var a= prompt("Enter any number")
// var b = Math.random(a)
// alert("ramdom disc value is : " + b)


// task # 5

// var a = prompt("Enter any number")
// var b = Math.random(a)
// var c = Math.floor(b)
// if (c===1){
//     alert("heads")
// }
// else if(c===0){
//     alert("tails")
// }else{
//     alert("try again")
// }



// task # 6

// var a = prompt("Enter any number")
// var b = Math.random(a)
// var c = Math.floor(b)

// alert("random number between 1 and 100: "+ c)



// task # 7

// var a = prompt("Enter your weight in kilogram")
// alert("The weight of user is : "+a +"kg")



// task # 8

// var a = 8
// var b = Math.random(a)
// var c = Math.floor(b)
// var d = prompt("Enter number")
// if(d===c){
//     alert ("Correct answer")
// } else {
//     alert("Try again")
// }



// chapter # 31- 34
// task # 1

// alert(new Date())


// task # 2

// var a = new Date()
// var b = a.getMonth()
// alert (b)


// task # 3

// var a = new Date()
// var b = a.slice(0 , 3)
// alert (b)



// task # 4

// var a = new Date()
// if (a===mon){
//     alert("today is work day")
// }else{
//     alert("today is fun day")
// }


// task # 5

// var a = new Date()
// var b = a.getDate()
// if (b===1,2,3,4,5,6,7,8,9,10,11,12,13,14,15){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }


// task # 6

// var a = new Date()
// // var b = a.
// var c = a.getFullMinutes()
// document.write("Current date "+a +"<br>")
// // document.write("Current date "+b +"<br>")
// document.write("Current date "+c +"<br>")


// task # 13

// var a = prompt("Enter your age")
// var b = 2020 - a
// alert (b)



// task # 14


// document.write("Customer Name : ABC " + "<br>")
// document.write("Month : February " + "<br>")
// document.write("Number of units : 410 " + "<br>")
// document.write("Charges per unit : 16 " + "<br>")
// document.write(" Net Amount Payable (within Due Date)  : 6560 " + "<br>")
// document.write("Late Payment Surcharge  : ABC " + "<br>")
// document.write("Gross Amount Payable (after Due Date)  : 6010 " + "<br>")




// chapter # 35 38
// task # 1

// var a = new Date()
// function greet(){
//     alert (a)
// }
// greet()



// task # 2

// var a = prompt("Enter your first name")
// var b = " "
// var c = prompt("Enter your last name")
// function greet (){
//       alert (a + b + c)
// }
// greet()



// tasl # 3


// var num1 = prompt ("enter any number")
// var op = prompt ("enter operator")
// var num2 = prompt("enter any number") 
// function sa(num1,op,num2){
//     if (op=== "+"){
//         return num1+num2
// }
//     else if (op=== "-"){
//         return num1-num2
//     }
//     else if (op=== "*"){
//         return num1*num2
//     }
//     else if (op=== "/"){
//         return num1/num2
//     }
//     else{
//         return "worng"
//     }
// }

// var res= sa (num1,"+",num2)
// var res1= sa (num1,"-",num2)
// var res2= sa (num1,"$",num2)

// alert(res)
// alert(res1)
// alert(res2)



// task # 4

// function greet(){
//     var num1 = prompt("Enter your first value")
// var sign = prompt("Enter your sign")
// var num2 = prompt("Enter your second value")

// if(sign === "+"){
//     alert(num1+num2)
// }else if (sign === "-"){
//     alert(num1-num2)
// }else if (sign === "*"){
//     alert(num1*num2)
// }else if (sign === "/"){
//     alert(num1/num2)
// }else if (sign === "%"){
//     alert(num1/num2*100)
// }

// }

// greet ()




// task # 5 

// function greet (){
//     var a = 2*2
//     alert (a)
// }
// greet()



// task # 6

// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// alert(factorial(5));



// task # 7


// function greet(){
//     var a = prompt("enter start number ")
//     var b = prompt("enter end number")
//     for (i=a;i<=b;i++){
//         alert(i)
//     }
// }
// greet()



// task # 9




// function check_Palindrome(str_entry){

//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;

//         if(cstr==="") {
//             alert("Nothing found!");
//             return false;
//         }

//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {

//             if (cstr.length === 1) {
//                 alert("Entry is a palindrome.");
//                 return true;
//             } else {

//                 ccount = (cstr.length - 1) / 2;
//             }
//         }

//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//              alert("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         alert("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');
    



// task # 11


// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));




// task # 12


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));




// task # 13


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('w3resource.com', 'o'));




// SIR JAVA SCRIPT SAMHJ NHI AA RAHI HA PLEASE THORA DETAIL MA SAMJHA DAN PLEASE SIR

