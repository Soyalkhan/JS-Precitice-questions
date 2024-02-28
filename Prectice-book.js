//Coding challenge #1: Print numbers from 1 to 10

// for(let i = 1;i <= 100;i++){
//     console.log(i);
// }

//Coding challenge #2: Print the odd numbers less than 100
// for(let i = 1;i<=100; i += 2){
//     console.log(i);
// }

//Coding challenge #3: Print the multiplication table with 7
// for(let i = 1;i <=10; i++){
//     console.log(7 + " x " + i + " = " + i*7);
// }

//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 10; j++) {
//         let t = j * i;
//         console.log(i + " x " + j + " = " + t);
//     }
//     console.log("");

// }

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for(i = 1; i<=10; i++){
// sum += i;

// }
// console.log("Sum of 1 to 10 is : " + sum); // 55

// #6: Calculate 1 to 10 by multiplication
// let num =1;
// for(i = 1; i<=10;i++){
//     console.log(i);
//     // console.log(num*i);
//     num *= i;
// }
// console.log("The multiplication of 1 to 10 is : " + num);

// #7 Calculate the sum of even numbers greater than 10 and less than 30

// let sumEven = 0;
// for(let i = 1;i <= 50;i++){
//     if(i % 2 ===0){
//    console.log(i);
//     if(i>10 && i<30){
//         sumEven += i;
//     }
//     }

// }
// console.log("sum of even numbers greater than 10 and less than 30:",sumEven);

// #8 Create a function that will convert from Celsius to Fahrenheit

// let Celsius = 30;
// function CelsiustoFahrenheit(){
//     let Fahrenheit = Celsius * 9/5 + 32;
//     console.log(Celsius+"°","Celsius", "Equal to :",Fahrenheit+"°","Fahrenheit  ");
// }
// CelsiustoFahrenheit();//86

// #9 Create a function that will convert from Fahrenheit to Celsius
// let Fahrenheit = 86;
// function FahrenheitToCelsius(){
//     let Celsius = (Fahrenheit - 32 ) * 5/9;
//     console.log(Fahrenheit+"°","Fahrenheit" , "Equal to :", Celsius +"°","Celsius");
// }
// FahrenheitToCelsius();//30

// #10 Calculate the sum of numbers in an array of numbers
// let arr = [1,2,3,4,5];
// let sumOfArr =0;
// for (n of arr) {
//     sumOfArr += n;
//     console.log(n);
// }
// console.log(sumOfArr);

// #11 : Calculate the average of the numbers in an array of numbers

// let arr = [4, 4, 5, 6, 6 ]
// let lengthOfarr = arr.length;
// let sum =0;

// for (const s of arr) {
//     sum += s;
// }
// avg = sum/lengthOfarr
// console.log(avg);

// #12 Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers

// function getpositivenumbers(arrOfNum){
//     let positiveNum = [];
//     for(a of arrOfNum){
//         if(a>0){
//         positiveNum.push(a); // putting all postive value into array
//         }
//     }
//     return positiveNum;
// }
// const numbers = [-1,-2,-5,1,2,3,4,5,6]; // assining numnbers
// let positiveNum = getpositivenumbers(numbers); // accessing number and passing numbers into argument
// console.log("Possitive Numbers:",positiveNum); // printing number to log

// #13 Find the maximum number in an array of numbers
// let maxNum = 0;
// let arr = [1, 2, 3, 6474, 55, 67, 54, 78, 98, 913];
// for (a of arr) {
//   if (maxNum < a) {
//     maxNum = a;
//   }
// }
// console.log(maxNum);

// #14 : Print the first 10 Fibonacci numbers without recursion
// let fisrst10Num = 10;
// let n1 = 0, n2 = 1 , nextNum;
// console.log('Fibonacci Series:');
// for(i = 1;i<=10;i++){
//     console.log(n1);
//     nextNum = n1 + n2;
//     n1 = n2;
//     n2 = nextNum

// }

// #15 Create a function that will find the n-th(user input num) Fibonacci number using recursion
// recursion in js // learn first {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..}

// using. loop
// let usernum = Number(prompt("Enter number"));
// // start from 0 + 1 then fisrt num will be 1 then so on
// let n1 = 1;
// let n2 = 1;
// let nextNum;
// for( i =1 ;i<=usernum;i++){

//   nextNum = n1+ n2;
//   n1 = n2;
//   n2 = nextNum;
// }

// console.log(` ${usernum}th Fibonacci: `,n2-n1);

// using. loop (recursion)
// let number = getfibonaNum(12);
// function getfibonaNum(number){
//   if(number === 0){
//     return 0;
//   }
//   if(number=== 1){
//     return 1;
//   }

//   return getfibonaNum( number - 1) + getfibonaNum( number - 2);
// }
// console.log(number);

// #16 Create a function that will return a Boolean specifying if a number is prime
// let num = 1;
// let isPtimeNumber = true;
//   function isPrime(n){
//     if(n === 1){
//           console.log("This is not prime number!");
//     }else if(n > 1){
//       for( i = 2; i < n; i++){
//         if(n % i === 0){
//           isPtimeNumber = false
//           console.log(isPtimeNumber,`${n} This is not prime number!`);
//           break;
//         }else{
//           isPtimeNumber = true;
//           console.log(isPtimeNumber,`${n} This is prime number!`);
//           break;
//         }
//       }
//     }
//   }

//   isPrime(128);

// #17 Calculate the sum of digits of a positive integer number
// let sum = 0;
// const getNum = (n) =>{
//   let x = n.toString()
//   for(j of x){
//     let final = parseInt(j);
//     sum += final;
//     // console.log(final);

//   }
// }
//   getNum(56432);
//   console.log(sum);

// #18 Print the first 100 prime numbers

// function isPrime(number){
//   if(number <= 1) return false; // not false
//   for(let i = 2; i <=Math.sqrt(number);i++){
//     if(number % i === 0) return false; //found a divisor
//   }
//   return true;

// }

// function fisrstNPrime(count){
//   const primes = [];
//   let currNum = 2;
//   while(primes.length < count){
//     if(isPrime(currNum)){
//       primes.push(currNum);
//     }
//     currNum++;
//   }
//   return primes;
// }

// const numberOfPrimes = 100;
// const primeNumbers = fisrstNPrime(numberOfPrimes);
// console.log(`First ${numberOfPrimes} prime numbers: ${primeNumbers.join(",")}`);

// #19 Create a function that will return in an array of the first “p” prime numbers
// // greater than “n”
// function isPrime(num){
//   if(num <= 1) return false;
//   for( let i = 2; i <=Math.sqrt(num);i++){
//     if( num % i === 0) return false;
//   }
//   return true;

// }

// let arr = [];
// function getArr(n1,n2) {
//   let crrNum = 2;
//   while (arr.length < n1){
//     if(isPrime(crrNum)){
//       if(crrNum>=n2){// check condition if number is graeter then provided number or not
//         arr.push(crrNum)
//       }

//     }
//     crrNum++
//   }
//    return arr
// }
// getArr(10,50);
// console.log(arr);

// #20 Rotate an array to the left 1 position

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let temp;
// const roateArrLeftBy1 = () => {
//   console.log("Orignal array:",arr);
//   temp = arr[0];
//   arr.push(temp)
//   arr.shift(0)
//   console.log("Rotated array:",arr);
// }
// roateArrLeftBy1()

// #21 Rotate an array to the right 1 position
// let arr = [11, 22, 34, 44, 52, 64, 74, 88];
// let temp;
// function roateArrRightBy1() {
//   console.log("Orignal Array:", arr);
//   temp = arr.slice(-1).pop();
//   arr.pop(arr.length);
//   arr.unshift(temp);
//   console.log("Rotated Array:", arr);
// }
// roateArrRightBy1();

// #22 reverse array (by reverse() method) // not acceptable in interviews
// let arr = [13, 23, 34, 344, 53, 644, 37, 48]
// let temp;
// console.log("Orignal array:", arr);
// let newarr = arr.reverse()
// console.log("Reversed array:",newarr);

// #22 reverse array (without any predefault use)
// let arr = [13, 23, 34, 344, 53, 644, 37, 48];
// console.log("Orignal Array:",arr);
// let newarr = []
// let temp;
// function reverseArr(){
// for(i = arr.length-1 ;i >=0; i--){
//     newarr.push(arr[i])
// }
// console.log("Reversed Array:",newarr);
// }
// reverseArr()

// #23 Reverse a string
// let newString = '';

// const reverseString = (str) => {

//     for(let i = str.length-1;i>=0;i--){
//         newString += str[i];

//     }
//     return newString;
// }
// console.log(reverseString('soyal khan skhan '))

// #24 Create a function that will merge two arrays and return the result as a new array

// with inbuilt method
// and with manul mathod
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let newArr = arr1.concat(arr2);
// let newarr2 = [];
// function add2Array(a1,a2){
//     for(i = 0; i < arr1.length;i++){
//         // console.log(arr1[i]);
//         newarr2.push(arr1[i])
//     }
//     for(i = 0; i < arr2.length;i++){
//         // console.log(arr2[i]);
//         newarr2.push(arr2[i])

//     }
//     return newarr2
// }

// console.log(add2Array(arr1,arr2));
// console.log("With prebuilt method:",newArr);

// #25 Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array
// or second array but not in both

// in simple way get all element of both array ann return only unique array which is not in 1st arr1 and arr2
// let arr1 =[11,22,44]

// let arr2 = [22,44,33]

// let uniqueArr = [];

// function getUniqueArr(array1,array2){
//     for(numbers of arr1){
//         console.log("Array 1:",numbers);
//         if(!arr2.includes(numbers)){
//             uniqueArr.push(numbers)
//         }
//     }
//     for( numbers of arr2){
//         console.log("Array 2:",numbers);
//         if(!arr1.includes(numbers)){
//             uniqueArr.push(numbers)
//         }

//     }
//     return uniqueArr;
// }

// console.log(getUniqueArr(arr1,arr2));

// #26 Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second

// let UniqueArr = []
// function getUnique(a1,a2){
//     for(number of a1){
//         console.log(number);
//         if(!a2.includes(number)){
//             UniqueArr.push(number)
//         }
//     }
//     return UniqueArr;
// }
// let arr1 = [1,2,3,4,5]
// let arr2 = [3,4,5,6,7]
// console.log(getUnique(arr1,arr2));

// #27 Create a function that will receive an array of numbers as argument and will return a
// new array with distinct elements
//in simple removeing (distinct)dublicates from the array
// let newArr = []
// const getarr = (a1) =>{
//     for(number of a1) {
//         if(!newArr.includes(number)){
//             newArr.push(number)
//         }
//     }
//     return newArr;
// }
// let arr = [1,2,3,4,4,4,5,6,7,7,7,8,9,10]
// getarr(arr)
// console.log(newArr);

// #28 Calculate the sum of first 100 prime numbers and return them in an array

// function getPrimeNumbersum(limit){
//     let arr = [];
//     let sum = 0;
//     let count = 0;
//     let crrNum = 2;

//     while (count < limit) {
//         let isPrime = true;

//         for(let i = 2; i <= Math.sqrt(crrNum);i++){
//             if( crrNum % i === 0){
//                 isPrime = false;
//                 break;// no need to countinue
//             }
//         }
//         if(isPrime){
//             sum += crrNum;
//             count++;
//         }
//         crrNum++
//     }
//     arr.push(sum)
//     return arr;
// }

// const result = getPrimeNumbersum(100)
// console.log("Sum of the first 100 prime numbers:", result);

// #29 Print the distance between the first 100 prime numbers

// Function to check if a number is prime

// function getPrime(num) {
//   let crrNum = 2;
//   let count = 0;
//   let arr = [];
//   while (count < num) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(crrNum); i++) {
//       if (crrNum % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       arr.push(crrNum);
//       count++;
//     }
//     crrNum++;
//   }
//   let length = crrNum-1;
//   console.log(arr);

//   return length-2;
// }
// console.log("Distance from n to 100",getPrime(10));

// ---------------------------setInterval EXP--------------------------------------

//   let offers={
//     offer1:"BUY 2 GET 20% OFF",
//     offer2:"Enjoy Free Shipping",
//     offer3:"New! iPhone 15 Cases"
// };

// let keys = Object.keys(offers);
// let index = 0;

// const getMsg = () => {
//     if (index < keys.length) {
//         let offer = offers[keys[index]];
//         console.log(offer);
//         index++;
//         setTimeout(getMsg, 3000);
//     }
// }

// getMsg();
// ---------------------------setInterval EXP--------------------------------------

// #30 Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.

// function AddtwonumString(num1, num2) {
//   let n1 = BigInt(num1);
//   let n2 = BigInt(num2);

//   let sum = n1 + n2;
//   return sum.toString()
// //   console.log();
// }

// const result = (AddtwonumString(
//     "123456789012345678901234567890",
//     "098765432109876543210987654321"
// ))

// console.log(result);

//Approch 2

// function add(num1,num2){
//     let maxSize = Math.max(num1.length,num2.length);
//     console.log(maxSize);
//     let s1 = num1.padStart(maxSize,"0")
//     let s2 = num2.padStart(maxSize,"0")

//     let carry = 0;
//     let s = "";

//     for(let i = maxSize -1; i >= 0; i--){
//         let digit1 = parseInt(s1[i])
//         let digit2 = parseInt(s2[i])

//         let sum = digit1 + digit2 + carry;
//         let digitSUm = sum % 10;
//         carry = sum >=10 ? 1 : 0

//         s = digitSUm.toString() + s;
//         if( carry >0){
//             s = carry + s
//         }

//         return s
//     }

// }

//   let n1 =   "2909034221912398942349";
//   let n2 =   "2909034221912398942349";

//   let sum = ( n1 + n2)
// console.log(sum);

//
// #31 Create a function that will return the number of words in a text
function getWordCount(s) {
  // Using a regular expression to split the text into words
  // \S matches any non-whitespace character, and the '+' quantifier matches one or more occurrences
  const wordArray = s.match(/\S+/g);
  // Returning the length of the words array, which represents the count of words
  return wordArray ? wordArray.length : 0;
}
let str =
  "The name start from the zero not directly hello im para please count me";
let CountOfWord = getWordCount(str);
// console.log("Numbers words count:", CountOfWord);
