// Identify button location on screen and assign generateBtn var name
var generateBtn = document.querySelector("#generate");

// Define arrays
var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];
var specCharacters = ["@","%","+","/","!","#","$","^","?","*","{","}"];
var aNumeric;
var aUpperCase;
var aLowCase;
var aSpecCharacter;
var truths = 0;


// calc number of trues in variable truth
function trueAnswerCount(){
  truths = 0;  

  if (aNumeric){
    truths = truths + 1;
  }
  
  if (aUpperCase){
    truths = truths + 1;
  }

  if (aLowCase){
    truths = truths + 1;
  }

  if (aSpecCharacter){
    truths = truths + 1;
  }
  console.log(truths);
}

// function find a random value to add to password
function oneNewCharacter(a){
  var newOne = [];
  
  // find random number
  if (aNumeric){
    var nbr1 = Math.floor((Math.random() * 10) + 0);
    var nextOne1 = numberList[nbr1];
    newOne.push(nextOne1);
  }
  
  // find random upper case letter
  if (aUpperCase){
    var nbr2 = Math.floor((Math.random() * 26) + 0);
    var nextOne2 = ucLetters[nbr2];
    newOne.push(nextOne2);
  }

  // // find random lower case letter
  if (aLowCase){
    var nbr3 = Math.floor((Math.random() * 26) + 0);
    var nextOne3 = lcLetters[nbr3];
    newOne.push(nextOne3);
  }

  // // find random special character
  if (aSpecCharacter){
    var nbr4 = Math.floor((Math.random() * 12) + 0);
    var nextOne4 = specCharacters[nbr4];
    newOne.push(nextOne4);
  }

  // decide which randomly gen character is chosen
  var nbr5 = Math.floor((Math.random() * truths));
  var sendIt = newOne[nbr5];
  a.push(sendIt);
  console.log(nbr4);
  console.log(nextOne4);
  console.log(sendIt);
  

}

// Define attributes of generatePassword function
function generatePassword() {

  // create blank array to collect users password
  var passwordArray = [];

  // ask user how many characters they want and change it to a number
  var nbrCharacters = parseFloat(prompt("How long should your password be? Please enter a number between 8 and 128"));

  // if an eligible quantity was entered, then ask the confirms
  if (typeof nbrCharacters == 'number' && nbrCharacters > 7 && nbrCharacters < 129) {
    alert ("Please say 'OK' to at least one of the following password attributes!")

    aLowCase = confirm("Do you want Lowercase characters? OK=YES CANCEL=NO");
    
    aUpperCase = confirm("Do you want Uppercase characters? OK=YES CANCEL=NO");
    
    aNumeric = confirm("Do you want Numbers? OK=YES CANCEL=NO");
    
    aSpecCharacter = confirm("Do you want Special Characters? OK=YES CANCEL=NO");

    trueAnswerCount();
    // test if none of the pasword characteristics were confirmed and restart the process
    if (truths < 1) {
        alert("you didn't select any attributes! Please start over")
        generatePassword();
    }

    // continue password process
    else {
      // while loop to continue to initiate function getting new random characters until right PW length 
      while (nbrCharacters > passwordArray.length){
        oneNewCharacter(passwordArray);
        console.log(passwordArray);
      }
      
      // reformat varaiable so it will allow join. Join on next line.
      var deliverable = Array.prototype.slice.call(passwordArray);
      return ''+ deliverable.join("")+''; 
         
    }
  }

  // restart password process because user didn't enter eligible 
  else {
    alert("That's not an eligible value, please restart.")
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
