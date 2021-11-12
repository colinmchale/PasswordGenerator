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

// let selectedArrays = [...lowerAlphabet, ...upperAlphabet]
// var wordLength = prompt("Please enter a length for the password between 8 and 128 characters.")
// confirm("Would you like to include lowercase?")
// confirm("Would you like to include uppercase?")
// confirm("Would you like to include numeric characters?")
// confirm("Would you like to include special characters?")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


