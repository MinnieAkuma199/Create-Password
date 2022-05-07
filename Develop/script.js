
//Using this so I can use generateBtn below when generate password button is clicked
var generateBtn = document.querySelector("#generate");
//an array of every possible number user can put in. 
// var passwordNumber = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 102, 103, , 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128] //what is the index number?

// for (var i = 0; i < passwordNumber; i++)
//   console.log("the user chose" + passwordNumber[i])

// Write password to the #password input
function writePassword() {
  //prompt so user can put in desired password length
  var userChoice = prompt("Please enter desired password length between 8 and 128");
  console.log(userChoice); //i want to capture the userChoice and use below okay, this is working
  function generatePassword() {
    //define password as what you want put into the text box?
    var password = (userChoice + "blah blah")
  }

  alert("paswword generating");
    //want to define function generatePassword
  //if user choice is greater than 128 or less than 8 then an alert will display else generatePassword() function will be activated
  if ((userChoice > 128) || (userChoice < 8)) {
    {
      // passwordNumber[i].textContent += 
      // generatePassword();
      console.log("number was NOT btwn 8-128")
      alert("Number has to be between 8-128")
    }
  }
  else {
    console.log("number WASSSS between 8-128")
    //if number was between 8-128 then run function below
    generatePassword()
    //   alert("step 1 is working bc number is NOT BETWEEN 8-128")
    // }
  
    function generatePassword() {
      alert("boom")//define this function to do the things you would like as true/false using an alert
    }
  } 
  var passwordText = document.querySelector("#password"); //this is whats displayed in the textarea
  //Assigning text as whatever is put in above
  passwordText.value = password;

}
  // Add event listener to generate button, so when button is clicked it will run function above writePassword()
  generateBtn.addEventListener("click", writePassword);

