function solve(fruitType, weightInGr, pricePerKg){

    let weightInKg = weightInGr / 1000;
    let finalPrice = pricePerKg * weightInKg;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);

}
solve('apple', 1563, 2.35)