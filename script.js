//Declaring Variables
let table = document.getElementById('table')
let fname = document.querySelector('#fname')
let lname = document.querySelector('#lname')
let salary = document.querySelector('#salary')

let FirstName = document.querySelector('#FirstName')
let LastName = document.querySelector('#LastName')
let Salary = document.querySelector('#Salary')
let submit = document.querySelector('#submit')

//Creating a class Employee
//Setting values
class Employee {

    constructor (fname, lname, salary){
        console.log("Employee details", fname)

        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }

    displayEmployee() {
        return this.fname
        return this.lname
        return this.salary
        console.log(`Hello World`)
        console.log(`Name ${this.fname}`)


        Employee.call(this, fname, lname, salary); //call class, base construction function
        
    }
}
var lucy = new Employee();
lucy.fname = "Lucy"
lucy.lname = "Laurentino"
lucy.salary = 40.000
//var firstname = new Employee("Lucy", "Laurentino", 49.000)

console.log(firstname.displayEmployee());
        displayEmployee.prototype = new Employee(); // create a prototype chain
        displayEmployee.prototype.constructor = displayEmployee
    



submit.addEventListener('click', (e) => { displayEmployee(); e.preventDefault() })