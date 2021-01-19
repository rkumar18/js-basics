function myName(name) {
    console.log("My name is " + name);
  }
  
  myName("Tiger");



  yourName("rocky");  //this is hoisting , we can write call function statement before define them 
  function yourName(name) {
    console.log("your name is " + name);
  }
  
  //hoisting suggests that variable and function declarations are physically moved to the top of your code. 
num =5;
console.log(typeof(num))
console.log(num); //undefined 
 let num = 6; // only declarations can move to top not intialization.


 //only var can be use for hoisting , due to its global property 
 //not let and const can use for it.
 let y = 5;
 console.log(y)

