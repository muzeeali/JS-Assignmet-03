// CHAPTER #1

// TASK#1
alert("Welcome To My Website");

// TASK#2
alert("Error! Please enter a valid Password.");

// TASK#3
alert("Welcome to JS Land... \rHappy codding!");

// TASK#4
alert("Welcome to JS Land...");
alert("Prevent this page from creating additional dialogs.");

// TASK#5
console.log("Hello... I can run JS through my web browser's consloe.")


// CHAPTER #2

// TASK #1
var username;

// TASK #2
var myName="Muhammad Zeeshan Ali";

// TASK #3
var message="Hello World";
alert(message);


// TASK #4
var name="Jhon Doe";
var age="15 Years Old";
var course="Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);


// TASK #5
var p="PIZZA";
var q="PIZZ";
var r="PIZ";
var s="PI";
var t="P";
alert(p+"\r"+q+"\r"+r+"\r"+s+"\r"+t)


// TASK #6
var email="muhammadzeeshanali8@gmail.com";
alert("My email address is "+email);


// TASK #7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book);


// TASK #8
document.write("Yah! I can write HTML content through JavaScript.")


// TASK #9
var design="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


// CHAPTER #3
// TASK #1
var age=22;
alert("I am "+age+" years old");


// TASK #2
var number=5;
alert("You have visited this site "+number+" times");


// TASK #3
var birthYear=1998;
document.write("My birth Year is "+birthYear +"<br> Data type of my decleared variable is number")


// TASK #4
var visitorName="John Doe";
var productTitle="T-Shirt";
var quantity="1";
document.write(visitorName.bold()+" ordered "+quantity.bold()+" "+productTitle.bold()+" on XYZ Clothing store");



// CHAPTER #4

// TASK #1

var x,y,z;

// TASK #2

var _ali, $ali, ali, Ali_12ah, ali_123;
var .ali, #ali , 3ali, /Ali, &ali;

// TASK #3

document.write("<h1> Rules for naming JS variables </h1> <br>")
document.write("<br> Variable names can only contain, number , $ and _. For example $my_1stVariable <br>")
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>")
document.write("Variable names are case sensitive. <br>")
document.write("Variable names should not be JS keywird. <br>")



// CHAPTER #5


// TASK #1
var a=3;
var b=5;
var c=a+b;
document.write("Sum of ",a," and ",b," is ",c)

// TASK #2
var a=20;
var b=2;
var c=a-b;
var d=a*b;
var e=a/b;
var f=a%b;
document.write("<br>Difference of ",a," and ",b," is ",c)
document.write("<br>Product of ",a," and ",b," is ",d)
document.write("<br>Dividing  ",a," and ",b," we get ",e)
document.write("<br>Modulus of ",a," and ",b," is ",f)


// TASK #3
var one;
document.write("<br>Value after variable declaration is: ",one)
one=5;
document.write("<br>Initial value: ",one)
one++;
document.write("<br>Value after increment is: ",one)
one += 7;
document.write("<br>Value after addition is: ",one)
one--;
document.write("<br>Value after decrement is: ",one)
one %=3;
document.write("<br>The remainder is : ",one)


// TASK #4

var cost=600;
document.write("<br>Total cost to buy 5 tickets to a movie is ",cost*5,"PKR")


// TASK #5

var table=4;
document.write("<br>Table of ",table)
for(var i=1; i<=10;i++){
    document.write("<br>",table," x ",i," = ",i*table)
};



// TASK #6


var cel=25;
var cToF=(cel*9/5)+32;
document.write("<br>",cel,"<sup>o</sup>C is ",cToF,"<sup>o</sup>F")
var far=70;
var fToC=(far-32)*5/9;
document.write("<br>",far,"<sup>o</sup>F is ",fToC,"<sup>o</sup>C")



// TASK #7

var p1=650;
var q1=3;
var p2= 100;
var q2= 7;
var shippingCharges=100;
document.write("<h1>Shopping Cart </h1> <br>")
document.write("<br>Price of item 1 is ",p1)
document.write("<br>Ordered quantity of item 1 is ",q1)
document.write("<br>Price of item 2 is ",p2)
document.write("<br>Ordered quantity of item 2 is ",q2)
document.write("<br>Shipping charges",shippingCharges)
document.write("<br><br><br>Total cost of your order is ",p1*q1+p2*q2+shippingCharges)





// TASK #8
var total= 980;
var obtain=804;
document.write("<h1>Marks Sheet </h1> <br>")
document.write("<br>Total Marks: ",total)
document.write("<br>Marks Obtained: ",obtain)
document.write("<br>Percentage: ",obtain/total*100,"%")

// TASK #9
var usd = 10;
var sr= 25;
var ex=usd*104.80+sr*28;
document.write("<br>Total currency in PKR : ",ex)

// TASK #10
var no=10;
var cal=(no+5*10)/2
document.write("<br>Result : ",no)


// TASK #11

var cy= 2020;
var by= 1998;
var age1=cy-by;
var age2=cy-by+1;
document.write("<h1>Age Calculator</h1> <br>")
document.write("<br>current year: ",cy)
document.write("<br>birth year: ",by)
document.write("<br>You are either ",age1 ," or ", age2 ," years old")



// TASK #12


var radius= 20;
var pi= 3.142;
var cir= 2*pi*radius;
var area= pi*radius*radius;
document.write("<h1>The Geometrizer</h1> <br>")
document.write("<br>The radius is: ",radius)
document.write("<br>The circumference is:",cir)
document.write("<br>The area is: ",area)



// TASK #13


var fs= "Choclate";
var ca= 22;
var ea=65;
var pd= 2;
var eamount=(ea-ca)*pd*365
document.write("<h1>The Lifetime Supply Calculator</h1> <br>")
document.write("<br>Favorite snack: ",fs)
document.write("<br>Current age:",ca)
document.write("<br>Estimated maximum age: ",ea)
document.write("<br>Amount of snack per day: ",pd)
document.write("<br>You will need ",eamount, " to last you until the ripe old age of: ",ea)



// Chapter 6-9


// Task 1


var number = 10;
document.write("Result: <br />");
document.write("The value of a is: " + number);
document.write("<br /><br /> -----------------------------");

var number = ++number;
document.write("<br /><br />The value of ++a is: " + number);
document.write("<br />Now the value is: " + number);

document.write("<br /><br /><br />The value of a++ is: " + number++);
document.write("<br />Now the value is: " + number++);

var number = --number;
document.write("<br /><br /><br />The value of --a is: " + --number);
document.write("<br />Now the value is: " + number);

document.write("<br /><br /><br />The value of a-- is: " + number--);
document.write("<br />Now the value is: " + number--);


// Task 2

var a = 2;
document.write("a is " + a);
var b = 1;
document.write("<br />b is " + b);
var result = --a - --b + ++b + b--;
document.write("<br />  Result is " + result);


// Task 3


var name = prompt("What is your name?");
document.write("Welcome " + name);


// Task 5

var number = +prompt("Enter number");
for(var i = 1; i<=10; i++){
	if(number){
		document.write(number + " x " + i + " = " + number*i + "<br />");
	}else{
		document.write("5 x " + i + " = " + 5*i + "<br />");
	}
}


// Task 6


var subject1 = prompt("Enter subject 1");
var subject2 = prompt("Enter subject 2");
var subject3 = prompt("Enter subject 3");

var totalMarks = 100;

var obtainedMarks1 = +prompt("Subject 1 obtained marks");
var obtainedMarks2 = +prompt("Subject 2 obtained marks");
var obtainedMarks3 = +prompt("Subject 3 obtained marks");
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

var percentage1 = (obtainedMarks1 / totalMarks) * 100;
var percentage2 = (obtainedMarks2 / totalMarks) * 100;
var percentage3 = (obtainedMarks3 / totalMarks) * 100;
var averagePerventage = ((percentage1 + percentage2 + percentage3) / 300) * 100;

document.write(`
		<table>
			<tr>
				<th>Subject</th>
				<th>Total Marks</th>
				<th>Obtained Marks</th>
				<th>Percentage</th>
			</tr>
			<tr>
				<td>${subject1}</td>
				<td>${totalMarks}</td>
				<td>${obtainedMarks1}</td>
				<td>${percentage1}%</td>
			</tr>
			<tr>
				<td>${subject2}</td>
				<td>${totalMarks}</td>
				<td>${obtainedMarks2}</td>
				<td>${percentage2}%</td>
			</tr>
			<tr>
				<td>${subject3}</td>
				<td>${totalMarks}</td>
				<td>${obtainedMarks3}</td>
				<td>${percentage3}%</td>
			</tr>
			<tr>
				<td></td>
				<td><b>300</b></td>
				<td><b>${totalObtainedMarks}</b></td>
				<td><b>${averagePerventage}%</b></td>
			</tr>
		</table>
	`);


// Chapter 9-11


// Task 1


var city = prompt("Enter city");
if(city == "karachi"){
	document.write("Welcome to city of lights");
}


// Task 2


var gender = prompt("Enter your gender");
if (gender == "male") {
    document.write("Good Morning Sir");
} else if (gender == "female") {
    document.write("Good Morning Ma'am");
} else {
    document.write("Good Morning");
}


// Task 3

var color = prompt("Enter color");
if (color == "red") {
    document.write("Must Stop");
} else if (color == "yellow") {
    document.write("Ready to move");
} else if (color == "green") {
    document.write("Move on");
} else {
    document.write("Wait");
}


// Task 4


var reminingFuel = prompt("Enter your remaining fuel");
if (reminingFuel < 0.25) {
    document.write("Please refill the fuel in your car");
} else {
    document.write("You are good now.");
}


// Task 5


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
Shown

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// NOT Shown

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// Condition 2 and 4 are true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
Shown 

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
True - Shown

if ("car" < "cat") {
    alert("car is smaller than cat");
}
Shown


// Task 6


var marks1 = +prompt("Enter first marks");
var marks2 = +prompt("Enter second marks");
var marks3 = +prompt("Enter thrid marks");

var totalMarks = marks1 + marks2 + marks3;
var percentage = ((marks1 + marks2 + marks3) / 300) * 100;

if (percentage >= 80) {
    document.write("Total Marks: 300");
    document.write("<br />Marks Obtained: " + totalMarks);
    document.write("<br />Percentage: " + percentage);
    document.write("<br />Grade: A+");
    document.write("<br />Remarks: Excellent");
} else if (percentage >= 70) {
    document.write("Total Marks: 300");
    document.write("<br />Marks Obtained: " + totalMarks);
    document.write("<br />Percentage: " + percentage);
    document.write("<br />Grade: A");
    document.write("<br />Remarks: Good");
} else if (percentage >= 60) {
    document.write("Total Marks: 300");
    document.write("<br />Marks Obtained: " + totalMarks);
    document.write("<br />Percentage: " + percentage);
    document.write("<br />Grade: B");
    document.write("<br />Remarks: You need to improve");
} else if (percentage < 60) {
    document.write("Total Marks: 300");
    document.write("<br />Marks Obtained: " + totalMarks);
    document.write("<br />Percentage: " + percentage);
    document.write("<br />Grade: F");
    document.write("<br />Remarks: Sorry");
} else {
    document.write("Pending Result");
}


// Task 7


var number = 9;
var guess = +prompt("Enter number");
if (number == guess) {
    document.write("Bingo! Correct answer ");
} else if (number == (guess + 1)) {
    document.write("Close enough to the correct answer");
} else {
    document.write("Wrong");
}


// Task 8


var number = +prompt("Enter number");
if ((number % 3) == 0) {
    document.write(" The number is divisible by 3 ");
} else {
    document.write(" Not divisible");
}


// Task 9


var number = +prompt("Enter number");
if ((number % 2) == 0) {
    document.write("Even number ");
} else {
    document.write("Odd number");
}


// Task 10


var temp = +prompt("Enter Temperature");
if (temp > 40) {
    document.write("It is too hot outside.");
} else if (temp > 30) {
    document.write("The Weather today is Normal.");
} else if (temp > 20) {
    document.write("Today’s Weather is cool.");
} else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool.");
} else {
    document.write("Cold outside");
}


// Task 11
var num1 = +prompt("Enter number 1");
var num2 = +prompt("Enter number 2");
var operation = prompt("Enter operation");

if (operation === "+") {
    document.write("Sum of " + num1 + " and  " + num2 + " is " + (num1 + num2));
} else if (operation === "-") {
    document.write("Substraction of " + num1 + " and  " + num2 + " is " + (num1 - num2));
} else if (operation === "*") {
    document.write("Multiplication of " + num1 + " and  " + num2 + " is " + (num1 * num2));
} else if (operation === "/") {
    document.write("Division of " + num1 + " and  " + num2 + " is " + (num1 / num2));
} else if (operation === "%") {
    document.write("Modulus of " + num1 + " and  " + num2 + " is " + (num1 % num2));
} else {
    document.write("Syntax error");
}


// chapter 12 -13

// Task - 1


var input = prompt("Enter Character:");
if(!isNaN(+input)){
	document.write("Input is number");
}else{
	if(input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122){
	document.write("Input is Lowercase");
	}else if(input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90){
		document.write("Input is Uppercase");
	}
}


// Task - 2


var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
if(num1 !== num2){
	if(num1 > num2){
		document.write(num1 + " is greater");
	}else if(num2 > num1){
		document.write(num2 + " is greater");
	}
}else if(num1 === num2){
	document.write("Numbers are equal");
}else{
	document.write("Syntax Error");
}



// Task - 3


var number = +prompt("Enter number: ");
if(number > 0){
	document.write(number + " is a positive number");
}else if(number < 0){
	document.write(number + " is a negitive number");
}else if(number === 0){
	document.write(number + " is equal to 0");
}else{
	document.write(number + " is not a number");
}



// Task - 4


var input = prompt("Enter Character");
if(input === "a" || input === "e" || input === "i" || input === "o" || input === "u"){
	document.write(input + " is a vowel.");
}else{
	document.write(input + " is not a vowel.");
}



// Task - 5


var password = "11@@##";
var input = prompt("Enter password");
if(input !== ""){
	if(input === password){
		document.write("Correct! The password you entered matches the original password");
	}else{
		document.write("Incorrect password");
	}
}else{
	document.write("Please enter your password");
}



// Task - 6


var greeting;
var hour = 13;
if (hour < 18) {
	greeting = "Good day";
	alert(greeting);
}
else{
	greeting = "Good evening";
	alert(greeting);
}



// Task - 7


var time = +prompt("Enter time:");
if(time >= 0000 && time < 1200){
	document.write("Good Morning");
} else if(time >= 1200 && time < 1700){
	document.write("Good Afternoon");
}else if(time >= 1700 && time < 2100){
	document.write("Good Evening");
}else if(time >= 2100 && time < 2359){
	document.write("Good Night");
}else{
	document.write("Not a valid time");
}



// Chapter14-16


// Task 1


var studentNames = [];


// Task 2

var studentNames = new Array();


// Task 3


var stringArray = ["apple", "Banana", "Pineapple", "Pear"];


// Task 4


var intArray = [2, 4, 8, 41];


// Task 5


var booleanArray = [true, false];


// Task 6


var mixedArray = ["Ali", "Hamza", 54, 12, true];


// Task 7

var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualifications: <br/><br/>");
for (var i = 0; i < degrees.length; i++) {
    document.write(i + 1 + ")" + degrees[i] + "<br/>");
}


// Task 8


var names = ["John", "Cena", "Micheal"];
var marks = [450, 354, 452];
for (var i = 0; i < names.length; i++) {
    document.write("Score for " + names[i] + " is " + marks[i] + ". Percentage is " + ((marks[i] / 500) * 100) + "%<br />");
}


// Task 9


var colors = ["Orange", "Blue", "Green", "Yellow", "Golden", "Gray"];

var startColorAdd = prompt("Color Name");
colors.unshift(startColorAdd);

var startColorAdd = prompt("Color Name");
colors.push(startColorAdd);

var startColorAddFirst = prompt("Color Name");
var startColorAddSecond = prompt("Color Name");
colors.unshift(startColorAddFirst, startColorAddSecond);

colors.shift();

var colorPosition = +prompt("Color Position");
var colorName = prompt("Color Name");
colors.splice(colorPosition, 0 , colorName);

var colorPosition = +prompt("Color Position");
var colorsLength = prompt("Colors length");
var newArr = colors.splice(colorPosition, colorsLength);


// Task 10


var scores = [320, 230, 480, 120];
document.write("Score of students: "+scores +"<br />");
document.write("Ordered scores of students: "+scores.sort());


// Task 11

var cities = ["Lahore", "Karachi", "Islamabad", "Quetta", "Faisalabad", "Multan"];
document.write("Cities: " + cities + "<br />");
var selectedCities = cities.slice(0, 3);
document.write("Selectd Cities: " + selectedCities);


// Task 12


var array = ["This", "is", "my", "cat"];
document.write("Array: <br />" + array + "<br /><br />");
document.write("String: <br />" + array.join(" "));


// Task 13


var devices = ["keyboard", "mouse", "printer", "monitor"];
for(var i = 0; i < devices.length; i++){
	document.write("Out: <br />");
	document.write(devices[i] + "<br />");
}


// Task 14


var devices = ["keyboard", "mouse", "printer", "monitor"];
var devicesReversed = devices.reverse();
for(var i = 0; i < devicesReversed.length; i++){
	document.write("Out: <br />");
	document.write(devicesReversed[i] + "<br />");
}


// Task 15


var companies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("Select Company <br /><select>");
for(var i = 0; i < companies.length; i++){
	document.write("<option>" + companies[i] + "</option>")
}
document.write("</select>")


// Chapter 17-20

// Task 1


var array = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];


// Task 2

var array = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for(var i = 0; i < array.length; i++){
	document.write(array[i].join(" ") + " <br />");
}


// Task 3


for(var i = 1; i <= 10; i++){
	document.write(i + "<br />");
}


// Task 4


var number = +prompt("Enter number");
var length = +prompt("Enter table length");
for(var i = 1; i <= length; i++){
	document.write(number + " x " + i + " = " + number*i + "<br />");
}


// Task 5


var fruits = ["apple", "banana", "mango", "orange", "strawbery"];
for(var i = 0; i < fruits.length; i++){
	document.write(fruits[i] + "<br />");
}
document.write("<br />");
for(var i = 0; i < fruits.length; i++){
	document.write("Element at Index " + i + " is " + fruits[i] + "<br />");
}


// Task 6


document.write("<b>Counting: </b><br />");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br /><br /><b>Reverse Counting: </b><br />");
for (var i = 10; i > 0; i--) {
    document.write(i + ", ");
}

document.write("<br /><br /><b>Even: </b><br />");
for (var i = 0; i <= 20; i++) {
    if ((i % 2) === 0) {
        document.write(i, ", ");
    }
}

document.write("<br /><br /><b>Odd: </b><br />");
for (var i = 0; i <= 20; i++) {
    if ((i % 2) === 1) {
        document.write(i, ", ");
    }
}

document.write("<br /><br /><b>Series: </b><br />");
for (var i = 1; i <= 20; i++) {
    if ((i % 2) === 0) {
        document.write(i, "k, ");
    }
}





// Task 8


var array = [24, 53, 78, 91, 12];
var max = array[0];
for(var i =0; i < array.length; i++){
	if(array[i] > max){
		max = array[i];
	}
}
document.write("Array items: " + array + "<br />");
document.write("The largest number is "+max);


// Task 9


var array = [24, 53, 78, 91, 12];
var max = array[0];
for(var i =0; i < array.length; i++){
	if(array[i] < max){
		max = array[i];
	}
}
document.write("Array items: " + array + "<br />");
document.write("The smallest number is "+max);



// Task 10


var number = 5;
for (var i = 5; i <= 100; i = i + number) {
    document.write(i + ", ")
}



// CHAPTER # 21-25


// TASK #1


var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.slice(0)+lastname.slice(0);
document.write("Hey! "+fullname+" Welcome to our web...");


// TASK #2

var mobilemodel=prompt("Enter your Mobile model :");
var length=mobilemodel.length;
document.write("<br>My favorite phone is : "+mobilemodel);
document.write("<br>Length of string: "+length);



// TASK #3

var str="Pakistani";
document.write("<br>String: "+str);
document.write("<br>Index of 'n': "+ str.indexOf("n"))


// TASK #4

var str="Hello World";
document.write("<br>String: "+str);
document.write("<br>Index of  'l': "+ str.lastIndexOf("l"))


// TASK #5

var str="Pakistani";
document.write("<br>String: "+str);
document.write("<br>Charcter at index 3: "+ str.slice(3,4))

// TASK #6


var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.concat(lastname);
document.write("<br>Hey! "+fullname+" Welcome to our web...");


// TASK #7


var first='Hyderabad';
var second='Islam';
var replace=first.split('Hyder').join(second);
document.write("<br>City :"+first);
document.write("<br>After replacement: "+replace);


// TASK #8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep='and';
var repn='&'
var newm=message.split(rep).join(repn);
document.write("<br>Old Message: "+message)
document.write("<br>New Message: "+newm)

// TASK #9

var str='472';
var num=Number(str);
document.write("<br>Value: "+str)
document.write("<br>Type: "+typeof(str))
document.write("<br>Value: "+num)
document.write("<br>Type: "+typeof(num))

// TASK #10

var user=prompt("Enter value: ");
document.write("<br>User Value: "+user);
document.write("<br>Upper case: "+ user.toUpperCase())


// TASK #11

var useri=prompt("Enter value: ");
document.write("<br>User Value: "+useri);
var flet=useri.slice(0,1);
document.write("<br>Title case: "+ useri.split(flet).join(flet.toUpperCase()));


// TASK #12

var num = 35.36 ;
var str=num.toString();
var str1=str.replace('.','')
document.write("<br>Number: "+num);
document.write("<br>Result: "+ str1)


// TASK #13

var useri=prompt("Enter value: ");
if(useri.match('@')||useri.match(',')||useri.match('.')||useri.match('!'))
alert("Please enter a valid user name");

// TASK #14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var useri=prompt("Hey! Welcome to Zee bakery... What do you want to order: ");
var usero=useri.toLowerCase();
if(usero=="cake")
{
    document.write("<br>"+ useri+" is Available at index 0 in our Bakery")
}
else if(usero=="apple pie")
{
    document.write("<br>"+ useri+" is Available at index 1 in our Bakery")
}
else if(usero=="cookie")
{
    document.write("<br>"+ useri+" is Available at index 2 in our Bakery")
}else if(usero=="chips")
{
    document.write("<br>"+ useri+" is Available at index 3 in our Bakery")
}else if(usero=="patties")
{
    document.write("<br>"+ useri+" is Available at index 4 in our Bakery")
}
else 
{
    document.write("<br> We are Sorry!!! "+ useri+" is notavailable in our Bakery")
}


// TASK #15


var userp=prompt("Enter your password: ");
var userf=userp.slice(0,1);
var cond=/^[0-9a-zA-Z]+$/;
var cond2=/^[0-9]+$/;
document.write("<br>Entered Password: "+userp);
if(userp.match(cond)){
if(userf.match(cond2)){
    document.write("<br> Password cannot begin with number")
    document.write("<br> Please enter a valid password")
 }

else if(userp.length<6)
{
    document.write("<br> Password cannot be less than 6 characters")
    document.write("<br> Please enter a valid password")
}
else{
    document.write("<br>Your password is updated Successfully!!!")
}
}
else{
    document.write("<br> Special characters are not allowed")
    document.write("<br> Please enter a valid password")
}


// TASK #16


var university = "University of Karachi";
var newuni = university.split("");
for(var i=0;i<newuni.length;i++)
{
    document.write("<br>"+newuni[i])
}


// TASK #17

var useri=prompt("Enter value: ");
var stlast=useri.charAt(useri.length-1)
document.write("<br>User input: "+useri)
document.write("<br>Last charcter of input: "+stlast)


// TASK #18

var para="the quick brown fox jumps over the lazy dog"
document.write("<br>Text: "+para)
var split=para.split(" ")
var count =0;
for(var i=0;i<split.length;i++){
    if(split[i]=='the')
    count++;
}
document.write("<br>There are "+count+" occurance of word 'the'")


// CHAPTER # 26-30  


// TASK #1


var number=+prompt("Enter a positive number");
document.write("<br>Number: "+number);
document.write("<br>Round of value: "+Math.round(number));
document.write("<br>Round of value: "+Math.floor(number));
document.write("<br>Round of value: "+Math.ceil(number));

// TASK #2


var number=+prompt("Enter a negative number");
document.write("<br>Number: "+number);
document.write("<br>Round of value: "+Math.round(number));
document.write("<br>Round of value: "+Math.floor(number));
document.write("<br>Round of value: "+Math.ceil(number));

// TASK #3


var number=+prompt("Enter a number");
var absl= Math.abs(number);
document.write("<br>The absolute value of "+number+" is: "+absl);

// TASK #4


var num= Math.random()*6;
var dice=Math.ceil(num)
document.write("<br>Random dice value:  "+dice);

// TASK #5



var num= Math.random()*2;
var dice=Math.ceil(num)
if(dice===1)
{
    document.write("<br>"+dice);
    document.write("<br>Random coin value: Tails ");
}
else if(dice===2)
{
    document.write("<br>"+dice);
    document.write("<br>Random coin value: Heads ");
}


// TASK #6


var num= Math.random()*100;
var dice=Math.ceil(num)
document.write("<br>Random number between 1 and 100:  "+dice);


// TASK #7


var number=prompt("Enter your weight: ");
var absl= parseFloat(number);
document.write("<br>Your weight is  "+number);


// TASK #8


var number=+prompt("Enter a number between 1 and 10: ");
var num= Math.random()*10;
var roun=Math.ceil(num)
if(number===roun){
    alert("Congratulations!!!")
}
else{
    alert("Try Again!!!")
}



// CHAPTER # 31-34


// TASK #1


document.write(new Date());

// TASK #2

var date= new Date();
var mon= date.getMonth();
var month = ["Januray", "Feburary", "March", "April", "May","June","July","August","September","October","November","December"];
document.write("<br>Current Month: "+month[mon]);

// TASK #3

var date= new Date();
var mon= date.getDay();
var month = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
document.write("<br>Today is: "+month[mon]);



// TASK #4

var date= new Date();
var mon= date.getDay();
if(mon==0||mon==6){
    document.write("<br>It,s is Fun day");
}



// TASK #5

var date= new Date();
var mon= date.getDate();
if(mon<=15){
    document.write("<br>First fifteen days of the month");
}
else {
    document.write("<br>Last days of the month");
}


// TASK #6

var date= new Date();
var mon= date.getTime();
document.write("<br>Current date: "+date);
document.write("<br>Elapsed milliseconds since january 1,1970: "+mon);
document.write("<br>Elapsed minuites since january 1,1970: "+mon/(1000*60));


// TASK #7

var date= new Date();
var mon= date.getHours();
if(mon<=12){
    document.write("<br>Its AM");
}
else {
    document.write("<br>Its PM");
}


// TASK #8


var laterDate=new Date();
laterDate.setMonth(11);
laterDate.setDate(31);
document.write("<br>Later date: "+laterDate);

// TASK #9


var laterDate=new Date();
laterDate.setMonth(3);
laterDate.setDate(24);
var mon= laterDate.getTime();
var currentDate=new Date();
var currentDay=currentDate.getTime();
var newd=currentDay-laterDate;
document.write("<br>"+newd/(1000*60*60*24)+" Days have passed since 1st Ramadan, 2020 ");


// TASK #10


var laterDate=new Date();
laterDate.setFullYear(2015,0,1)
var mon= laterDate.getTime();
var currentDate=new Date();
var currentDay=currentDate.getTime();
var newd=currentDay-laterDate;
document.write("<br>On reference date: "+currentDate)
document.write("<br>"+newd+" Seconds had passed since beginning of 2015 ");


// TASK #11


var laterDate=new Date();
laterDate.setHours(laterDate.getHours()-1)
var currentDate=new Date();
document.write("<br>Current date: "+currentDate)
document.write("<br>1 hour ago, it was: "+laterDate);


// TASK #12

var laterDate=new Date();
laterDate.setFullYear(laterDate.getFullYear()-100)
var currentDate=new Date();
document.write("<br>Current date: "+currentDate)
document.write("<br>100 Years Back, it was: "+laterDate);

// TASK #13

var age=+prompt("Enter your age")
var laterDate=new Date();
laterDate.setFullYear(laterDate.getFullYear()-age)
document.write("<br>Your age is: "+age)
document.write("<br>Your birth year is: "+laterDate.getFullYear());


// TASK #14
var cn="Zeeshan";
var date= new Date();
var mon= date.getMonth();
var month = ["Januray", "Feburary", "March", "April", "May","June","July","August","September","October","November","December"];
var cmonth=month[mon]
var noUnit=210;
var cpUnit=20;
var payDue=noUnit*cpUnit;
var latePay=350;
var payLate=payDue+latePay;
document.write("<br><h1>K-Electric Bill</h1>");
document.write("<br>Customer Name: "+ cn);
document.write("<br>Month: "+cmonth);
document.write("<br>Number of Units: "+noUnit);
document.write("<br>Charges per unit: "+cpUnit+"<br>");
document.write("<br>Net Amount Payable (within Due Date): "+payDue);
document.write("<br>Late payment surcharges: "+latePay);
document.write("<br>Gross Amount Payable (after Due Date): "+payLate);




// CHAPTER # 35-38


// TASK #1

function date(){
    document.write(new Date());
}
date();


// TASK #2

function greet()
{var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.slice(0)+lastname.slice(0);
document.write("<br>Hey! "+fullname+" Welcome to our web...");}
greet();


// TASK #3

function sum( a,b)
{
    return a+b;
}
var firstnum=+prompt("Enter first number");
var lastnum=+prompt("Enter Second number");
var s=sum(firstnum,lastnum);
document.write("<br>Sum = "+s)


// TASK #4

function cal( a,o,b)
{
    if(o=='+')
    return a+b;
   else if(o=='-')
    return a-b;
    else if(o=='*')
    return a*b;
    else if(o=='/')
    return a/b;
    else if(o=='%')
    return a%b;
    
    
}
var firstnum=+prompt("Enter first number");
var op=prompt("Enter operator");
var lastnum=+prompt("Enter Second number");
var s=cal(firstnum,op,lastnum);
document.write(firstnum+" "+op+" "+lastnum+" = "+s)


// TASK #5

function sqr( a)
{
    return a*a;
}
var num=+prompt("Enter a number");
var s=sqr(num);
document.write("<br>Square of "+num+" = "+s)


// TASK #6

function fact( a)
{ 
    var b=1
    for (var i=1;i<=a;i++)
    {
    b=b*i
    }
    return b ;
}
var num=+prompt("Enter a number");
var s=fact(num);
document.write("<br>Factorial of "+num+" = "+s)


// TASK #7

function count( a,b)
{
for(var i=a;i<=b;i++)
    document.write("<br>"+i)   
}
var firstnum=+prompt("Enter start number");
var lastnum=+prompt("Enter end number");
count(firstnum,lastnum);


// TASK #8

function hypt( a,b)
{
var hyp=(a*a)+(b*b)
var fhyp;
document.write("<br>Hypotenuse = "+hyp)
function sqr(){
    fhyp= hyp*hyp
   
}
sqr();
return fhyp 
}
var firstnum=+prompt("Enter base");
var lastnum=+prompt("Enter perpendicular");
var ans=hypt(firstnum,lastnum);
document.write("<br>Hypotenuse Square = "+ans)


// TASK #9

function area(a,b){
    return a*b
}
var width=+prompt("Enter Width ")
var height=+prompt("Enter Height ")
var ans=area(width,height)
document.write("<br>Area by variables = "+ans)
document.write("<br>Area by value = "+area(2,3))


// TASK #10

function palin(arr)
{
 var arrLow=arr.toLowerCase();
var arrSplit=arrLow.split('');
var rev=arrSplit.reverse();
var revv=rev.join('')
if(revv===arrLow)
document.write(arr+" is palindrome")
else{
document.write(arr+" is not palindrome")
}}
var str=prompt("Enter a word")
palin(str)



// TASK #11

function conv(arr)
{
    return arr.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});
}
var str='the quick brown fox'
document.write(conv(str))



// TASK #12

function longestW(arr)
{
var longw=str.split(' ').sort(function(a,b){return b.length-a.length;});
return longw[0]
}
var str='Web Development Tutorial'
document.write(longestW(str))


// TASK #13

function findword(arr,word)
{
arr+='';
word+='';
word = word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
return (arr.match(new RegExp(word,'gi'))||[]).length
}
var str=prompt("Enter Word")
var ocr=prompt("Enter Charcter")

document.write(findword(str,ocr))


// TASK #14

function calcCircumference(radius){
    var pi=3.145
    var circum=2*pi*radius;
    document.write("<br>The circumference is "+circum)
}
function calcArea(radius){
    var pi=3.145
    var area=pi*radius*radius;
    document.write("<br>The area is "+area)
}
var rad=+prompt ("Enter Radius")
calcCircumference(rad);
calcArea(rad)



// Chapter 38-42

// Task #1

function power ( a, b ){
    return Math.pow(a,b);
}
alert(power(3,2))



// Task #2

function leap ( year ){
if (year%400==0 || year%100!=0 && year%4==0){
alert("It's a leap year")}
else 
alert("It's a not leap year")
}
leap(2013)

// Task #3

function findS(a,b,c){
    return ( a + b + c ) / 2
}
function area(a,b,c){

    var s =findS(a,b,c)
  var   area = s*((s-a)*(s-b)*(s-c))
  return area
}
alert(area(1,3,3))


// Task #4


function avg(a,b,c){
    return ((a+b+c)/3)
}
function per(a,b,c){
    return ((a+b+c)*100/300)
}
function final(a,b,c){
    var avge=avg(a,b,c)
    var percentage =per(a,b,c)
    document.write("Average = "+avge)
    document.write("<br>Percentage = "+percentage+"%")
}
final(50,50,60)


// Task #5

function index(ar,a){
    for (var i=0;i<ar.length;i++){
        if (ar[i]==a)
    document.write(i)
    }
}
index("ali","i")


// Task #6


function del(arr){
arr=arr.replace(/[aeiouAEIOU]/g,"")
alert(arr)
}
del("ali ahmed")


// Task #7

// Sir I tried but pair find kesy karna ha samjh nahi I


// Task #8


function meter(km){
    document.write("<br>Distance = "+km*1000+" meters")
}
function feet(km){
    document.write("<br>Distance = "+km*3280.8+" feets")
}
function inches(km){
    document.write("<br>Distance = "+km*39370.079+" inches")
}
function cm(km){
    document.write("<br>Distance = "+km*100000+" cm")
}
meter(2)
feet(1)
inches(10)
cm(2)


// Task #9


function overTime(hour){
    if(hour>40){
        var extraHour=hour-40;
        document.write("Your overtime pay = "+extraHour*12)
    }
}
overTime(42)


// Task #10


function currency(amount){
    var hund=amount/100
   hund= Math.floor(hund);
    var fif=amount%100
    var fifty=fif/50
   fifty= Math.floor(fifty)
    var ten=fif%50
    ten=ten/10
    Math.floor(ten)
    document.write("<br>You will have "+ hund+" hundred notes "+ fifty+" fifty notes "+ten+" ten notes.")
}
currency(560)


// Chapter 43-48

// Task #1

function alertBox(){
    alert("Hey!!!")
}

// Task #2

function show(){
    alert("Thanks for purchasing a phone from us")
}


// Task #3


function remove(){
var row= document.getElementById("del")
row.replaceWith("")
row.innerHTML=row
}


// Task #4


function pic(){
    document.getElementById("image").src="images/download (3).jpg"
}
function pic1(){
    document.getElementById("image").src="images/download.jpg"
}


// Task #5


function inc(){
    document.getElementById("count").stepUp()
}
function dec(){
    document.getElementById("count").stepDown()
}




// Chapter 49-52

// Task #1


function info(){
    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var num=document.getElementById("num")
    document.write ("<br>Name: "+name.value)
    document.write ("<br>Email: "+ email.value)
    document.write ("<br>Number: "+ num.value)
}


// Task #2

function read(){
    var text=document.getElementById("para")
    var para="libero praesentium quidem culpa illum ut doloribus aspernatur provident vel labore, reiciendis, animi consectetur architecto magnam ullam."
text.innerHTML+=para
}


// Task #3

function getName(){
    var name=document.getElementById("name")
   var newName= document.getElementById("getName")
newName.innerHTML=name.value
name.value=""
var num=document.getElementById("num")
var newNum= document.getElementById("getNum")
newNum.innerHTML=num.value
num.value=""
}
function remove(){
    var row= document.getElementById("del")
    row.replaceWith("")
    row.innerHTML=row
    }

// Chapter 53-57

// Task #1

function display(image){
    var newImage=document.getElementById("newImage")
    newImage.src=image.src

}


// Task #2

// Sir is k function nahi ban pa raha


    // Chapter 58-67


// Task #1


var main=document.getElementById("main-content");

console.log(main.childNodes)

var render=document.getElementsByClassName("render")
for(var i=0;i<render.length;i++)
document.write(render[i].innerHTML+"<br>")

document.getElementById("first-name").value="Zeeshan"

document.getElementById("last-name").value="Ali"
document.getElementById("email").value="muhammadzeeshanali8@gmail.com"

// Task #2

var formContent=document.getElementById("form-content").nodeType
console.log(formContent)

var lastName=document.getElementById("lastName")
console.log(lastName.nodeType)
console.log(lastName.childNodes)

lastName.innerHTML="Last Name: Counter"

var mainCont=document.getElementById("main-content");
console.log(mainCont.firstChild)
console.log(mainCont.lastChild)

var lastN=document.getElementById("lastName");
console.log(lastN.previousSibling)
console.log(lastN.nextSibling)

var email=document.getElementById("email");
console.log(email.parentNode)
console.log(email.nodeType)