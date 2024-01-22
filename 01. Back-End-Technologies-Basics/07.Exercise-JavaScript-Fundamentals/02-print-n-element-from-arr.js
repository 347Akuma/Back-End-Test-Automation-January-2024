function printNElementFromArr(inputArr, step){
    'use strict';

    const result = [];

    for (let index = 0; index < inputArr.length; index += step){
        result.push(inputArr[index]);
    }
    return result;
}
printNElementFromArr(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)