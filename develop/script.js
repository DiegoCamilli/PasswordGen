var generateBtn = document.querySelector("#generate");

var charBank = {
  lowercase : ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  uppercase: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  specialChar: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','-', '_', '=', '+', '/', '?']
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}


// create the password logic 
function generatePassword() {

  var passwordLength = prompt('How long do you want this password to be? Please enter a numeric value.');
  passwordLength = Number(passwordLength);
  
  if (passwordLength < 8) {
    alert('Must be grater than 8 letters');
    return
  }
  if (passwordLength > 128) {
    alert('Must be less than 128 letters');
    return
  }

 var passwordUpper = confirm('Would you like uppercase letters?');
 var passwordLower = confirm('Would you like lowercase letters?');
 var passwordSpecial = confirm('Would you like to use special charecters?');
 var passwordNumber = confirm('Would you like to use numbers?')
 console.log(passwordLength, passwordUpper, passwordLower, passwordSpecial, passwordNumber, 'IT WORKS!')

 var passwordChoice = [];

 if (passwordUpper === true) {
  passwordChoice = charBank.uppercase.concat(passwordChoice);
 }

 if (passwordLower === true) {
  passwordChoice = charBank.lowercase.concat(passwordChoice)
 }

 if (passwordNumber === true) {
  passwordChoice = charBank.numbers.concat(passwordChoice)
 }

 if (passwordSpecial === true) {
  passwordChoice = charBank.specialChar.concat(passwordChoice)
 }

  var password = ''

 for (var i=0; i<passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * passwordChoice.length);
  var randomChar = passwordChoice[randomIndex]
  password = randomChar + password
 }
 return password
}

generateBtn.addEventListener("click", writePassword);