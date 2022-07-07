//  console.log('hello maqsood welcome');
//  alert('chal na kya ha ');
 //storing strings in varibles in js
//  var b = 'started leaning javascript';
//  console.log(b);
//storing numbers in variables in js
// var number = 6005392499;
// console.log(number);
//changing the html code by accessing it by id 
//document.getElementById("sometext").innerHTML ="hey there";
//getting input from user
// var age = prompt("what is your age brother");
// document.getElementById("getage").innerHTML =age ;
// doing some operations with numberes
// console.log(5*10);
// console.log(50/5);
var num =10;
// num+=1;
//increment by 1
num++;
//decrement by 1
//console.log(num);
//calculating reminder of number
//console.log(num%4);
//divide  number by let's say 4
//console.log(num/4);
//increment or decrement number by any number
// num+=10;
// console.log(num);
// num-=10;
// console.log(num);
/*Functions in js
  There are two steps for making a function
  1.Defining/creating a function.
  2.Calling a function
*/
//Defining a function
function fun()
{
    console.log("this is a function");
}
fun();
/*Let's make a function that takes your name as input and 
saya hello to you followed by your name 
For Example 
Input : Maqsood Ahmad 
Output: Hello Maqsood Ahmad 
*/
/*function greetings(yOUR_NAME)//FUNCTION DEFINITION
{
    var msg = "Hello" + ' ' + yOUR_NAME;//String Concatenation
    console.log(msg);
}
var name =prompt("what's your name ?");
greetings(name); //FUNTCTION CALLING*/
//How do we add two numbers in a function
function sum(num1,num2)
{
    result = num1 + num2;
    console.log(result);
}
sum(12,16);
//Loops in javascript
//1.while loop
/*var num =0;
while(num<100)
{
    num+=10;
    console.log(num);
}*/
//2.For loop
/*
for(let num = 1;num<=100;num++)
{
    console.log(num);
}
*/
// Data Types in javascript
// let age= 18;//number
// let name = 'maqsood ahmadt tali';//strig
// let full_name ={first:'maqsood',middle: 'ahmad',last:'tali'};//object
// let truth = false;//boolean
// let gorceries =['apple','banana','oranges'];//array
// let random;//undefined
// let nothing;//value null
// //Strings in javascript (common method)
// let fruit = 'banana';
// let morefruits ='banana\napple\noranges';  /// new line
// console.log(morefruits);
// console.log(fruit.length); // finding length of a string
// console.log(fruit.indexOf('nan'));// finding index of a string
// console.log(fruit.slice(1,6));// printing word using range
// console.log(fruit.replace('ban',123));// replacing ban with 123
// console.log(fruit.toUpperCase(fruit)); // changing to uppercase
// console.log(fruit.toLowerCase(fruit));// changing to lowercase
// console.log(fruit.charAt(4));// finding character at specific locatoion
// console.log(fruit.split(','));//split by comma 
// console.log(fruit.split(''));  //split by character 

// //Greetings for 100 lines of code in javascript
//  //Arrays
//  let fruits =['apple','banana','orange','pineapple'];
//  fruits= new Array('banana','apple','orange','pineapple');//creating an array
//  console.log(fruits[2]);//access value at index 2nd
//  fruits[0]='pear';// changing the value at index 0 to pear
//  console.log(fruits);
//  for(let i = 0 ;i<fruits.length;i++)
//  {
//      console.log(fruits[i]);
//  }
 
//  //Array Common Methods
// console.log('to string',fruits.toString()); //displays to string and the array srting
// console.log(fruits.join('*'));//joins each entery of an array with *
// console.log(fruits.pop(),fruits);//pop:deletes tha last element of an array 
// console.log(fruits.push('Blackberries'),fruits);//push:adds/appends an element to the array
// console.log(fruits.length);//printing length of fruits array
// fruits[4]='new_fruit';//adds the element at location specified 
// console.log(fruits);
// fruits.shift(); //removes first element from a array
// console.log(fruits);
// fruits.unshift('kiwi');// adds element as first element to a array 
// console.log(fruits);
// // creating another array for storing vegetables
// let vegetables = ['asparagus','tomato','broccoli'];
// let groceries = fruits.concat(vegetables);//concatenanting two arrays fruits and vegetables
// console.log(groceries);
// console.log(groceries.slice(1,4));//slices the elements of an array starting from 1 upto 4
// console.log(groceries.slice[1,4]);//slices the elements of an array starting from 1 upto 4
// console.log(groceries.reverse());//reverse all the elements of a list
// //sorting an elements in an array
// console.log(groceries.sort());//UpperCase letters has more priority
// //creating array of numbers
// let sortNumbers = [9,8,5,6,8,1,3,2,45,12,36,38,34];
// //sorting numbers 
// console.log(sortNumbers.sort(function(a,b){return (a-b)}));//sorting in ascending order
// console.log(sortNumbers.sort(function(a,b){return(b-a)})); //sorting in descending order
// let emptyArray= new Array();//creating an array for putting elements in an array
// for(let num =0;num<10;num++)
// {
//     //let name = prompt('Enter your name ');//taking names from user as an input 
//     emptyArray.push(num);//pushing names into an array
// }
// console.log(emptyArray);
// //objects in javascript
// //called dictionaries in python
// let student = // object student
// {  
//     first:'maqsood', // attribute first name
//     middle:'ahmad', // attribute middle name
//     last:'tali',   // attrbute last name
//     age:25,       //  attribut age 
//     height:170,  //   attribute height
//     studentInfo:function()
//     {
//         return this.first+'\n'+this.middle+'\n'+this.last+'\n'+this.age;
//     }
// }   
// console.log(student.first);//accessing first name of student 
// console.log(student.middle);//accessing middle name of student
// console.log(student.last);//accessing last name of student
// console.log(student.age); //accessing age of student
// console.log(student.height); //accessing height of student
// student.first='not maqsood'; // change value
// console.log(student.first);
// student.first='maqsood';//change value back
// console.log(student.first);
// student.age++;
// console.log(student.age); 
// console.log(student.studentInfo());
// Conditionals ,Control flows(if else)
// 18-35 are my target demographic
//|| Logical OR
//&& Logical AND
/*let age = prompt('what is your age');
if((age>=18)&&(age<=35))
{
    status='target audience';
    console.log(status);
}
else
{
    status='not my audience';
    console.log(status);
}*/
// switch statements
// Difference between weekday and weekend
// Day 0-->Sunday
// Day 1-->Monday
// Day 4-->Tuesday--> weekday
// Day 3-->Wednesday
// Day 4-->Thursdary
// Day 5-->Friday-->weekend
// Day 6-->Saturday -->weekend
let day = prompt('Enter the day no');
switch(day)
{
    case '0':
    {
        text ='weekend';
        break;
    }
    case '1':
    {
        text='weekday';
        break;
    }
    case '2':
    {
        text = 'weekday';
        break;
    }
    case '3':
    {
        text = 'weekday';
        break;
    }
    case '4':
    {
        text = 'weekday';
        break;
    }
    case '5':
    {
        text = 'weekend';
        break;
    }
    case '6':
    {
        text = 'weekend';
        break;
    }
    default :
    {
        text ='invalid option';
    }
}
console.log(text);
