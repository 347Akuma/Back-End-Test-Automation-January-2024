function evenAndOddSubstraction(input) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        input[i] % 2 == 0 ? evenSum += input[i] : oddSum += input[i];
    }
    console.log((evenSum - oddSum));
}
evenAndOddSubstraction([3,5,7,9]);