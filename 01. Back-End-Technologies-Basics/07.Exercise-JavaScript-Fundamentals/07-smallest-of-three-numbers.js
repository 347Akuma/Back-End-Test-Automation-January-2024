function smallestOfThreeNumbers(num1, num2, num3){

    let arr = [num1, num2, num3];
    arr.sort((x, y) => x - y);
    console.log(arr[0]);
}
smallestOfThreeNumbers(2, 5, 3)