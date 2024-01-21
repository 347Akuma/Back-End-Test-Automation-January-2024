function censoredWords2(text, word){

    let censored = text.replace(word, repeat(word.length));
    while (censored.includes(word)){
        censored = censored.replace(word, repeat(word.length));
    }

    console.log(censored);

    function repeat(wordLength){
        let censoredWord = "*".repeat(wordLength);
        return censoredWord;
    }

}
censoredWords2('A small sentence with some words', 'small');