function phoneBook(input) {

    let phoneBookEntry = {};
    input.forEach(element => {
        let keyValuePair = element.split(' ');
        let key = keyValuePair[0];
        let value = keyValuePair[1];

        phoneBookEntry[key] = value;
    });

    for (let [key, value] of Object.entries(phoneBookEntry)){
        console.log(`${key} -> ${value}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);