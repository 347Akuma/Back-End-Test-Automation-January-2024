function solve(start, end){
    let sum = 0;
    let nums = "";
    for (let i = start; i <= end; i++){
         sum += i;
         nums += i + " ";
    }
    console.log(`${nums}\nSum: ${sum}`);
}
solve(0, 26);