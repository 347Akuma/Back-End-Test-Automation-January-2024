function solve(num) {

    let isTheSame = true;
    let sum = 0;
    let lastDigit = num % 10;

    while (num > 0) {
        let currDigit = num % 10;
        sum += currDigit;

        if (currDigit != lastDigit){
            isTheSame = false;
        }
        lastDigit = currDigit;
        num = Math.floor(num / 10);
    }

    if (isTheSame == true){
        console.log("true");
        console.log(sum);
    }
    else {
        console.log("false");
        console.log(sum);
    }
}
solve(1234);