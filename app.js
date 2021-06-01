// function timeOfDay() {
//     var hour = new Date().getHours();
//     var greeting;
// if (hour < 18) { greeting = "Good day";}
// else{"Good evening"} alert(greeting);}
// timeOfDay(true);


// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');
// document.write("Hello World"+'<br />');

// for(let i = 0; i < 10; i++){
//     document.write('Hello World' + '<br/v');
// }

// for(i=0; i<10; i++){
//     if (i===7){
//       break;
//     }

// document.write("the number is"+ i +"<br>");

// / while loop
// var x=0;
// while(x<5) {
//     console.log(x);
//     x = x+1;
// };

// var x = 5
// while (x<5){
//     console.log(x);
//     x = x +1;
// };



// for (var i=0 ; i <20; i++){
//     if(1 % 2===0){
//         document.write(i + ' is even ')
//     } else {
//         document.write(i + " is odd ");
//     }
// }

// var money = 1500.00;
// var bills = 2500.00;
// if (money > bills || money ===bills){
//     document.write('You are covered!')
// }
// else if (money === bills || money < 2000){
//     document.write('you are good, just barely')
// }
// else { document.write('uh-oh!')
// };

// function assignGrade(score){
//     if (score>90){
//         return 'A';
//     }else if (score > 80){
//         return 'B';
//     }else if (score> 70) {
//         return 'C';
//     }else if (score> 60) {
//         return 'C';
//     }else if (score> 50) {
//         return 'D';
//     }else if (score> 40) {
//         return 'F';
//     }

// }
// 
// var score = 65;

// switch(score){
//     case (score === 100);
//     console.log('A');
//     break;

//     case (score > 80);
//     console.log('B');
//     break;

//     case (score < 65);
//     console.log('A');
//     break;

//     default;
//     console.log('You Failed');
//     break;

// }


// document.write("Your grade is" + assignGrade(78));
// document.write("Your grade is" + assignGrade(92));
// document.write("Your grade is" + assignGrade(51));
var age = prompt("How old are you?");
if (age >= 18) alert('You are old!')
else {
    alert('You get to watch a puppy video!')
    document.location.href = "https://www.youtube.com/watch?v=DUfKZjRo8GY";
}


var score = 100;

switch(true){
    case(score > 90):
    console.log("You got an A!");
    break;

    case(score > 80):
    console.log("You got a B.");
    break;

    case(score > 70):
    console.log("You got an C");
    break;

    case(score > 60):
    console.log("You got an D");
    break;

    default:
    console.log("You failed");
}
    
// }
// String letterGrade;
// switch (score) 
//     {
//     case A(score > 90):
// document.write ("You got an A.")
//       break;
//     case B (score > 80):
// document.write ("You got a B.")
//       break;
//     case C (score > 70):
// document.write ("You got a C.")
//       break;
//     case D (score > 60):
// document.write ("You got a D.")
//       break;
//     default:
//         document.write("You failed");
//     }
 
//  return letterGrade;
// };


var day; 

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
     day = "Tuesday";
      break;
    case 3:
      day= "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day= "Saturday";
      default: "no day" ;
  }
  alert (day);

//   object literal store the object in a variable
var biography = {
    name: "April",
    age: 30,
    likes: ["rest", "money"],
    kids: true
}
// object constructor new object keyword

var bio = new Object();
    bio.name= "April";
    bio.age= 30;
    bio.likes= ["rest","food"]
    bio.kids= true;

    // redccipe card
var recipe = {
    title: 'Mole',
    serving: 2,
    ingredients: ["cumin","chocolate","milk"]
};
console.log(recipe.title);
console.log(`serving` + recipe.servings);
console.log(`ingredients:`);
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for
//  the title (a string), author (a string), and alreadyRead (a boolean indicating if you
//  read it yet).
// Iterate through the array of books. For each book, log the book title and book author 
// like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet 
// or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. 
// Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" 
// by J.R.R. Tolkien.'

// var books = [
// {
//     title:'The Hobbit',
//     author: 'J.R.R. Martin',
//     alreadyread: true
// },
// {
//     title: "Becoming Me" ,
//     author: "Michelle Obama",
//     alreadyread: true
// },
// {
//     title:'Daisy Jones & the six',
//     author: 'Taylor Reid',
//     alreadyread: true

// }];

// for (var i = 0; i < books.length; i++) {
// var book= books[i];
// var bookInfo= book.title + " by " + book.author;
// if (book.alreadyread){
//     console.log (`You already read ${bookInfo}`)
// } else {
//         console.log(`You still need to read ${bookInfo}`);
//     }
// }

  var favMovie = {
      titleName:'Pulp Fiction',
        duration : 154,
        starring : ["Uma Thurman", "Bruce Willis","Samuel L. Jackson","John Travola"]

    };

    var secFav = {
        titleName:'Pulp Fiction',
         duration : 154,
         starring : ["Uma Thurman", "Bruce Willis","Samuel L. Jackson","John Travola"]
     }

     var thirdFav = {
        titleName:'Pulp Fiction',
         duration : 154,
         starring : ["Uma Thurman", "Bruce Willis","Samuel L. Jackson","John Travola"]
     }

    function Detials(movie) {
      document.write(movie.titleName + ' lasts for ' + movie.duration + 'minutes');
      document.write('It stars ' + movie.starring.join('🍄') );
      
    }
    Details(favMovie);
    Detials(secFav);
    Detials(thirdFav);

    // function details(movie){
    //   document.write(`Title: ${favMovie.title} Duration: ${favMovie.duration} Starring:
    //   ${favMovie.starring}`)
    // }
//     var movieNew = `My favorite movie is ${titleName}, it is ${duration} minutes long, starring ${stars}!`;
// console.log(movieNew);

    // for (var i = 0; i < movies.length; i++) {
    // var movie= movies[i];
    // var movieInfo= movie.title + movie.duration + movie.stars;
    // }
    //     console.log(movieInfo)
    // };

// Defining a function to display error message
function printError (elemID, hintMsg) {
  document.getElementById(elemID).innerHTML= hintMsg;
}
// Defining a function to validate form 
function validateForm() {
// Retrieving the values of form elements 
const name= document.contactForm.name.value;
const email= document.contactForm.email.value;
const mobile= document.contactForm.mobile.value;
const country= document.contactForm.country.value;
const gender= document.contactForm.gender.value;
const hobbies= [];
const checkboxes= document.getElementsByTagName ('hobbies []');
for (let i=0; i<checkboxes.length; i++) {
  if(checkboxes[i]checked){
  hobbies.push (checkboxes[i].value)
}
}
}

  // Defining error variables with a default value
  var nameErrr= emailErr= moileErr= countryErr= genderErr=false;
  //validate name
  if(name==" ") {
      printError("nameErr", "Please Enter a Valid Name")
  } else {
      var regex= /^[a-zA-Z\s]+$/;
      if(regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
      } else {
          printError("nameErr", "")
  nameErr=false;
      }
  }
  // Validate name

  
  // Validate email address
 
  if(email==" ") {
      printError("emailErr", "Please Enter a Valid Email")
  } else {
      var regex= /^[a-zA-Z\s]+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email");
      } else {
          printError("emailErr", "")
  emailErr=false;
      }
  }
  
  
  if(mobile==" ") {
      printError("mobileErr", "Please Enter a Valid Name")
  } else {
      var regex= /^[a-zA-Z\s]+$/;
      if(regex.test(mobile) === false) {
          printError("mobileErr", "Please enter a valid name");
      } else {
          printError("mobileErr", "")
  mobileErr=false;
      }
  }
  
  // Validate country
 
  
  // Validate gender
  