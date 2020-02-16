// Identify button location on screen and assign generateBtn var name
var generateBtn = document.querySelector("#generate");

// Define arrays
var nbrs = [0,1,2,3,4,5,6,7,8,9]
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"]


// Define attributes of generatePassword function
function generatePassword() {
  var nbrCharacters = parseFloat(prompt("How long should your password be? Please enter a number between 8 and 128"));

  if (typeof nbrCharacters == 'number' && nbrCharacters > 7 && nbrCharacters < 129) {
    alert ("Please say 'OK' to at least one of the following password attributes!")

    var aLowCase = confirm("Do you want Lowercase characters? OK=YES CANCEL=NO");
    
    var aUpperCase = confirm("Do you want Uppercase characters? OK=YES CANCEL=NO");
    
    var aNumeric = confirm("Do you want Numbers? OK=YES CANCEL=NO");
    
    var aSpecCharacter = confirm("Do you want Special Characters? OK=YES CANCEL=NO");

    if (aLowCase === false && aUpperCase === false && aNumeric === false && aSpecCharacter === false) {
        alert("you didn't select any attributes! Please start over")
        generatePassword();
    }
    else {

    }
  }

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
