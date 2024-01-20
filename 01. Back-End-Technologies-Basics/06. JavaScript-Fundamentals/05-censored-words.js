function censoredWords(sentence, censorWord) {

    let sentenceArr = sentence.split(" ");

    for (let i = 0; i <= sentenceArr.length - 1; i++) {
        let currentWord = sentenceArr[i];
        
        if (currentWord.toLowerCase() === censorWord.toLowerCase()) {
            currentWord = replaceCensor(currentWord);
        }
        sentenceArr.splice(i, 1, currentWord);
    }
    let result = sentenceArr.join(" ");
    console.log(result.trim());

    function replaceCensor(text){
        
        let result = "";
        for (let i = 0; i < text.length; i++){
            result += '*';
        }
        text = result;
        return text;
    }
}
censoredWords('This exact veryloooooongword shall be removed', 'veryloooooongword');