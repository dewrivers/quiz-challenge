// ARRAY OF OBJECTS
var quiz = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        options:["<js>","<scripting>","javascript","script"],
        answer:3
    },
    
    {
        question:"Where is the correct place to insert a JavaScript?",
        options:["The <body> section","The <head> section","Both the <head> section and the <body> section are correct"],
        answer:2
    },

    {
        question:"What is the correct syntax for referring to an external acript called 'xxx.js?'",
        options:["<script src='xxx.js'>","<script name='xxx.js'>","<script href='xxx.js'>"],
        answer:0
    },
    
    {
        question:"What is the correct JavaScript syntax to write 'Hello World'?",
        options:["response.write('Hello World')","'Hello World'","document.write('Hello World')","('Hello World')"],
        answer:2
    },

    {
        question:"An external JavaScript must contain the <script> tag.",
        options:["False","True"],
        answer:0
    },

    {
        question:"How do you write 'Hello World' in an alert box?",
        options:["alert('Hello World')","msgBox('Hello World')","alertBox='Hello World'","alertBox('Hello World')"],
        answer:0,
    },
    {
        question:"How do you create a function?",
        options:["function:myFunction()","function=myFunction()","function myFunction()","myFunction():function"],
        answer:2,
    },
    {
        question:"How do you call a function named 'myFunction'?",
        options:["call myFunction()","myFunction()","call function myFunction","Call.myFunction()"],
        answer:1
    },
    {
        question:"How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
        options:["if i==5 then","if (i==5)","if i=5 then","if i=5"],
        answer:1
 
    },
    {
        question:"How do you write a conditional statement for executing some statements only if 'i' is NOT equal to 5?",
        options:["if (i != 5)","if =! 5 then","if (i <> 5)","if <>5"],
        answer:0
    }

];

var wrapper = document.querySelector(".wrapper");
var questionDiv = document.querySelector(".question-text")




