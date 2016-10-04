function makeUSD(num) {                                           //  Function to convert a number to USD currency
  num = num.toFixed(2);                                           //  Removes all numbers beyond two decimal places
  num = numberWithCommas(num);                                    //  Calls the numberWithCommas function found below
  return '$' + num;                                               //  Returns a string with the correct currency value
}

/*  Found on Stack Overflow  */
function numberWithCommas(x) {                                    //  Function to add commas to the appropriate places.
    var parts = x.toString().split(".");                          //  Splits a number into an array with two items, split at the '.'
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");    //  I did not write this function, and do not understand this line.
    return parts.join(".");                                       //  Combines the two parts of the array at the '.'
}

module.exports = makeUSD;                                         //  Exports the makeUSD function
