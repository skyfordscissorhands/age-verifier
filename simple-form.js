// Defining a function to display error message
function printError (elemID, hintMsg) {
    document.getElementById(elemID).innerHTML= hintMsg;
}
// Defining a function to validate form 
function validateForm() {
// Retrieving the values of form elements 
const randomQuestion= document.contactForm.randomQuestion.value;
}
if(randomQuestion == " ") {
    printError("randomQuestionErr", "")
} else {
    var regex= /^[a-zA-Z\s]+$/;
    if(regex.test(email) === false) {
        printError("randomQuestionErr", "");
    } else {
        printError("randomQuestionErr", "")
randomQuestionErr=false;
    }
}

const init = function(){
    document.getElementById("button").addEventListener('click',reset);
}
const queryString = window.location.search;

console.log(queryString);