// Specifying variable for button and linking generatePassword function to the click of the button.
var pwButton = document.querySelector("#button")
pwButton.addEventListener("click", generatePassword);

// The function to generate the password.
function generatePassword() {

    // Declaring variables: Characters, character types, array of arrays of character types, arrays for elements of character types,
    // a modified array to account just for the character types used, an array of arrays of different character types,
    // and a password variable to hold generated password.
    var char = 1;
    var lc = true;
    var uc = true;
    var num = true;
    var sc = true;
    var specs = [
        lc,
        uc,
        num,
        sc
    ]

    var lcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var ucArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var sc = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
    var specArrays = [
        lcArray,
        ucArray,
        num,
        sc
    ]

    var modArray = []
    var password = "";

    // Gather password length and confirm character types.
    while (char < 8 || char > 128) {
        var char = prompt("How many characters would you like your password to be? Password must be at least 8, but no more than 128 characters.");
    }
    specs[0] = confirm("Should your password contain lowercase characters?");
    specs[1] = confirm("Should your password contain uppercase characters?");
    specs[2] = confirm("Should your password contain numeric characters?");
    specs[3] = confirm("Should your password contain special characters?");

    // Build modified array (modArray) to use for password generation.
    for (i = 0; i < specs.length; i++) {
        if (specs[i] === true) {
            modArray.push(specArrays[i]);
            console.log(modArray);
        }
    }

    // Generate password.
    for (i = 1; i <= char; i++) {
        var a = Math.floor(Math.random() * modArray.length);
        password = password + modArray[a][Math.floor(Math.random() * modArray[a].length)];
        console.log(password);
    }

    // Write password to the page.
    document.querySelector("#pwrevealed").innerHTML = password;
}