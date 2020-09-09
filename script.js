function generatePassword() {

    // Declaring variables: Characters, array of character specifications, array of arrays of special characters,
    // and a modified array to use for the password generator.
    var char = prompt("How many characters would you like your password to be? Your password must contain at least 8 characters, but no more than 128.");
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
    var sc = ["@", "%", "+", "'", "!"];
    var specArrays = [
        lcArray,
        ucArray,
        num,
        sc
    ]
    var modArray = []

    var password = "1";

    lc = confirm("Should you password contain lowercase characters?");
    uc = confirm("Should your password contain uppercase characters?");
    num = confirm("Should your password contain numeric characters?");
    sc = confirm("Should your password contain special characters?");
    console.log(specs.length);
    var i;
    for (i = 0; i < specs.length; i++) {
        if (specs[i] === true) {
            modArray.push(specArrays[i]);
        }
    }
    
    console.log(modArray);
    for (i = 1; i = char; i++) {
        var a = Math.floor(Math.random() * 3);
        password = password + modArray[Math.floor(Math.random() * modArray.length)]
    }

    document.querySelector("#pwrevealed").innerHTML = password;

}

var pwButton = document.querySelector("#button")
pwButton.addEventListener("click", generatePassword);