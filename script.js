// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var wordLength = prompt("Please enter a length for the password between 8 and 128 characters.")
// confirm("Would you like to include lowercase?")
// confirm("Would you like to include uppercase?")
// confirm("Would you like to include numeric characters?")
// confirm("Would you like to include special characters?")

