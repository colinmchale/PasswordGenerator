let selectedArrays = [];
let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".toLowerCase().split("");
let upperAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let number = "1234567890".split("");
let specialCharacter = "!#$%&()*+,-./:;<=>?@[]^_`{|}~".split("")

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  let initialPassword = "";
  let wordLength = 10;
  // let wordLength = prompt("Please enter a length for the password between 8 and 128 characters.")
  // confirm("Would you like to include lowercase?")
  // confirm("Would you like to include uppercase?")
  // confirm("Would you like to include numeric characters?")
  // confirm("Would you like to include special characters?")
  let selectedArrays = [...lowerAlphabet, ...upperAlphabet];


  for (let i = 0; i < wordLength; i++) {
    
  let nextCharacter = selectedArrays[Math.floor(Math.random()*selectedArrays.length)];
    initialPassword+= nextCharacter
  };



  return initialPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


