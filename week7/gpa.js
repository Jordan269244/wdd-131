function getGrades(inputSelector){
    const grades = document.querySelector(inputSelector).value;
    const gradesList = grades.split(",");
    const cleanGrades = gradesList.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    return cleanGrades;
}

function lookupGrade(grade){
    let points = 0;
    if (grade == "A") {
        return 4;}
    else if (grade == "B"){ return 3;}
    else if (grade == "C"){ return 2;}
    else if (grade == "D"){ return 1;}
    else if (grade == "F"){return 0;}
    return points;
        
}


function calculateGpa(grades){
    const gpaPoints = grades.map((grade) => lookupGrade(grade));
    pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
    const gpa = pointsTotal /gpaPoints.length;
    console.log(gpa);
    return gpa.toFixed(2);

}

function outputGpa(gpa, selector) {

    const ouput = document.querySelector(selector);
    output.innerText = gpa;
}

function clicker(){
    grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
    
}

document.querySelector("#submitButton").addEventListener("click", clicker);