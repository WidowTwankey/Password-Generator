// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
let chosenLength = 0;
let lowCase = true;
let uppCase = true;
let numBers = true;
let specChar = true;
function getPasswordOptions() {
  alert("Hi! Thanks for choosing Protheroe Industries to randomly and securely generate your new password. Let's get started.");
  chosenLength = prompt("How long do you want your password to be? Please enter a number between 10 and 64.");
  lowCase = confirm("Would you like to include lower case letters?");
  uppCase = confirm("Would you like to include upper case characters?");
  numBers = confirm("Would you like to include numbers?")
  specChar = confirm("Would you like special characters, i.e. '?', '!', '@' ?");
  return;
}
getPasswordOptions();

// Function for getting a random element from an array

function getRandomElement(arr){
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomEntry = arr[randomIndex];
  return randomEntry;
}

// the function below was copied and slightly modified from Stack Overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// Function to generate password with user input
function generatePassword() {
  let createdPassword = [];
  while (createdPassword.length < chosenLength) {
    if (lowCase && createdPassword.length < chosenLength) {
      createdPassword.push(getRandomElement(lowerCasedCharacters));
    }
    if (uppCase && createdPassword.length < chosenLength) {
      createdPassword.push(getRandomElement(upperCasedCharacters));
      }
    if (numBers && createdPassword.length < chosenLength) {
      createdPassword.push(getRandomElement(numericCharacters));
    }
    if (specChar && createdPassword.length < chosenLength) {
      createdPassword.push(getRandomElement(specialCharacters));
    }
  }
  shuffle(createdPassword);
  return createdPassword.join("");
}

// Below is not for me! Leave it alone (but study it)
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);