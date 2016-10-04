function randomNum(min, max) {                    //  This function creates a random number with a minimum and maximum value
    return Math.random() * (max - min) + min;
}

module.exports = randomNum;                       //  Exports the randomNum function
