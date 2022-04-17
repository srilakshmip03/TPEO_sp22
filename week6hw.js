//problem 1: reverse strings

function reverse(string) {
    var result = "";

    for (var i = string.length - 1; i >= 0; i--) { //index of character to print
        result += string[i];
    }

    console.log(result)

}

reverse("hey")
reverse("yes")
reverse("reverse this string")

console.log("\n-----\n")

//problem 2: find the number of vowels in a string
function numVowels(string) {
    var totalnum = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            totalnum++
        }
    }

    console.log(totalnum)
}

numVowels("hello")
numVowels("programming")
numVowels("austin, texas")

console.log("\n-----\n")

//problem 3: find the number of strings in an array that are shorter than the given length
function numStringsShorterThanLength(strings, length) {
    result = 0

    for (var i = 0; i < strings.length; i++) {
        var currentString = strings[i];
        if (currentString.length < length) {
            result++
        }

    }

    console.log(result);
}

numStringsShorterThanLength(["asdfa", "asd", "asdfga", "a"], 4)
// console.log("expect 2")
numStringsShorterThanLength(["adfasdfadf"], 20)
// console.log("expect 1")
numStringsShorterThanLength(["javascript", "programming", "code"], 5)
// console.log("expect 1")