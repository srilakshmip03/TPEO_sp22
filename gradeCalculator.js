function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    var homeworkWeight = homeworkAvg * 0.1
    var quizWeight = quizAvg * 0.15
    var examWeight = examAvg * 0.75

    var total = homeworkWeight + quizWeight + examWeight

    console.log("Your total is " + total + "%")
}

gradeCalculator(10, 45, 100)
gradeCalculator(100, 0, 0)
gradeCalculator(50, 45, 30)