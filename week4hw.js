//problem 1: powers of three
function powersOfThree() {
    var limit = 9;
    var current = 0;

    while (current <= limit) {
        var result = Math.pow(3, current);
        console.log(result);
        if (result == 27) {
            console.log(" - This is my favorite power of three!")
        }
        current++;
    }
}

var timeoutID = setTimeout(powersOfThree, 3000);

console.log("\n-----\n") //divider

//probkem 2: every ten seconds print out a "Hello world!" for 2 min

function everyTenSeconds() {
    var intervalId = setInterval(console.log, 10000, "Hello World!");
    setTimeout(clearInterval, 130000, intervalId);
}
everyTenSeconds();