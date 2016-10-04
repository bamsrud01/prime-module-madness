var randomNum = require('./random');          //  Imports the capability to create a random number from random.js
var makeUSD = require('./toUSD');             //  Imports conversion of number to USD format from toUSD.js

exports.balance = function(){                 //  Exports a function called balace
  return 'Account balance: \n';               //  Returns a string, and sets up a new line for the next function.
}

exports.randomMoney = function(){             //  Exports the randomMoney function
  return makeUSD(randomNum(100, 1000000));    //  Uses the functions from random.js and toUSD.js to generate a random USD value
};
