function solve(number){
    let evenSum = 0;
    let oddSum = 0;

    while(number > 0){
        let last = number % 10;
        last % 2 === 0? evenSum += last: oddSum += last;
        number = Math.floor(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435)