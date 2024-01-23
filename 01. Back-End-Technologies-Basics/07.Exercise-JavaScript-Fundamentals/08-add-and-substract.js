function addAndSubstract(a, b, c) {


    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    let result = subtract(sum(a, b), c);
    console.log(result);


}
addAndSubstract(23, 6, 10);