function solve(currentStock, orderedStock) {

    const storeStock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const stockName = currentStock[i];
        const stockAmount = parseInt(currentStock[i + 1]);

        storeStock[stockName] = stockAmount;
    }

    for (let i = 0; i < orderedStock.length; i += 2){
        const stockName = orderedStock[i];
        const stockAmount = parseInt(orderedStock[i + 1], 10);

        storeStock[stockName]? storeStock[stockName] += stockAmount: storeStock[stockName] = stockAmount;
        
    }

    Object.keys(storeStock).forEach((item) => {
        console.log(`${item} -> ${storeStock[item]}`);
    })

}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);