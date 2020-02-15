// Identify button location on screen and assign generateBtn var name
var generateBtn = document.querySelector("#generate");

// Define attributes of generatePassword function
function generatePassword() {
  var nbrCharacters = parseFloat(prompt("How long should your password be? Please enter a number between 8 and 128"));

  if (typeof nbrCharacters == 'number' && nbrCharacters > 7 && nbrCharacters < 129) {
    alert ("Please say 'OK' to at least one of the following password attributes!")

    var lowCase = confirm("Do you want Lowercase characters? OK=YES CANCEL=NO");
    
    var upperCase = confirm("Do you want Uppercase characters? OK=YES CANCEL=NO");
    
    var numeric = confirm("Do you want Numbers? OK=YES CANCEL=NO");
    
    var specCharacter = confirm("Do you want Special Characters? OK=YES CANCEL=NO");

    if (lowCase === false && upperCase === false && numeric === false && specCharacter === false) {
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
