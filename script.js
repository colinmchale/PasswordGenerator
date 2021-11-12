let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".toLowerCase();
let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
let numbers = "1234567890";
let specialCharacter = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// builds the password that will be given to the user
function generatePassword() {
  let initialPassword = "";
  let selectedArrays = [];
  // the following are propmts for the user to customize their password by answering the questions
  let wordLength = prompt("Please enter a length for the password between 8 and 128 characters.");
  let lowerConfirm = confirm("Would you like to include lowercase?");
  let upperConfirm = confirm("Would you like to include uppercase?");
  let numericConfirm = confirm("Would you like to include numeric characters?");
  let specialConfirm = confirm("Would you like to include special characters?");

  let confirmCheck = [lowerConfirm, upperConfirm, numericConfirm, specialConfirm]
  let characterArray = [lowerAlphabet, upperAlphabet, numbers, specialCharacter]

  // this for loop creates an array reflecting the user's choices in the prompts/confirms above
  for (let i = 0;i < 4; i++) {
    if (confirmCheck[i] === true) {
      selectedArrays+= characterArray[i]
    } else {

    }
  }

  // this for loop then selects each random character individually and places them all together in one string
  for (let i = 0; i < wordLength; i++) {
  let nextCharacter = selectedArrays[Math.floor(Math.random()*selectedArrays.length)];
    console.log(nextCharacter)
    initialPassword+= nextCharacter
  };
  return initialPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


