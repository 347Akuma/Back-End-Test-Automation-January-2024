function solve(speed, area) {

    let overLimit = false;
    let currSpeedLimit;
    let difference = 0;
    let status;

    switch (area) {

        case 'motorway':
            currSpeedLimit = 130;
            if (speed > currSpeedLimit) {
                overLimit = true;
                difference = speed - currSpeedLimit;
            }
            break;
        case 'interstate':
            currSpeedLimit = 90;
            if (speed > currSpeedLimit) {
                overLimit = true;
                difference = speed - currSpeedLimit;
            }
            break;
        case 'city':
            currSpeedLimit = 50;
            if (speed > currSpeedLimit) {
                overLimit = true;
                difference = speed - currSpeedLimit;
            }
            break;
        case 'residential':
            currSpeedLimit = 20;
            if (speed > currSpeedLimit) {
                overLimit = true;
                difference = speed - currSpeedLimit;
            }
            break;
    }
    if (overLimit == false) {
        console.log(`Driving ${speed} km/h in a ${currSpeedLimit} zone`);
    }
    else {
        if (difference <= 20) {
            status = 'speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currSpeedLimit} - ${status}`);
        }
        else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currSpeedLimit} - ${status}`);
        }
        else {
            status = 'reckless driving'
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currSpeedLimit} - ${status}`);
        }
    }
}
solve(130, 'motorway');