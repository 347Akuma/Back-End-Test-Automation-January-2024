function solve(num1, num2, num3){

    let largestNum = 0;

    if (num1 > num2 && num1 > num3){
        largestNum = num1;
    }
    else if (num1 < num2 && num2 > num3){
        largestNum = num2;
    }
    else if (num1 < num3 && num3 > num2){
        largestNum = num3;
    }
    console.log(`The largest number is ${largestNum}.`);
}
solve(1, 2, 3);