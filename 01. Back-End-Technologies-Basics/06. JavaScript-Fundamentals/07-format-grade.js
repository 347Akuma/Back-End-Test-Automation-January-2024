function formatGrade(grade){

    let result = "";
    if (grade < 3.00){
        result = 'Fail';
        grade = parseInt(grade);
    }
    else if (grade < 3.50){
        result = 'Poor';
    }
    else if (grade < 4.50){
        result = 'Good';
    }
    else if (grade < 5.50){
        result = 'Very good';
    }
    else {
        result = 'Excellent';
    }

    result != 'Fail'? console.log(result + ` (${grade.toFixed(2)})`): console.log('Fail (2)');
}
formatGrade(2.99);