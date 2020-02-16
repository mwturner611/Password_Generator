// Identify button location on screen and assign generateBtn var name
var generateBtn = document.querySelector("#generate");

// Define arrays
var nbrs = [0,1,2,3,4,5,6,7,8,9];
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];
var specCharacters = ["@","%","+","/","!","#","$","^","?","*","(",")","[","]","{","}"];
var arrayOptions = [nbrs,ucLetters,lcLetters,specCharacters];

// function if user asks for numbers only
function numbersOnly(){
  Math.floor((Math.random() * 9) + 0);
}

// function if user asks for upperCase only
function upperOnly(){
  var which = Math.floor((Math.random() * 25) + 0);
  var nextone = ucLetters[which];
}


// function if user asks for lowerCase only
function lowerOnly(){
  var which = Math.floor((Math.random() * 25) + 0);
  var nextone = lcLetters[which];  
}

// function if user asks for specCharacters only
function specCharactersOnly(){
  var which = Math.floor((Math.random() * 16) + 0);
  var nextone = specCharacters[which];  
}


// function if user asks for numbers and upperCase 

// function if user asks for numbers and lowerCase 

// function if user asks for numbers and specCharacters 

// function if user asks for lowerCase and upperCase

// function if user asks for lowerCase and specCharacters

// function if user asks for upperCase and specCharacters

// function if user asks for numbers/upperCase/lowerCase

// function if user asks for numbers/lowerCase/specCharacters

// function if user asks for numbers/upperCase/specCharacters

// function if user asks for upperCase/lowerCase/specCharacters

// function if user asks for numbers/upperCase/lowerCase/specCharacters





// Define attributes of generatePassword function
// ask user how many characters they want and change it to a number
function generatePassword() {
  var nbrCharacters = parseFloat(prompt("How long should your password be? Please enter a number between 8 and 128"));

  // if an eligible quantity was entered, then ask the confirms
  if (typeof nbrCharacters == 'number' && nbrCharacters > 7 && nbrCharacters < 129) {
    alert ("Please say 'OK' to at least one of the following password attributes!")

    var aLowCase = confirm("Do you want Lowercase characters? OK=YES CANCEL=NO");
    
    var aUpperCase = confirm("Do you want Uppercase characters? OK=YES CANCEL=NO");
    
    var aNumeric = confirm("Do you want Numbers? OK=YES CANCEL=NO");
    
    var aSpecCharacter = confirm("Do you want Special Characters? OK=YES CANCEL=NO");

    // test if none of the pasword characteristics were confirmed and restart the process
    if (aLowCase === false && aUpperCase === false && aNumeric === false && aSpecCharacter === false) {
        alert("you didn't select any attributes! Please start over")
        generatePassword();
    }

    // continue password process
    else {

      // for loop to iterate through password based on 
      for (var i = 0; i < nbrCharacters; i ++){

        // create an array for user's password
        var passwordArray = [];
        passwordArray.push("test");
        passwordArray.push("second")
        alert(passwordArray.length);
        alert(passwordArray[1]);

      }


    }
  }

  // restart password process because user didn't enter eligible 
  else {
    generatePassword();
  }
  
}

// function generating a password then within the designated box publishing it
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // set the value to be sent to the server as password variable
  passwordText.value = password;
}

// upon "click" of assigned button area- initiate function writePassword
generateBtn.addEventListener("click", writePassword);
