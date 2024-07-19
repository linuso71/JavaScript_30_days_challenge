// if else statemnts
// task1

let num = -1;

if (num>0){
    console.log("positive");
}
else if(num<0){
    console.log("negative");
}
else{
    console.log("zero");
}

// task2

let age = 18;
if (age>=18){
    console.log("eligible");
}
else{
    console.log("not eligible")
}


// Task 3
let num1 = 2;
let num2 = 4;
let num3 = 3;

if (num1> num2){
    if (num1> num3){
        console.log(num1+" is the greatest among all");
    }
    else{
        console.log(num3+" is the greatest among all")
    }
}
else{
    if (num2> num3){
        console.log(num2+" is the greatest among all");
    }
    else{
        console.log(num3+" is the greatest among all")
    }
}

// Switch Case
// Task 4
function nameofDay(day){
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
    }
}

nameofDay(2)


// Task 5
function gradingSystem(marks){
    switch(true){
        case marks<=100 && marks >90:
            console.log("A");
            break;
        case marks<=90 && marks > 80:
            console.log("B");
            break;
        case marks<=80 && marks > 70:
            console.log("C");
            break;
        case marks<=70 && marks > 60:
            console.log("D");
            break;
        default:
            console.log("F")
            break;
    }
}

gradingSystem(60)






// Task 6
num3 = 3
let result = num3%2 == 0? "even":"odd";
console.log(result)


// Task 7
function leapYear(year){
    if (year%4==0){
        if (year%100==0 && year%400==0){
            console.log("leap year")
        }
        else{
            console.log("leap year")
        }
    }
    else{
        console.log("not leap year")
    }
}

leapYear(2012)







let temp = 2;
console.log(1<temp<5+" this is temp")