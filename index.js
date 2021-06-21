/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sum(a, b){
    if (a === b){
        return 3*(a+b)
    } else {
        return a+b
    }
}

// console.log(sum(3, 3))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function check (a, b){
    if (a === 50 || b === 50 && a+b === 50){
        return true
    }else {
        return false
    }
}
// console.log(check(50, 6))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removing(a, b){
     let str = b;
     str = str.slice(0,a) + str.slice(a+1)
     return str
}
// console.log(removing(4, "hello Js"))
/*

4)
 Create a function to find the largest of three given integers.
*/
function largest (a, b, c){
    return Math.max(a, b, c)
}
// console.log(largest(4, 10, 6))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function ranging (a, b){
    if ((a >= 40 && a <= 60)||(b >= 70 && b <= 100)){
        return "one of them is either between 40-60 or 70-100"
    } else{
        return "they are not"
    }
}
// console.log(ranging(42, 6))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copies (a, b){
    let str = a
    return str.repeat(b)
}
// console.log(copies("Hello:", 3))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function city (a){
    let str = a.slice(0, 3);
    if (str === "Los"){
        return "Los Ageles"
    } else if (str === "New"){
        return "New York"
    } else {
        return "blank"
    }
}
// console.log(city("Los Parmas"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function suming (a){
    let sum = 0;
    for (let i=0; i<a.length; i++){
        sum += a[i]
    }
    return sum
}
// console.log(suming([1, 2, 10]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function arrCheck (a){
    if ((a[0]===1 || a[1]===1)||(a[0]===3 || a[1]===3)){
        return "yes it is"
    } else {
        return "No its not"
    }
}
// console.log(arrCheck([2, 2]))
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function arrCheck (a){
    if ((a[0]===1 || a[1]===1)||(a[0]===3 || a[1]===3)){
        return "yes it is"
    } else {
        return "No its not"
    }
}
// console.log(arrCheck([1, 2]))
/*
11)

Create a function to find the longest string from a given array of strings.
*/
const longString = function(arr){
    let str = 0;
    let strName = null;
    for (let i=0; i<arr.length; i++){
        if (arr[i].length > str){
            str = arr[i].length
            strName = arr[i]
        }
    }
    return strName;
}
// console.log(longString(["yo", "niyo", "Yon"]))
/*
12)

Create a function to find the types of a given angle.
*/
const angle = function(ab){
   if (ab >= 0 && ab < 90){
       return "acute angle"
   } else if (ab === 90){
       return "perpendicular angle"
   } else if (ab > 90 && ab < 180){
    return "obtuse aangle"
   } else if (ab === 180){
    return "stright line"
   } else if (ab > 180 && ab <= 360){
    return "reflex angle"
   } 
}
// console.log(angle(182))
/*

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers
*/
const bigIndex = function(arr){
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]>count){
            count = arr[i]
        }
    }
    return arr.indexOf(count)
}
// console.log(bigIndex([2, 15, 9]))
/*
14)

Create a function to get the largest even number from an array of integers.
*/
const bigEvenNum = function(arr){
    let even = [];
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2 === 0){
            even.push(arr[i])
        }
    }
    for (let i=0; i<even.length; i++){
        if (even[i]>count){
            count = even[i]
        }
    }
    return count
}
// console.log(bigEvenNum([2, 15, 9, 14, 41, 22, 102, 606]))
/*
15)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const positiveOrNegative = function(a, b){
   if (a>0 && b<0){
       return "one +ve and the other is -ve"
   } else if (a<0 && b>0){
    return "one +ve and the other is -ve"
   } else {
       return "they both must be +ve or -ve at the same time"
   }
}
// console.log(positiveOrNegative(-4, 5))
/*
16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const firstLowerCase = function(str){
    return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase()
 }
//  console.log(firstLowerCase("yonatan"))
 /*
17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const sumInRange = function(a, b){
    let sum = a+b;
    if (sum>50 && sum<80){
        return 65
    } else {
        return 80
    }
 }
//  console.log(sumInRange(10, 60))
 /*
18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const numToStr = function(a){
    let factors = []
    for (let i=0; i<a; i++){
        if (a%i === 0){
            factors.push(i)
        }
    }
     if (factors.includes(3) && factors.includes(5)){
        return "DiegoRiccardo"
    }
     else if (factors.includes(3)){
        return "Diego"
    } else if (factors.includes(5)){
        return "Riccardo"
    } else if (factors.includes(7)){
        return "Stefano"
    }  else {
        return a
    }
 }
 console.log(numToStr(30))
 /*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

