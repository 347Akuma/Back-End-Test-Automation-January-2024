function solve(groupNum, groupType, weekDay){

    let price;
    if (groupType === "Students"){
        if (weekDay === "Friday"){
            price = 8.45 * groupNum;
        }
        else if (weekDay === "Saturday"){
            price = 9.80 * groupNum;
        }
        else if (weekDay === "Sunday"){
            price = 10.46 * groupNum;
        }

        if (groupNum >= 30){
            price *= 0.85;
        }
    }
    else if (groupType === "Business"){
        if (groupNum >= 100){
            groupNum -= 10;
        }
        if (weekDay === "Friday"){
            price = 10.90 * groupNum;
        }
        else if (weekDay === "Saturday"){
            price = 15.60 * groupNum;
        }
        else if (weekDay === "Sunday"){
            price = 16 * groupNum;           
        }
    }
    else if (groupType === "Regular"){
        if (weekDay === "Friday"){
            price = 15 * groupNum;
        }
        else if (weekDay === "Saturday"){
            price = 20 * groupNum;
        }
        else if (weekDay === "Sunday"){
            price = 22.50 * groupNum;         
        }

        if (groupNum >= 10 && groupNum <= 20){
            price *= 0.95;
        }
    }
   console.log(`Total price: ${price.toFixed(2)}`);
}
solve (30,
    "Students",
    "Sunday"
    );