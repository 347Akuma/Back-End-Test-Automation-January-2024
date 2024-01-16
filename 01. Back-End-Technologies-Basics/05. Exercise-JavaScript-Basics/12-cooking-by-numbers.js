function solve(num, c1, c2, c3, c4, c5) {
    'use strict';

    function executeOperation(currNum, currOp) {

        switch (currOp) {
            case 'chop':
                return currNum / 2;
                break;
            case 'dice':
                return Math.sqrt(currNum);
                break;
            case 'spice':
                return currNum += 1;
                break;
            case 'bake':
                return currNum * 3;
                break;
            case 'fillet':
                return currNum * 0.8;
                break;
            default:
                return currNum;
                break;
        }
    }

    let number = parseInt(num);
    const operations = [c1, c2, c3, c4, c5];

    for (const op of operations) {
        number = executeOperation(number, op)
        console.log(number);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')