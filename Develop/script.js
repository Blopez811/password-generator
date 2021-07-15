// Assignment code here
function generatePassword() {
  var lower = confirm("Would you like to use lowercase letters in your password?");
  var upper = confirm("Would you like to use uppercase letters in your password?");
  var number = confirm("Would you like to use numbers in your password?");
  var special = confirm("Would you like to use special characters in your password?");
  while(!lower && !upper && !number && !special) {
    alert("You need to select at least one option!")
    lower = confirm("Would you like to use lowercase letters in your password?");
    upper = confirm("Would you like to use uppercase letters in your password?");
    number = confirm("Would you like to use numbers in your password?");
    special = confirm("Would you like to use special characters in your password?"); 
  }
  
  
  var size = prompt("How many characters long would like your password? Pick number between 8 and 128");
  
  while(size < 8 || size > 128) {
    size = prompt("How many characters long would like your password? Pick number between 8 and 128");  
  }

  var lowerArray = ["a", "b", "c"]
  var possibleCharacters = []
  var upperArray = ["A", "B", "C"]
  var numberArray = ["1", "2", "3"]
  var specialArray = ["!", "@", "#"]
  var newPassword = ""
  if (lower) {
    possibleCharacters = lowerArray.concat(possibleCharacters);
  }

  if (upper) {
    possibleCharacters = upperArray.concat(possibleCharacters);
  }

  for (var i = 0; i < size; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var randomCharacter = possibleCharacters[randomIndex];
    newPassword = newPassword + randomCharacter
  }
  return newPassword
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

