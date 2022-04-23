// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  var pwLength = window.prompt("How long would you like your password to be?");
  var pwNumbers = window.confirm("Would you like your password to include numbers?")
  var pwUpperCase = window.confirm("Would you like your password to include uppercase letters?")
  var pwLowerCase = window.confirm("Would you like your password to include lowercase letters?")
  var pwSpecialCharacters = window.confirm("Would you like your password to include special characters?")

  console.log(pwLength, pwNumbers, pwUpperCase, pwLowerCase, pwSpecialCharacters)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
