// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  var pwLength = window.prompt("How long would you like your password to be?"); // between 8 and 128

  while (pwLength < 8 || pwLength > 128 ){
    window.alert("Please eneter a value between 8 and 128")
    pwLength = window.prompt("How long would you like your password to be?")
  }

  var pwNumbers = window.confirm("Would you like your password to include numbers?") // true or false
  var pwUpperCase = window.confirm("Would you like your password to include uppercase letters?") // true or false
  var pwLowerCase = window.confirm("Would you like your password to include lowercase letters?") // true or false
  var pwSpecialCharacters = window.confirm("Would you like your password to include special characters?") // true or false

  while (!pwNumbers && !pwUpperCase && !pwLowerCase && !pwSpecialCharacters){
    window.alert("Please select at least one type of character")
    pwNumbers = window.confirm("Would you like your password to include numbers?")
    pwUpperCase = window.confirm("Would you like your password to include uppercase letters?") 
    pwLowerCase = window.confirm("Would you like your password to include lowercase letters?")
    pwSpecialCharacters = window.confirm("Would you like your password to include special characters?") 
  }

  var pwProperties = {
    length: pwLength,
    numbers: pwNumbers,
    upperCase: pwUpperCase,
    lowerCase: pwLowerCase,
    specialCharacters: pwSpecialCharacters,
  }

  for (placeholder in pwProperties) {
    console.log(pwProperties[placeholder])
  }

  // if (pwNumbers && pwUpperCase && pwLowerCase && pwSpecialCharacters){
  //   return "a"
  // }

  // else if (pwNumbers && pwUpperCase && pwLowerCase && !pwSpecialCharacters){
  //   return "b"
  // }

  // else if (pwNumbers && pwUpperCase && !pwLowerCase && pwSpecialCharacters){
  //   return "c"
  // }

  // else if (pwNumbers && !pwUpperCase && pwLowerCase && pwSpecialCharacters){
  //   return "d"
  // }

  // else if (pwNumbers && pwUpperCase && !pwLowerCase && !pwSpecialCharacters){
  //   return "e"
  // }

  // else if (pwNumbers && !pwUpperCase && !pwLowerCase && !pwSpecialCharacters){
  //   return "f"
  // }

  // else if (pwNumbers && !pwUpperCase && pwLowerCase && !pwSpecialCharacters){
  //   return "g"
  // }

  // else if (pwNumbers && !pwUpperCase && !pwLowerCase && pwSpecialCharacters){
  //   return "h"
  // }

  // else if (!pwNumbers && pwUpperCase && pwLowerCase && pwSpecialCharacters){
  //   return "i"
  // }

  // else if (!pwNumbers && !pwUpperCase && pwLowerCase && pwSpecialCharacters){
  //   return "j"
  // }

  // else if (!pwNumbers && !pwUpperCase && !pwLowerCase && pwSpecialCharacters){
  //   return "k"
  // }

  // else if (!pwNumbers && pwUpperCase && pwLowerCase && !pwSpecialCharacters){
  //   return "l"
  // }

  // else if (!pwNumbers && pwUpperCase && !pwLowerCase && pwSpecialCharacters){
  //   return "m"
  // }

  // else {
  //   window.alert("Please enter valid password criteria");
    
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
