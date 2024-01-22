function revealWords(words, text) {

    const wordArr = words.split(', ');
    const textTamplate = text.split(" ");

    let result = '';

    for(const word of textTamplate){
        if (word[0] === '*'){
            const replacement = wordArr.find(x => x.length === word.length);
            result += `${replacement + " "}`
        }
        else {
            result += `${word + " "}`
        }
    }
    console.log(result.trimEnd());

}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);