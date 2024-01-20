function reverseAnArrOfNums(n, elements){

    let myArr = [];

    for (let i = 0; i < n; i++)
    {
        myArr.unshift(elements[i]);
    }
    console.log(myArr.join(" "));


    
    // for (let i = 0; i < n; i++){
    //     myArr.push(elements[i]);
    // }
    // myArr.reverse();
    // let res = "";
    // for (let i = 0; i <= myArr.length - 1; i++){
    //     res += myArr[i] + " ";
    // }
    // console.log(res);
}
reverseAnArrOfNums(3, [10, 20, 30, 40, 50]);