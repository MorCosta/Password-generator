let choiceArr = []
let charlenght = []


// Array of special characters to be included in password
let specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  let lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  let upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  

  // Function to prompt user for password options
  function getPasswordOptions() {
   choiceArr = [];
   charlenght = parseInt (prompt("Choose the number of the characters for your password. Your password can be between 10 and 64 characters long."));
   if (isNaN(charlenght) || charlenght < 10 || charlenght > 64) {
    alert ("Please, select a number between 10 and 64.");
    return false;
   }
    if (confirm ("Do you want to use lower case?")) {
        choiceArr = choiceArr.concat(lowerCasedCharacters);
    }
    if (confirm ("Do you want to use upper case?")) {
        choiceArr = choiceArr.concat(upperCasedCharacters);
    }
    if (confirm ("Do you want to use numbers?")) {
        choiceArr = choiceArr.concat(numericCharacters);
    }
    if ( confirm ("Do you want to use symbols?")) {
        choiceArr = choiceArr.concat(specialCharacters);
    }
    return true;
}



  // Function for getting a random element from an array
  function getRandom(arr) {
    let randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
  }



  // Function to generate password with user input
  function generatePassword() {
   let password = ""
   for (let i = 0; i < charlenght; i++) {
   let randomIndex = Math.floor(Math.random() * choiceArr.length);
   password = password + choiceArr[randomIndex];
  }
  return password;
}


  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    let correctPrompts = getPasswordOptions();
    let passwordText = document.querySelector('#password');

    if(correctPrompts) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
  }

  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
