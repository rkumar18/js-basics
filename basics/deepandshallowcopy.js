var array = [1,2,3]
var newArray = array
newArray[0]=0;
console.log(newArray,array)// shallow copy

//for shallow copy in array there are 4 ways 
//Array.concat(array1)
//array.from(array1)
//array.slice(array1)
//using spread oprator   //...(array1)


var employee = { 
	eid: "E101", 
	ename: "Jack", 
	eaddress: "New York", 
	salary: 5000 
} 


console.log("Employee=> ", employee); 
var newEmployee = employee; // Shallow copy 
console.log("New Employee=> ", newEmployee); 

console.log("---------After modification----------"); 
newEmployee.ename = "Beck"; 
console.log("Employee=> ", employee); 
console.log("New Employee=> ", newEmployee); 
// Name of the employee as well as 
// newEmployee is changed. 


var employee1 = { 
    eid: "E102", 
    ename: "Jack", 
    eaddress: "New York", 
    salary: 50000 
} 
console.log("=========Deep Copy========"); 
var newEmployee = JSON.parse(JSON.stringify(employee1)); 
console.log("Employee=> ", employee1); 
console.log("New Employee=> ", newEmployee); 
console.log("---------After modification---------"); 
newEmployee.ename = "Beck"; 
newEmployee.salary = 70000;  // only cahnge in new copy
console.log("Employee=> ", employee1); 
console.log("New Employee=> ", newEmployee); 