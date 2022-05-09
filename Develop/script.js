//variables
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); // Add event listener to generate button, so when button is clicked it will run function writePassword()

function writePassword() {
    //prompt so user can put in desired password length
    var userChoice = prompt("Please enter desired password length between 8 and 128");
    console.log(userChoice);
    if ((userChoice > 128) || (userChoice < 8)) {
        console.log("number was NOT btwn 8-128")
        alert("Number has to be between 8-128")
        writePassword()
        return
        //function will run again if they put a number not within 8-128
    }
    else {
        console.log("number WASSSS between 8-128")
        //if number was between 8-128 then run below
    }
        //variables for my confirm statements
    let confirmLowercase = confirm("Would you like to use lowercase letters?")
    let confirmUppercase = confirm("Would you like to use UPPERCASE letters?")
    let confirmNumeric = confirm("Would you like to use numer1c valu3s?")
    let confirmSpecial = confirm("Would you like to use speci@l characters?")
    
    if ((confirmLowercase == false) && (confirmUppercase == false) && (confirmNumeric == false) && (confirmSpecial == false) == true) {
            alert("You must include at least one of the character criterias to generate a password!")
            writePassword() //this should make user run through prompts again if they hit false for all prompts
        } 
    var characters = ""; 
    
    if (confirmLowercase == true) 
            //using empty variable created above
        characters = characters.concat("abcdefghijklmnopqrstuvwxyz")
        
    if (confirmUppercase == true) 
        characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        
    if (confirmNumeric == true) 
        characters = characters.concat("0123456789")
        
    if (confirmSpecial == true) 
        characters = characters.concat("~!#$%^&*()_+{}<>?][\|")
    console.log(characters)
        
    var password = "";
    var characterAmount = characters.length //using local variable made above 
        //want to generate a random string
    for (var i = 0; i < userChoice; i++)
        password += characters.charAt(Math.floor(Math.random() * characterAmount));
    
    console.log(password);
    document.querySelector("#password").setAttribute("placeholder", password)
}

