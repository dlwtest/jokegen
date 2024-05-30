const jokes = [
  { question: "What do you call a boomerang that doesn't come back?", answer: "A stick" },
  { question: "What starts with E, ends with E, and only has one letter in it?", answer: "An envelope" },
  { question: "What did one wall say to the other wall?", answer: "I'll meet you at the corner" },
  // Add more jokes here
];


let currentJokeIndex; // Variable to store the current joke index

// Generate a random joke
function generateJoke() {
    currentJokeIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[currentJokeIndex];
    document.getElementById("joke").textContent = joke.question;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";

    console.log('GENERATING JOKES!')

    document.body.style.backgroundColor = getRandomColor(currentJokeIndex); // Change background color
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().replace(/[^a-z]/g, '');
    const currentJoke = jokes[currentJokeIndex];
    const correctAnswer = currentJoke.answer.toLowerCase().replace(/[^a-z]/g, '');

    console.log(userAnswer, correctAnswer)

    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Correct!";
        document.body.style.backgroundColor = "green";
    } else {
        document.getElementById("result").textContent = 'Wrong! The answer is: ' + currentJoke.answer;
        document.body.style.backgroundColor = "red";
    }

    document.getElementById("answer").value = "";
}

function getRandomColor(index) {
  const colors = ["#FF6347", "#00CED1", "#9370DB", "#FFD700", "#7CFC00"]; // Add more colors if needed
  return colors[index % colors.length];
}





































// ARRAYS
// +-------+-------+-------+-------+
// | apple | banana| orange| kiwi  |
// +-------+-------+-------+-------+
//    0        1       2       3 

//let birds = ['parrot', 'robin', 'eagle', 'hawk']

// CHALLENGE 1 
// using console.log, print the bird at index 2 to the console


// CHALLENGE 2 
// using console.log, print the hawk to the console  


// CHALLENGE 3
// which bird is at index 0



// OBJECTS
// An object is a way to group values with similar characteristics together!! 

// let city = {
//   name: "Denver",
//   state: "Colorado",
//   population: 5000
// }

// You can access the values of an object by using the object name with a . or [] and the property: 

// console.log(city.name)
// console.log(city["name"])

// CHALLENGE 1 
// using console.log, print the population of Denver to the console 


// CHALLENGE 2 
// using console.log, print the state Denver is in to the console 



// DOCUMENT!
// In JavaScript, we can select or "go to" an HTML element using its unique identifier, which is called an "id". 

// To select an element by its id, we use the document.getElementById() function in JavaScript

//let heading = document.getElementById('mainHeading');
// console.log(heading);
// console.log(heading.textContent);


// CHALLENGE 1 
// using console.log, print the name HTML element to the console

// CHALLENGE 1 
// using console.log, print the name text content to the console

