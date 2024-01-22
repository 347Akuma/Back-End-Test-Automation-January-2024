function sortingNumbers(numArr){

    numArr.sort((a, b) => a - b);
    const sortedArr = [];

    while (numArr.length > 0){

        const firstElement = numArr.shift();
        const lastElement = numArr.pop();

        sortedArr.push(firstElement);
        if (lastElement){
            sortedArr.push(lastElement)
        }

    }
    return sortedArr;    
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);