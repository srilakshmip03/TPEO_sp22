//problem 1: count upwards by 3
function countUpwardsByThree() {
    for (var i = 0; i <= 30; i += 3) {
        console.log(i);
    }
}

countUpwardsByThree();

console.log("\n-------\n")

//problem 2: guess favorite number
function guessMyFavoriteNumber(guess) {
    var favoriteNumber = 3;
    if (guess == favoriteNumber) {
        console.log("You guessed my favorite number!")
    } else {
        console.log("Try again!")
    }
}

guessMyFavoriteNumber(5);
guessMyFavoriteNumber(12);
guessMyFavoriteNumber(3);
guessMyFavoriteNumber(-15);

console.log("\n-------\n")

//problem 3: convert number to day
function convertNumberToDay(number) {
    switch (number) {
        case 0: 
            console.log("Sunday");
            break;
        case 1: 
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;
        case 3: 
            console.log("Wednesday");
            break;
        case 4: 
            console.log("Thursday");
            break;
        case 5: 
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
    }
}

convertNumberToDay(0);
convertNumberToDay(1);
convertNumberToDay(2);
convertNumberToDay(3);
convertNumberToDay(4);
convertNumberToDay(5);
convertNumberToDay(6);