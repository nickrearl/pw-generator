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

    numbers: pwNumbers,
    upperCase: pwUpperCase,
    lowerCase: pwLowerCase,
    specialCharacters: pwSpecialCharacters,
  }

  var pwValues = []

  if (pwProperties.numbers == true){
    for(let i = 48; i < 58; i++){
      pwValues.push(i)
    }
  }

  if (pwProperties.upperCase == true){
    for(let i = 65; i < 91; i ++){
      pwValues.push(i)
    }
  }

  if (pwProperties.lowerCase == true){
    for(let i = 97; i < 123; i ++){
      pwValues.push(i)
    }
  }

  if (pwProperties.specialCharacters == true){
    for(let i = 33; i < 48; i ++){
      pwValues.push(i)
    }

    for(let i = 58; i < 64; i ++){
      pwValues.push(i)
    }

    for(let i = 90; i < 97; i ++){
      pwValues.push(i)
    }

    for(let i = 123; i < 127; i ++){
      pwValues.push(i)
    }
  }

  var finalPw = ""

  for (let i = 0; i < pwLength; i++){
    var randomIndex = Math.floor(Math.random() * pwValues.length)
    finalPw +=String.fromCharCode(pwValues[randomIndex])
  }

  return finalPw
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
