// Task 1
let arr = [1,2,3,4];
console.log(arr);

// Task 2
console.log("first element "+arr[0]);
console.log("last element "+arr[arr.length-1]);

// Task 3
arr.push(2);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift()
console.log(arr);

// Task 6
arr.unshift(3);
console.log(arr);

// Task 7
function double(num){
    return num*num;
}

let newarr = arr.map((num)=>{return num*num;});
console.log(newarr)

// task 8
let evenarr = arr.filter((num)=>{if (num %2 == 0){return num}});
console.log(evenarr);

// Task 9
console.log(arr.reduce((sum,currentvalue)=>sum+currentvalue,0)); // to reduce to one number take function and inital value

// Task 10
for(let i=0 ;i<arr.length;i++){
    console.log(arr[i])
}

// Task 11
arr.forEach(element => {
    console.log(element);
});

// Task 12
arr1 = [[1,2,3],[4,5,6]];
console.log(arr1);

// Task 13
console.log(arr1[1][1])