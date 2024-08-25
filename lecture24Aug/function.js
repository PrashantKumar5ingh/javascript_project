function someMessage(){
    console.log("Hello World!");
}
//someMessage();

function add(num1, num2){
    console.log(num1+num2);
}
// add(2,1);

function swap(num1, num2){
    num1 = num1+num2;
    num2 = num1-num2;
    num1 = num1-num2;
}

// let num1 = 5, num2 = 9;
// swap(num1, num2);

// console.log("Swapped Values: ", num1, num2);

function getMutliply(a, b){
    return a*b;
}
// console.log(getMutliply(9,6))

// console.log(getMutliply("A","D"))

//Storing function in a variable

const multipleFunction = function (a,b){
    return a*b;
}

// console.log(multipleFunction(5,0))


//arrow-function
let exp = (x, y) =>{
    return x**y;
}
console.log(exp(4,3));
