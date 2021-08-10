// 1. Write 3 variables (Number, String, boolean)

var number = 27; // Number variable
var name = "Sohel Rana"; // String variable
var x = true; // Boolean variable

// 2. Write 2 variables (let, const)

let price = 250; // let variable
const pi = 3.14; // const variable

// 3. Simple math operations in 2 variables (+, -, *, /, %)

var x = 35;
var y = 7;
    // Addition (+)
console.log(x,"+", y, "=", x + y);
    // Subtraction (-)
console.log(x,"-", y, "=", x - y);
    // Multiplication (* or x)
console.log(x,"*", y, "=", x * y);
    // Division ( : or /)
console.log(x,"/", y, "=", x / y);
    // Modulus (%)
console.log(x,"%", y, "=", x % y);

// 4. Comparison in 2 variables

let phonePrice = 23999;
let laptopPrice = 23654;

    // ==	equal to
console.log(phonePrice, "==", laptopPrice, "=", phonePrice == laptopPrice);
    // !=	not equal
console.log(phonePrice, "!=", laptopPrice, "=", phonePrice != laptopPrice);
    // !==	not equal value or not equal type
console.log(phonePrice, "!==", laptopPrice, "=", phonePrice !== laptopPrice);
    // >	greater than
console.log(phonePrice, ">", laptopPrice, "=", phonePrice > laptopPrice);
    // <	less than
console.log(phonePrice, "<", laptopPrice, "=", phonePrice < laptopPrice);
    // >=	greater than or equal to
console.log(phonePrice, ">=", laptopPrice, "=", phonePrice >= laptopPrice);
    // <= less than or equal to
console.log(phonePrice, "<=", laptopPrice, "=", phonePrice <= laptopPrice);

// 5. Two conditions case-1: Fullfill both condition. case-2: Fullfill at last one condition

    var a = 25;
    var b = 38;
    var c = 25;
    console.log(a, "&&", b, "=", a > b && b > c);
    console.log(a, "||", b, "=", a < b || c < a);

// 6. if else conditions

let job = true;
let car = true;
let home = false;

if (job && car) {
    console.log("Fullfill both condition!!! you can marriage!!!")
} 

if(job || home){
    console.log("Fullfill at last one condition!!! you can't marriage!!!")
}

// 7. While loop to display 7 to 19 numbers.Only display odd numbers including 7 to 19.
let firstNumber = 7;
const lastNumber = 19;

while (firstNumber <= lastNumber) {
    let result = firstNumber;
    console.log("The number is", result);
    
    /*
        if (firstNumber % 2 != 0) {
            console.log( firstNumber, " is odd number",);
            
        }
    */
    firstNumber++;
}
let startNumber = 7;
const endNumber = 19;
while (startNumber <= endNumber) {
    if (startNumber % 2 != 0) {
        console.log( startNumber, " is odd number");
        
    }
    startNumber++;
    
}

// 8. Declare an array number of elements. Update or change 4th postition element. add or removed elements. check whether specific value exists in the array.

    
let arrayNumber = [12,54,56,67,8978,765,85,856,63,75,74,99]; // Declare an array
console.log("Array number", arrayNumber);

let numberOfElement = arrayNumber.length; // array number of elements
console.log("Array number of elements", numberOfElement);

let arrayFourethPositionUpdate = arrayNumber[4] = 999; // Update or change 4th postition element.
console.log("Update or change 4th postition element", arrayFourethPositionUpdate); 

arrayNumber.pop() // Removed elements
console.log("Removed elements", arrayNumber); 

arrayNumber.push(33999); //add elements
console.log("add array elements", arrayNumber);

let checkValue = 75;
if (arrayNumber.indexOf(checkValue) !== -1) { //check whether specific value exists in the array.
    console.log(checkValue,"Value is exists!")
} else{
    console.log(checkValue, "Value does not exists!")
}

// 9. use any for loop to display every elements of an array

let elementOfArray = [121, 3234, 4454, 7676, 8978, 534, 3223, 545];
for (let i = 0; i < elementOfArray.length; i++) {
    const element = elementOfArray[i];
    console.log("Elements of an array index",i, "is", element)
    
}


// 10. you have an array of numbers. display only the numbers bigger than 80

let arrayOfNumbers = [23, 43, 353,34, 54, 66, 76, 878, 787, 77, 99, 84];

for (let i = 0; i < arrayOfNumbers.length; i++) {
    const element = arrayOfNumbers[i];
    if ( element > 80) {
        console.log( element, "numbers is bigger than 80");
    }
    
}

// 11. write a function that takes three numbers and returns the multiplication of the three numbers

function multiplicationNumbers(num1, num2, num3){
    let multipliNumber = num1 * num2 * num3;
    return multipliNumber;
}
let numberOne = 2;
let numberTwo = 5;
let numberThree = 3;
let multipliNumberResult = multiplicationNumbers(numberOne, numberTwo, numberThree);
console.log("The multiplication of number", numberOne,"*", numberTwo, "*", numberThree ,"is", multipliNumberResult);

// 12. declare an object and change any property of that object.

let student = [
    {name: "Sohel", age: 25, City: "Dhaka"},
    {name: "Rana", age: 21, City: "Uttara"},
]
console.log("Main object", student)
student[0].name = "Max";
console.log("change property of object", student)
