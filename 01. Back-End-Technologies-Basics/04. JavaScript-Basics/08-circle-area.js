function solve(param){

    const typeOfParam = typeof(param);
    let circleArea;
    if (typeOfParam === 'number'){

        circleArea = Math.PI * param ** 2;
        console.log(circleArea.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfParam}.`);
    }
}
solve(5);