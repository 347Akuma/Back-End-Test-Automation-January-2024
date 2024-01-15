function reverser(numbers) {

    numbers = "numbers";
    let myStr = "";

    for (let i = numbers.length - 1; i >= 0; i--) {

        let current = numbers[i];
        myStr += current;

    }
    console.log(myStr);
}

reverser();