// Assignment Code

function generatePassword(){
//Variables of different letters, numbers, and symbols
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~"];
var pickedArray = [];

var passwordLength = getPasswordLength();

var charTypeSelected = false;


function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)){
    userChoice = window.prompt("Enter a number of characters between 8 and 128: ");

    //If not a number, makes user reset the choice value to 0
    if (isNaN(userChoice)) {
      userChoice = 0;      
    }
    
  }

   return userChoice;
}

//loop for user to pick at least one character type
while (charTypeSelected == false){
  var lowerAlpha = getChoice("lowercase letters");
  var upperAlpha = getChoice("uppercase letters");
  var numChar = getChoice("numeric");
  var specialPick = getChoice("special characters");
  if ((lowerAlpha) || (upperAlpha) || (numChar) || (specialPick)){
    charTypeSelected = true;
  }
  else {
    window.alert("You must select at least one character type")
  }
}
//PROBLEM HERE -- Cant cancel out of function
//function for user choice options, instead of writing them all out
function getChoice(currentOption){
  var userChoice = "a";
   messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentOption));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  //loops ensures a valid response
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    //mobile users because sometimes the letters become capitalized
    userChoice = userChoice.toLowerCase();
    if (userChoice == "y"){
      return true;
    }
    
    else if  (userChoice == "n") {
        return false;
      }
    }
  }



// this joins strings together
if (lowerAlpha) {
  pickedArray = pickedArray.concat(lowerCaseChar);
}
if (upperAlpha){
  pickedArray = pickedArray.concat(upperCaseChar);  
}
if (numChar){
  pickedArray = pickedArray.concat(numbers);
}
if (specialPick){
  pickedArray = pickedArray.concat(specialChar)
}

var passwordString = "";
//this loop will take the joined strings, randomly select from it, then connect it
for (var i= 0; i < passwordLength; i++) {
  passwordString += pickedArray[Math.floor(Math.random() * (pickedArray.length))];
}

return passwordString;

}











// references the generate element
 var generateBtn = document.querySelector("#generate");

 //Write password to the #password input
function writePassword() {
  var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
