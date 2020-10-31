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
  var passwordLength = prompt("Enter a number of characters between 8 and 128 for the password:");  

  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {    
  } 
  else {
    return alert("Invalid response. Please enter a number between 8 and 128 and DO NOT use letters");    
  }
//Prompts user to confirm if they want a specific set of characters to use
  var lowerAlpha = confirm("Would you want your password to have lowercase letters? (abcdefg....) \n (OK = Yes) (Cancel = No)");
  var upperAlpha = confirm("Would you want your password to have uppercase letters? (ABCDEFG....) \n (OK = Yes) (Cancel = No)");
  var numChar = confirm("Would you want your password to have numbers? (1234567890) \n (OK = Yes) (Cancel = No)");
  var specialPick = confirm("Do you want your password to have special characters? (~!@#$%^....) \n (OK = Yes) (Cancel = No)");

//Creates an array for chosen characters called 'userArray' and puts them together
  var userArray = [];
  
  
  if (lowerAlpha === true) {
    userArray = userArray.concat(lowerCharArr);
  }
  if (upperAlpha === true) {
    userArray = userArray.concat(upperCharArr);
  }
  if (numChar === true) {
    userArray = userArray.concat(numbers);
  }
  if (specialPick === true) {
    userArray = userArray.concat(specialChar);
  }

//this function will take the password length and userArray to perform the random math for the password text
  function generatePassword() {
    var passwordText = "";
    for (var i = 0; i < passwordLength; i++) {
      passwordText += userArray[Math.floor(Math.random() * userArray.length)];
    }
    return passwordText;
  }

  var passwordTextField = document.querySelector("#password");

  passwordTextField.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);