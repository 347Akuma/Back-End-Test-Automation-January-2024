function countStrOccurances(text, word){

    let textArr = text.split(' ');
    let counter = 0;

    for (let currentWord of textArr){
        if (currentWord === word){
            counter++;
        }
    }
    console.log(counter);
}
countStrOccurances('This is a word and it also is a sentence',
'is'
);