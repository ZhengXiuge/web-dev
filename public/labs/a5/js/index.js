// Loading External JavaScript Files
// alert('Hello World!');

// Writing to the Console
/*
A useful feature of modern browsers is that they provide a development environment where
    you can analyze the performance of your scripts.
    One way to analyze if your script is behaving correctly is to write output to the console from within your script.
 */
console.log('Hello World!');

// Variables and Constants
/*
Variables enable storing state information about your application.
 */
console.log('\n' + 'Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
                  blockScoped;

console.log(global1 = 10);
console.log(functionScoped = 2);
console.log(blockScoped);
console.log(constant1);

// Variable Types
/*
JavaScript declares several datatypes such as Number, String, Date, and so on.
 */
console.log('\n' + 'Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// Boolean Variables
/*
Practice with Boolean data types
 */
console.log('\n' + 'Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);



// Conditionals
/*
Conditionals allow scripts to make decisions based on some predicate that compares values and variables.
Scripts can decide to execute different parts of the code based on the result of these predicates using the if/else and other constructs.
 */

// If Else
/*
The most common use of conditionals is if/else statements that evaluate a predicate and can decide
to execute one of two different code blocks depending on whether the predicate evaluates to true or false.
 */
console.log('\n' + 'If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// Ternary Conditional Operator
/*
Ternary conditional operators are concise alternative to the if statement. It takes three arguments:
a conditional expression that evaluates to true or false followed by a question mark ( ? ).
Then an expression that evaluates if the conditional is true followed by a colon ( : ),
followed by an expression that evaluates iff the conditional is false.
 */
console.log('\n' + 'Ternary Conditional Operator')
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)



// Functions
/*
Functions allow reusing an algorithm by wrapping it in a named, parameterized block of code.
JavaScript supports two styles of functions based on the history of language.
 */

// Legacy ES5 function
/*
Declaring functions consists of wrapping a block of code, naming it, and declaring parameters as shown below.
In ECMAScript 5 (ES5) and earlier, the syntax for functions is
function <functionName> (<parameterList>) { <functionBody> }
 */
console.log('\n' + 'Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// New ES6 Functions
/*
A new version of JavaScript was introduced in 2015 and is officially referred to as ECMAScript 6 or ES6.
A new syntax for declaring functions was introduced which is less verbose and provides tons of new features
we'll explore throughout this course. This function syntax is often referred to as "arrow functions".
 */
console.log('\n' + 'New ES6 functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// Implied Return
/*
One of the new features of the new ES6 functions is implied returns, that is, if the body of the
function consists of just returning some value or expression, then the return statement is optional
and can be replaced with just the value or expression.
 */
console.log('\n' + 'Implied return')
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// Parenthesis and Parameters
/*
Another new feature is optional parameter parenthesis if functions have only one parameter.
 */
console.log('\n' + 'Parenthesis and Parameters')
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);



// Arrays
/*
Arrays can group together several values into a single variable. Arrays can group together values
of different datatypes, e.g., number arrays, string arrays, and even a mix and match of datatypes
in the same array. Not that you would ever want to do that.
The numbers in parenthesis at the beginning of a line is the length of the array.
The numbers and colons at the beginning of a line are the indices of the element. You can ignore these.
 */
console.log('\n' + 'Arrays')
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

// Array index and length
/*
The length of an array is available as property length in the array variable.
The indexOf() function allows finding where a particular array member is found.
 */
console.log('\n' + 'Array index and length')
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

console.log(length1);
console.log(index1);

// Adding and Removing Data to/from Arrays
/*
In most languages arrays are immutable, whereas in JavaScript we can easily add or remove elements
from the array. The push() function appends an element at the end of an array.
The splice() function can remove/add an element anywhere in the array.
 */
console.log('\n' + 'Adding and Removing Data to/from Arrays')
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// For loops
/*
We can operate on each array value by iterating over them in a for loop.
 */
console.log('\n' + 'For loops')
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// The Map Function
/*
An array's map function can iterate over an array's values, apply a function to each value,
and collate all the results in a new array. The first example below iterates over the numberArray1
and calls the square function for each element. The square function was declared earlier in this
document and it accepts a parameter and returns the square of the parameter.
The map function collates all the squares into a new array called squares as shown below.
The second example does the same thing, but uses a function that calculates the cubes of all numbers
in the same numberArray1 array.
 */
console.log('\n' + 'The Map Function')
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

console.log(numberArray1);
console.log(squares);
console.log(cubes);

// The Find Function
/*
An array's find function can search for an item in an array and return the element it finds.
The find function takes another function as an argument that serves as a predicate.
The predicate should return true if the element is the one you're looking for.
The predicate function is invoked for each of the elements in the array and when the function returns true,
the find function stops because it has found the element that it was looking for.
 */
console.log('\n' + 'Find Function')
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

console.log(four);
console.log(string3);

// The Find Index Function
/*
Alternatively we can use findIndex function to determine the index where an element is located inside an array.
 */
console.log('\n' + 'The Find Index Function')
const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');

console.log(fourIndex);
console.log(string3Index);

// The Filter Function
/*
The filter function can look for elements that meet a criteria and collate them into a new array.
For instance, the example below is looking through the numberArray1 array for all values that are
greater than 2. Then we look for all even numbers and then for all odd numbers.
All the results are stored in corresponding arrays with appropriate names.
 */
console.log('\n' + 'The Filter Function');
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);

console.log(numberArray1);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

// Template Strings
/*
Generating dynamic HTML consists of writing code that manipulates and concatenates strings to
generate new HTML strings based on some program logic.
Basically consists of one language writing code in another language, much what a compiler does.
Working with strings can be error prone especially if you have to use lots of extra operations and
variables to concatenate the resulting string.
JavaScript template strings provide a better approach by allowing embedding expressions and
algorithms right within strings themselves.
 */
console.log('\n' + 'Template Strings');
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedIn2 = false;
const greeting2 = `Logged in: ${loggedIn2 ? "Yes" : "No"}`;

// Executing jQuery Scripts
/*
The jQuery script declares global function called jQuery and its alias $. The jQuery function can
manipulate the DOM in many different ways, but a common practice is to pass it an initialization function.
 */
console.log('\n' + 'Executing jQuery Scripts');
const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
    /*
    What's happening here is that jQuery waits for the document to load, the DOM to be generated,
    and then it invokes the initialization function. The function doesn't need to be called init,
    but it is a common name.
    */

    // Binding to the DOM
    /*
    One of jQuery's strength is to bind to the DOM by referring to different parts using CSS selectors.
    The examples below reference DOM elements in the left using CSS strings.
    For instance, the H2#bind-by-id heading is referenced with $('#bind-by-id') and storing it in a
    variable for further processing.
     */
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('\n' + 'Binding to the DOM');
    console.log(bindById);
    console.log(bindByClass);

    // Changing Style Programmatically
    /*
    Once jQuery binds to a DOM element, we can use all sort of methods to manipulate the DOM element.
    In this example we modify a DOM's style using the css method.
     */
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // Getting and Setting Attributes
    /*
    We can also modify an element's attributes by using the attr method.
    The example below reads the ID attribute of the heading element.
     */
    console.log('\n' + 'Getting and Setting Attributes');
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    /*
    The attr function can not only be used to read the value of an attribute like above, but it can
    also be used to modify its value. The example below sets the value of the class attribute.
     */
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');


    // Adding and Removing Classes
    /*
    Modifying an element's class attribute is such a common task that jQuery provides dedicated
    methods addClass and removeClass. The example below adds class class-1 to the heading.
     */
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    /*
    The example below removes the class class-2.
     */
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    // Hiding and Showing Content
    /*
    The jQuery library provides methods hide and show.
     */
    const hideMe = $("#hide-me");
    hideMe.hide();

    /*
    Practice showing content programmatically
     */
    const showMe = $("#show-me");
    showMe.show();

    // Creating New Elements
    /*
    Beyond binding to already existing DOM elements, jQuery can also create brand new elements and add them to the DOM.
    To create an element, provide an HTML string to the jQuery or $ function.
     */
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    // Appending New Elements
    /*
    To actually add new content to the DOM use functions such as append.
     */
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);


    // Removing and Emptying Content
    /*
    We can also remove elements from DOM.
     */
    const removeThisLi = $("#remove-this");
    const emptyThisUl = $("#empty-this");
    removeThisLi.remove();
    emptyThisUl.empty();

    // Changing Content
    /*
    We can also modify content already in the DOM.
     */
    const changeThisText =
        $("#change-this-text");
    const changeThisHtml =
        $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
        <li>Line item A</li>
        <li>Line item B</li>
        <li>Line item C</li>
    `);

    // Navigating Up and Down the DOM Hierarchy
    /*
    We often need to refer to DOM elements that are nested within another DOM or is the parent of some element.
    The parents() function returns an array of elements that are parents of an element all the way
    up to the root of the HTML document.
    The find() function returns an array of elements that are children of the current element.
    Both accept CSS selectors to filter parents or children that match the selector.
     */
    const child2 = $("#child-2");
    const parent1 =
        child2.parents("#parent");
    parent1
        .css('background-color', 'red')
        .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    // Handling click events
    /*
    The jQuery library can handle all sorts of events generated by the user.
    The most common event is clicking the mouse.
     */
    const handleClick =
        () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    // Event target
    /*
    We often need to determine the UI element that a user clicked on.
    This is available in the target attribute of the event generated by the user.
     */
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    // Hiding and showing content
    /*
    We can combine event handlers with DOM manipulation to achieve useful behaviors.
    In this example we handle click events to either hide or show DOM elements.
     */
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
}
$(init);









