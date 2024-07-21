// Task 1
let person_name = "linus";
let age = "23";
console.log(`hello i am ${person_name} and my age is ${age}`);


// task 2
let multiline = `hello this is
multi line
string literals
`;

console.log(multiline);


// Destructuring
// task 3


let first,second,rest

[first,second,...last] = [1,2,4,5,6,7]

console.log(first)
console.log(second)
console.log(last)

console.log(last[0])


// task 4
let title,author;
const books = {
    title:"linus biography",
    author:"linus",
    dead:"2069",
    country:"India"
};



({title,author,...other} = books);

console.log(title);
console.log(author);
console.log(other);


// Spread Operators
// task 5

const arr1 = [1,2,3,4];
const arr = [...arr1,60]
console.log(arr);

// task 6
function sum(...nums){
    return nums.reduce((accumlator,currentvalue)=> accumlator+currentvalue,0);
    
}
console.log(sum(1,2,3))

// task 7
function prod(num1,num2=2){
    console.log(num1* num2);
}

prod(2)

// task 8
let person_name1 = "linus";
let age1 = 23;
let last_name = "zeus";


const obj = {
    person_name1,
    age1,
    updat_age(newage){
        this.age1 = newage
    }
}
obj.updat_age(2)
console.log(obj)

// task 9


let property1 = "username";
let property2 = "lastname";
let method = "greet";


const greet = {
    [property1] : "linus",
    [property2] : "zeus",
    [method](){
        console.log(`hello ${this.username}`)
    }
}

console.log(greet)

greet.greet()







