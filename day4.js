// Loops
// Task 1

for (let i=1;i<=10;i++){
    console.log(i);
}

// // Task 2
for (let i =1;i<=10;i++){
    console.log(5*i);
}

// Task 3
let counter = 10
let sumi = 0
while(counter>0){
    sumi +=counter;
    counter--;
}
console.log(sumi)

// Task 4
counter = 10
while(counter >0){
    console.log(counter)
    counter--;
}

// Task 5
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);

// Task 6
let num = 5;
let temp = 1;
do{
    temp *= num;
    num--;  
}while(num>=1);
console.log(temp)

// Task 7
let pattern = "";
for (let i = 0;i<5;i++){
    for (let j =0;j<i+1;j++){
        // console.log(i + "" + j)
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);


// Task 8
for(let i =1;i<10;i++){
    if (i ==5){
        continue;
    }
    console.log(i);
}


// Task 9
i=1
while(i<=10){
    if (i==7){
        break;
    }
    console.log(i);
    i++;
}
