
// Task 1
function odd_even_checker(num){
    if (num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}

// console.log(odd_even_checker(2));


// Task 2

function square(num){
    return num *num;
}

console.log(square(5))

// Task 3
function max_value(num1,num2){
    if (num1> num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(max_value(3,4));


// Task 4

function concat(str1,str2){
    return str1+" "+str2;
}

console.log(concat("hello","world"));

// Task 5

const sum = (num1,num2) => {
    return num1+num2
}
console.log(sum(1,2))

// Task 6

const special_char = (str) => {
    for(let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (
            !(ch >= 'A' && ch <= 'Z') && // A-Z
            !(ch >= 'a' && ch <= 'z') && // a-z
            !(ch >= '0' && ch <= '9') // 0-9
        ) {
            return "special char is present";
        }
    }
    return "no special char";
}

console.log(special_char("hello")); // no special char
console.log(special_char("hello!")); // special char is present
console.log(special_char("hello123")); // no special char
console.log(special_char("hello@world"));


// Task 7

function prod(num1,num2 = 2){
    let p  = num1* num2;
    return p 
}

console.log(prod(2))

// Task 8
function greet(name,age = 18){
    console.log("hello "+name)
}

greet("linus")


// Task 9
function count(num){
    return num;
}

function higher_order(num,func){
    for(let i = 0;i<num;i++){
        console.log(func(i));
    }
}

higher_order(3,count)

// Task 10
function output(num){
    return "square "+ num
}

function higher_order2(func1,func2,num){
    console.log(func2(func1(num)))
}

higher_order2(square,output,2)
