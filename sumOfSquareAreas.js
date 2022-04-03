function sumOfSquareAreas(a, b) {
    var areaOne = a * a
    var areaTwo = b * b
    var totalAreas = areaOne + areaTwo
    
    console.log("The area is " + totalAreas)
}

sumOfSquareAreas(3, 9) //expect 90 (9 + 81)
sumOfSquareAreas(4, 2) //expect 20 (16 + 4)
sumOfSquareAreas(5, 1) //expect 26 (25 + 1)