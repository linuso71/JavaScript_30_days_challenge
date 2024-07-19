// Task 1,2,3,4,5

class Calculator{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    // method
    add(){
        return this.num1+this.num2;
    }
    sub(){
        return this.num1 - this.num2;
    }
    mul(){
        return this.num1 * this.num2;
    }
    div(){
        return Math.floor(this.num1 / this.num2);
    }
    rem(){
        return this.num1 % this.num2
    }

}

cal = new Calculator(5,3);
console.log(cal.add())
console.log(cal.sub())
console.log(cal.mul())
console.log(cal.div())
console.log(cal.rem())


// Assignment Operators
// Task 6,7
let num = 2;
num+=1;
console.log(num);
num-=1;
console.log(num);


// Task 8,9,10, 11,12,13
function comparison(num1,num2){
    if (num1>num2 && num1> 0){
        console.log("num1 is greater than num2 and num1 is greater than 0")
    }
    else if (num1<=num2 || num1< num2 ){
        console.log("num1 is less than or equal to num2")
        if (num1 === num2){
            console.log("both are equal and same type")
        }
        else if (num1 == num2){
            console.log("both are equal but not same type")
        }
    }
}

comparison(3,'3');

// Task 14
// Ternary operator
num = -90
const  result= num >= 0 ? "positive" : "negative";
console.log(result)
