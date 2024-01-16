function solve(a, b, c){

    let arr = [a, b, c];
    arr.reverse();
    
    let result = "";
    for (let i = 0; i < arr.length; i++){
        result += arr[i] + " ";
    }
    console.log(result);
}
solve('A', 'B', 'C');