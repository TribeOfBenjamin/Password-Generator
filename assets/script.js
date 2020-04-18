function startPasswordCriteria() {

    var passwordLength = prompt("How long do you want your password to be? (Passwords must be at least 8 characters and no more than 128");
        
        if ((passwordLength >= 8) && (passwordLength <= 128)) {
            var uppersChoice = confirm("Do you want uppercase letters included in your password?");
            var lowersChoice = confirm("Do you want lowercase letters included in your password?");
            var numbersChoice = confirm("Do you want numbers included in your password?");
            var specialsChoice = confirm("Do you want special characters included in your password?");
        } else {
            alert("Come on, human. I said between 8 and 128 characters. No password for you!");
        }

        //USER CHOICE: Uppercase
        if (uppersChoice && (lowersChoice === false) && (numbersChoice === false) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersPassword(passwordLength);
            console.log(makeUppersPassword(passwordLength));
        }
        //USER CHOICE: Lowercase
        else if (lowersChoice && (uppersChoice === false) && (numbersChoice === false) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeLowersPassword(passwordLength);
            console.log(makeLowersPassword(passwordLength));
        }
        //USER CHOICE: Numbers
        else if (numbersChoice && (uppersChoice === false) && (lowersChoice === false) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeNumbersPassword(passwordLength);
            console.log(makeNumbersPassword(passwordLength));
        }
        //USER CHOICE: Specials
        else if (specialsChoice && (uppersChoice === false) && (lowersChoice === false) && (numbersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeSpecialsPassword(passwordLength);
            console.log(makeSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Lowercase
        else if ((uppersChoice && lowersChoice) && (numbersChoice === false) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersLowersPassword(passwordLength);
            console.log(makeUppersLowersPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Numbers
        else if ((uppersChoice && numbersChoice) && (lowersChoice === false) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersNumbersPassword(passwordLength);
            console.log(makeUppersNumbersPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Specials
        else if ((uppersChoice && specialsChoice) && (lowersChoice === false) && (numbersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersSpecialsPassword(passwordLength);
            console.log(makeUppersSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Lowercase, Numbers
        else if ((lowersChoice && numbersChoice) && (uppersChoice === false) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeLowersNumbersPassword(passwordLength);
            console.log(makeLowersNumbersPassword(passwordLength));
        }
        //USER CHOICE: Lowercase, Specials
        else if ((lowersChoice && specialsChoice) && (uppersChoice === false) && (numbersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeLowersSpecialsPassword(passwordLength);
            console.log(makeLowersSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Numbers, Specials
        else if ((numbersChoice && specialsChoice) && (uppersChoice === false) && (lowersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeNumbersSpecialsPassword(passwordLength);
            console.log(makeNumbersSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Lowercase, Numbers
        else if ((uppersChoice && lowersChoice && numbersChoice) && (specialsChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersLowersNumbersPassword(passwordLength);
            console.log(makeUppersLowersNumbersPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Lowercase, Specials
        else if ((uppersChoice && lowersChoice && specialsChoice) && (numbersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersLowersSpecialsPassword(passwordLength);
            console.log(makeUppersLowersSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Numbers, Specials
        else if ((uppersChoice && numbersChoice && specialsChoice) && (lowersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeUppersNumbersSpecialsPassword(passwordLength);
            console.log(makeUppersNumbersSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Lowercase, Numbers, Specials
        else if ((lowersChoice && numbersChoice && specialsChoice) && (uppersChoice === false)) {
            document.querySelector(".passwordField").textContent = makeLowersNumbersSpecialsPassword(passwordLength);
            console.log(makeLowersNumbersSpecialsPassword(passwordLength));
        }
        //USER CHOICE: Uppercase, Lowercase, Numbers, Specials
        else if (uppersChoice && lowersChoice && numbersChoice && specialsChoice) {
            document.querySelector(".passwordField").textContent = makeUppersLowersNumbersSpecialsPassword(passwordLength);
            console.log(makeUppersLowersNumbersSpecialsPassword(passwordLength));
        } else if ((uppersChoice === false) && (uppersChoice === false) && (uppersChoice === false)) {
            alert("You need to select at least one category. Please refresh the page and try again.");
        }
    }

// Figured out how to used result and an empty variable (var result = "";) from StackOverflow: https://stackoverflow.com/questions/28665160/simple-js-for-loop-returning-undefined
        //GENERATES PASSWORD WITH: Uppercase
        function makeUppersPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }
        //GENERATES PASSWORD WITH: Lowercase
        function makeLowersPassword(length) {
   
            var result         = "";
            var password       = "abcdefghijklmnopqrstuvwxyz";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }
        //GENERATES PASSWORD WITH: Numbers
        function makeNumbersPassword(length) {
            
            var result         = "";
            var password       = "0123456789";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
        }
        //GENERATES PASSWORD WITH: Specials
        function makeSpecialsPassword(length) {
            
            var result         = "";
            var password       = "!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
        }
        //GENERATES PASSWORD WITH: Uppercase, Lowercase
        function makeUppersLowersPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }
        //GENERATES PASSWORD WITH: Uppercase, Numbers
        function makeUppersNumbersPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }
        //GENERATES PASSWORD WITH: Uppercase, Specials
        function makeUppersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }            
        //GENERATES PASSWORD WITH: Lowercase, Numbers
        function makeLowersNumbersPassword(length) {
   
            var result         = "";
            var password       = "abcdefghijklmnopqrstuvwxyz0123456789";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Lowercase, Specials
        function makeLowersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Numbers, Specials
        function makeNumbersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "0123456789!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Uppercase, Lowercase, Numbers
        function makeUppersLowersNumbersPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Uppercase, Lowercase, Specials
        function makeUppersLowersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Uppercase, Numbers, Specials
        function makeUppersNumbersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012456789!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Lowercase, Numbers, Specials
        function makeLowersNumbersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "abcdefghijklmnopqrstuvwxyz012456789!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  
        //GENERATES PASSWORD WITH: Uppercase, Lowercase, Numbers, Specials
        function makeUppersLowersNumbersSpecialsPassword(length) {
   
            var result         = "";
            var password       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012456789!@#$%^&*()";
            var passwordLength = password.length;

            for ( var i = 0; i < length; i++ ) {
                result += password.charAt(Math.floor(Math.random() * passwordLength));
                }
                return result;
            }  


    