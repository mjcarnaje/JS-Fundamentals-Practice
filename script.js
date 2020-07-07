//console.log("I'll become a software engineer.");

//*VARIABLES AND DATA TYPES
/*
     
    --Number;
    --String;
    --Boolean;
    --Undefined;
    --Null;

    var firstName = 'Michael James';
    var lastName = 'Carnaje';
    var age = 17;

    console.log(firstName + ' ' + lastName);

    var fullAge = true;
    console.log(fullAge);

    var job;
    console.log(job);

    job = 'Student';
    console.log(job);

    var section = 'Stem B';
    console.log(section); 
    
*/

//*VARIABLE MUTATION AND TYPE COERCION

/* 

    var firstName = 'Michael James';
    var lastName = 'Carnaje';
    var age = 17;

    console.log(firstName + ' ' + lastName + ' is ' + age + ' years old');

    var job, isHandsome;
    job = 'student';
    isHandsome = false;

    console.log(
        firstName +
            ' ' +
            lastName +
            ' is a ' +
            age +
            ' year old ' +
            job +
            '. Is he handsome? ' +
            isHandsome
    ); 
    
*/

//!VARIABLE MUTATION
/* 

    age = 'seventeen';
    job = 'free-lancer';

    alert(
        firstName +
            ' ' +
            lastName +
            ' is a ' +
            age +
            ' year old ' +
            job +
            '. Is he handsome? ' +
            isHandsome
    );

    var middleName = prompt('What is his middle Name?');
    console.log(firstName + ' ' + middleName + ' ' + lastName); 
    
 */

//*BASIC OPERATORS\
/*

var year, yearMj, yearFriend;
year = 2020;
ageMj = 17;
ageFriend = 18; 

*/

//!MATH OPERATORS
/* 

yearMj = year - 17;
yearFriend = year - 18;

console.log(yearFriend);
console.log(yearMj);
console.log(year + 2);
console.log(year / 2);
console.log(year * 2); 

*/

//!LOGICAL OPERATORS
/* 

var mjOlder = ageMj > ageFriend;
console.log(mjOlder); 

*/

//!TYPE OF OPERATOR
/* 

console.log(typeof mjOlder);
console.log(typeof ageFriend);
console.log(typeof 'Michael James Carnaje');
console.log(typeof x);

*/

//*OPERATORS PRECEDENCE
/* 

var year, yearMj, fullAge;
year = 2020;
yearMj = 2003;
fullAge = 17; 

*/

//!MULTIPLE OPERATORS
/* 

var isFullAge = year - yearMj >= isFullAge;
console.log(isFullAge); 

*/
//!GROUPINGS
/* 

var ageMj = year - yearMj;
var ageFriend = 19;
var average = (ageMj + ageFriend) / 2;

console.log('The average of their age is ' + average); 

*/
//!MULTIPLE ASSIGNMENTS
/*

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y, x + y); 

*/
//!MORE OPERATORS
/*

x = x * 2;
y *= 2;
console.log(x, y);

y = y + 1;
console.log(y);
y += 1;
console.log(y);
y++;
console.log(y);
 
*/

//? CODING CHALLENGE 2

/* 

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀 

*/

// TODO: CODING CHALLENGE 2 - MY ANSWER
/*

var janghoonHeight = 2.06;
var janghoonWeight = 116;
var janghoonBMI = janghoonWeight / (janghoonHeight * janghoonHeight);

var soogeunWeight = 62;
var soogeunHeight = 1.65;
var soogeunBMI = soogeunWeight / (soogeunHeight * soogeunHeight);

console.log(soogeunBMI, janghoonBMI);

var janghoonHigherBMI = janghoonHeight > soogeunBMI;
var soogeunHigherBMI = janghoonHeight < soogeunBMI;

console.log(
    "Is Jang Hoon's BMI is higher than Soo Geun's? " + janghoonHigherBMI
);
console.log(
    "Is Soo Geun's BMI is higher than Jang Hoon's? " + soogeunHigherBMI
); 

*/

// TODO: CODING CHALLENGE 1 - SOLUTION;
/* 

var massJanghoon = 116; // kg
var heightJanghoon = 2.06; // meters

var massSoogeun = 62;
var heightSoogeun = 1.65;

var BMIJanghoon = massJanghoon / (heightJanghoon * heightJanghoon);
var BMISoogeun = massSoogeun / (heightSoogeun * heightSoogeun);
console.log(BMIJanghoon, BMISoogeun);

var JanghoonHigherBMI = BMIJanghoon > BMISoogeun;
console.log("Is Janghoon's BMI higher than Soogeun's? " + JanghoonHigherBMI); 

*/

//*IF / ELSE STATEMENTS
/* 

var firstName = 'Jang Hoon';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
}
if (civilStatus === 'divorce') {
    console.log(firstName + ' will hopefully remarry soon :)');
} else {
    console.log(firstName + ' will hopefully found his partner :)');
} 

*/

//! BOLEAN WAY
/* 

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' will hopefully remarry soon ^_^');
} else {
    console.log(firstName + ' is married.');
} 

*/

//TODO: CHALLENGE NUMBER 1 ~ IF AND ELSE STATEMENT
/* 

var massJanghoon = 116; // kg
var heightJanghoon = 2.06; // meters

var massSoogeun = 62;
var heightSoogeun = 1.65;

var BMIJanghoon = massJanghoon / (heightJanghoon * heightJanghoon);
var BMISoogeun = massSoogeun / (heightSoogeun * heightSoogeun);

if (BMIJanghoon > BMISoogeun) {
    console.log("Janghoon's BMI is higher that Lee Soo Geun");
} else {
    c onsole.log("Janghoon's BMI is lower that Lee Soo Geun");
} 

*/
//*BOLEAN LOGIC

/* 

var firstName = 'MJ';
var lastName = 'Carnaje';
var age = 17;

if (age < 13) {
    console.log(firstName + ' ' + lastName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    //BETWEEN 13 and 20
    console.log(firstName + ' ' + lastName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    //BETWEEN 20 and 30
    console.log(firstName + ' ' + lastName + ' is a young man.');
} else {
    console.log(firstName + ' ' + lastName + ' is a man.');
} 

*/

//*THE TERNARY OPERATOR AND SWITCH STATEMENTS
/* 

var firstName = 'Aiyu';
var age = 27;

*/
//!TERNARY OPERATOR;
/* 

age > 18
    ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.'); 

*/
//Alternative
/*     
        if (age > 18) {
            console.log(firstName + ' drinks beer.')
        } else {
            console.log(firstName + ' drinks juice.');
        } 
*/

/* 

var drinks = age >= 18 ? 'beer' : 'juice';
console.log(drinks); 

*/
//Alternative
/* 

        if (age > 18) {
            var drinks = beer;
        } else {
            var drinks = juice;
        } 

*/
//! SWITCH STATEMENTS;
/* 

var job = 'idol';
switch (job) {
    case 'teacher':
    case 'intructor':
        console.log(firstName + 'teaches students.');
        break;
    case 'driver':
        console.log(firstName + ' drives a car.');
        break;
    case 'idol':
        console.log(firstName + ' loves by many people.');
        break;
    default:
        console.log(firstName + " doesn't have a work.");
} 

*/

//! WITH RANGES - from bolean logic examples;

/* 

var firstName = 'MJ';
var lastName = 'Carnaje';
var age = 17;

switch (true) {
    case age < 13:
        console.log(firstName + ' ' + lastName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' ' + lastName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' ' + lastName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' ' + lastName + ' is a man.');
} 

*/
//Alternative
/*  

        if (age < 13) {
            console.log(firstName + ' ' + lastName + ' is a boy.');
        } 
        else if (age >= 13 && age < 20) {
            console.log(firstName + ' ' + lastName + ' is a teenager.');
        } 
        else if (age >= 20 && age < 30) {
            console.log(firstName + ' ' + lastName + ' is a young man.');
        } else {
            console.log(firstName + ' ' + lastName + ' is a man.');
        } 

*/

//*TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS;
// falsy values: undefined, null, 0, '', Nan
// truthy values: all considered true; not falsy;

/*

var height = 0;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
} 

*/

//? CODING CHALLENGE 2
/* 

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
    3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
    4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
    5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
    GOOD LUCK 😀 

*/
// TODO: CODING CHALLENGE 1 - MY ANSWER
/* 

var firstscoreJohn, secondscoreJohn, thirdscoreJohn;
    firstscoreJohn = 89;
    secondscoreJohn = 120;
    thirdscoreJohn = 103;

var firstscoreMike, secondscoreMike, thirdscoreMike;
    firstscoreMike = 116;
    secondscoreMike = 94;
    thirdscoreMike = 123;

var firstscoreMary, secondscoreMary, thirdscoreMary;
    firstscoreMary = 97;
    secondscoreMary = 134;
    thirdscoreMary = 105;

var averageMike = (firstscoreMike + secondscoreMike + thirdscoreMike) / 3;
var averageMary = (firstscoreMary + secondscoreMary + thirdscoreMary) / 3;
var averageJohn = (firstscoreJohn + secondscoreJohn + thirdscoreJohn) / 3;

if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log(
        "John's team has the higher average score than Mike's and Mary's team with the score of " +
            averageJohn +
            '.'
    );
} else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log(
        "Mike's team has the higher average score than John's and Mary's team with the score of " +
            averageMike +
            '.'
    );
} else if (averageMary > averageJohn && averageMary > averageMike) {
    console.log(
        "Mike's team has the higher average score than John's and Mary's team with the score of " +
            averageMike +
            '.'
    );
} else {
    console.log('All the 3 teams tied.');
} 

*/
// TODO: CODING CHALLENGE 1 - SOLUTION;

/* 

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (91 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log("John's team wins with " + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreJohn) {
    console.log("Mike's team wins with " + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log("Mary's team wins with " + scoreMary + ' points');
} else {
    console.log('There is a draw.');
}

*/

//*FUNCTIONS

/* 

function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990); //! we need to store the return (function name);
var ageMike = calculateAge(1991);
var ageMJ = calculateAge(2003);
console.log(ageJohn, ageMike, ageMJ); 

*/

//todo first: we call the function;
//todo second: name of the function;
//todo third: argument that we want to pass into the function; && parameter;
//todo fourth: function block;

/* 

function yearsUntilRetirement(year, firstName) { //! function can also call another funtion;
    var age = calculateAge(year); //they don't have to return something;
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
} 

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1995, 'Jane');
yearsUntilRetirement(1989, 'Mike');

*/
//? we are not saving the result anywhere because there is return here in this function that needs to be stored;
//! they don't also have to return something;

//todo Excersice
/* 

function convert(minutes) {
    return minutes * 60;
}
var converted = convert(1);
console.log(converted); 

*/

//*FUNCTIONS STATEMENTS AND EXPRESSIONS;

//! FUNTION DECLARATION / STATEMENTS
// A declared function is “saved for later use”, and will be executed later, when it is invoked (called).
// Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.
/* 

function whatDoYouDo(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'designer':
            return firstName + ' designs the webpage';
        case 'driver':
            return firstName + ' drives a van into the unknown.';
        default:
            return firstName + ' tanginamo.';
    }
}
console.log(whatDoYouDo('teacher', 'Michael James'));

*/

//! FUNTION EXPRESSION
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:
// After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

/* 

var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'designer':
            return firstName + ' designs the webpage';
        case 'driver':
            return firstName + ' drives a van into the unknown.';
        default:
            return firstName + ' tanginamo.';
    }
}; 

*/
/* 

var mj = whatDoYouDo('developer', 'MJ');
console.log(mj);
//or
console.log(whatDoYouDo('teacher', 'Michael James'));
console.log(whatDoYouDo('designer', 'Michael James'));
console.log(whatDoYouDo('driver', 'Michael James'));

*/

//*ARRAYS
//there are many types of array
// zero-based

//! Initialize new array;
/* 

var names = ['Kang Hodong', 'Lee See-min', 'Kim Hee-Cheul']; //!most used
var years = new Array(1970, 1975, 1983);

console.log(names[0]);
console.log(names.length); 

*/
//! Mutate array data
/* 

names[1] = 'Lee Soo-Geun';
names[names.length] = 'Kim Young-Cheul'; // Position number 3
console.log(names[1]); 

*/
//! Different data types;

/* 

var mj = ['Michael James', 'Carnaje', 2003, 'aspiring software developer'];

mj.push('blue'); //it will add to the last current array;
mj.unshift('Mr.'); // it will add to the first current array;
mj.pop(); // it will remove the last array;
mj.shift(); // it will remove the first array;
console.log(mj);

console.log(mj.indexOf(2003)); //it will tell you what position the array is, and if it is undefined it print -1.

var isDesigner = //!
    mj.indexOf('designer') === -1 ? 'Mj is NOT a designer' : 'Mj is a designer';
console.log(isDesigner); 

*/
//? CODING CHALLENGE 3
/* 

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀

*/
// TODO: CODING CHALLENGE 2 - MY ANSWER
/* 
function tipCalculatorBill(bill) {
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill > 50 && bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}
var bill = [124, 48, 268];

var tips = [
    tipCalculatorBill(bill[0]),
    tipCalculatorBill(bill[1]),
    tipCalculatorBill(bill[2]),
];

var finalValue = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];

console.log(tips);
console.log(finalValue);
 */
// TODO: CODING CHALLENGE 2 - SOLUTION
/* 

function tipCalculatorBill(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}
var bill = [124, 48, 268];

var tips = [
    tipCalculatorBill(bill[0]),
    tipCalculatorBill(bill[1]),
    tipCalculatorBill(bill[2]),
];

var finalValue = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];

console.log(tips);
console.log(finalValue);
*/

//*OBJECT AND PROPERTIES
/* 

var mj = {
    firstName: 'Michael',
    lastName: 'Carnaje',
    birthYear: 2003,
    family: ['Mark', 'Bob', 'Jane'],
    job: 'none',
    isSingle: true,
};
console.log(mj.job); //!
console.log(mj['lastName']); //!
var x = 'birthYear';
console.log(mj[x]); //!

*/
//!MUTATED
/* 

mj.job = 'sofware enginner;';
mj['isSingle'] = false;
console.log(mj);


var jane = new Object();  //ANOTHER WAY - NEW OBJECT SYNTAX
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/
//*OBJECT AND METHODS
//methods attached to object
//only objects have method
//arrays are actually object
/* 
var mj = {
    firstName: 'Michael',
    lastName: 'Carnaje',
    birthYear: 2003,
    family: ['Mark', 'Bob', 'Jane'],
    job: 'none',
    isSingle: true,
    calcAge: function (birthYear) {
        return 2020 - birthYear;
    },
};

console.log(mj.calcAge(2003));

 */ //!!M E T H O D - T H I S!

/* 

var mj = {
    firstName: 'Michael',
    lastName: 'Carnaje',
    birthYear: 2003,
    family: ['Mark', 'Bob', 'Jane'],
    job: 'none',
    isSingle: true,
    calcAge: function () {
        //return 2020 - this.birthYear;
        this.age = 2020 - this.birthYear; //!EASIEST WAY TO STORE THE RESULTS OF THE FUNCTION
    },
};

mj.calcAge(); //CALL THE FUNCTION
console.log(mj);

*/
/* 
var age = mj.calcAge(); //!STORE THE FUNCTION FIRST METHOS
mj.age = mj.calcAge(); 

mj.age = mj.calcAge(); //!EASIER WAY O STORE THE RESULTS OF THE FUNCTION

*/
//? CODING CHALLENGE 4
/*

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀

*/

// TODO: CODING CHALLENGE 4 - MY ANSWER
/* 
var seo = {
    firstName: 'Jang Hoon',
    lastName: 'Seo',
    mass: 116,
    height: 2.06,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
    },
};
var lee = {
    firstName: 'Soo Geun',
    lastName: 'Lee',
    mass: 32,
    height: 1.65,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
    },
};
seo.calcBMI();
lee.calcBMI();

if (lee.BMI > seo.BMI) {
    console.log(
        lee.lastName +
            ' ' +
            lee.firstName +
            ' has the higher BMI than Seo Jang Hoon ' +
            lee.BMI
    );
} else if (lee.BMI < seo.BMI) {
    console.log(
        seo.lastName +
            ' ' +
            seo.firstName +
            ' has the higher BMI than Lee Soo Geun ' +
            seo.BMI
    );
} else {
    console.log('They have the same BMI.');
}
*/
// TODO: CODING CHALLENGE 4 - SOLUTION //!!!!!!!!!!!!!!! D R Y - RETURN
/* 
var seo = {
    fullName: 'Seo Jang Hoon',
    mass: 116,
    height: 2.06,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};
var lee = {
    fullName: 'Lee Soo Geun',
    mass: 32,
    height: 1.65,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

if (lee.calcBMI() > seo.calcBMI()) {
    console.log(
        lee.fullName + ' has the higher BMI than Seo Jang Hoon ' + lee.bmi
    );
} else if (lee.bmi < seo.bmi) {
    console.log(
        seo.fullName + ' has the higher BMI than Lee Soo Geun ' + seo.bmi
    );
} else {
    console.log('They have the same BMI.');
}
 */
//*LOOP AND ITERATION
/* 
for (var i = 0; i < 10; i++) {
    console.log(i);
} 
*/
// i = 0, 0 < 10 true, log i to console, i++'
// i = 1, 1 < 10 true, log i to console, i++'

//! 3 PARTS
//initial value of the counter;
// the condition that is evaluated before each loop iteration;
//a counter update after each iteration;
/* 
var mj = ['Michael', 'Carnaje', 2003, 'future software developer'];
//! FOR LOOP
for (var i = 0; i < mj.length; i++) {
    console.log(mj[i]);
}
//we only have the conditio
//! WHILE LOOP
var i = 0;
while (i < mj.length) {
    console.log(mj[i]);
    i++;
}
*/
// CONTINUE AND BREAK STATEMENTS;
/* 
var mj = ['Michael', 'Carnaje', 2003, 'future software developer'];

for (var i = 0; i < mj.length; i++) {
    if (typeof mj[i] !== 'string') continue; //LAKTAWAN
    console.log(mj[i]);
}
for (var i = 0; i < mj.length; i++) {
    if (typeof mj[i] === 'string') break; //LAKTAWAN
    console.log(mj[i]);
} 
*/
//LOOPING BACKWARDS
/* 
for (var i = mj.length - 1; i >= 0; i--) {
    console.log(mj[i]);
}
*/
//? CODING CHALLENGE 4
/*

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀

*/

// TODO: CODING CHALLENGE 4 - MY ANSWER

var mj = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmount: [],
    average: [],
    calcTips: function () {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            this.tips[i] = percentage * this.bills[i];
            this.finalAmount[i] = this.tips[i] + this.bills[i];
        }
    },
};

mj.calcTips();
console.log(mj);

// TODO: CODING CHALLENGE 4 - SOLUTION

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    },
};

// TODO: CODING CHALLENGE 4.1 - MY ANSWER
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! no answer huhu /////////////////////////
// TODO: CODING CHALLENGE 4.1 - SOLUTION

var mark = {
    fullName: 'mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    },
};

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

mark.calcTips();
john.calcTips();
console.log(mark, john);

john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
    console.log(
        john.fullName +
            "'s family pays higher tips, with an average of $" +
            john.average
    );
} else if (mark.average > john.average) {
    console.log(
        mark.fullName +
            "'s family pays higher tips, with an average of $" +
            mark.average
    );
}
