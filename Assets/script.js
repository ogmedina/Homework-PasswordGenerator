// Assignment Code


//Variables of different letters, numbers, and symbols
var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~"];

//Event Listener for click of button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter a number of characters for the password between 8 and 128:");  

  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Your password will be " + passwordLength + " characters long.");
  } 
  else {
    return alert("Invalid response. Please enter a number. Must be between 8 and 128 and not use letters");
  }
//Prompts user to confirm if they want a specific set of characters to use
  var lowerAlpha = confirm("Would you want your password to have lowercase letters? Ok = Yes Cancel = NO");
  var upperAlpha = confirm("Would you want your password to have uppercase letters?");
  var numChar = confirm("Would you want your password to have numbers?");
  var specialPick = confirm("Do you want your password to have special characters?");

//Creates an array for chosen characters called 'userPick' and puts them together
  var userPick = [];
  
  if (lowerAlpha === true) {
    collection = userPick.concat(lowerCharArr);
  }
  if (upperAlpha === true) {
    collection = userPick.concat(upperCharArr);
  }
  if (numChar === true) {
    collection = userPick.concat(numbers);
  }
  if (specialPick === true) {
    collection = userPick.concat(specialChar);
  }

//this function will take the password length and collection to perform the random math for the password text
  function generatePassword(passwordLength, collection) {
    var passwordText = "";
    for (var i = 0; i < passwordLength; i++) {
      passwordText += collection[Math.floor(Math.random() * collection.length)];
    }
    return passwordText;
  }

  var passwordTextField = document.querySelector("#password");

  passwordTextField.value = generatePassword(passwordLength, collection);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);