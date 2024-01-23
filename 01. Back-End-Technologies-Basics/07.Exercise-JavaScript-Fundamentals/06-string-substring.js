function stringSubstring(wordToSearch, textForSearching){

    const hasWord = (textForSearching
    .toLowerCase()
    .split(' ')
    .includes(wordToSearch));

    hasWord? console.log(wordToSearch): console.log(wordToSearch + ' not found!');;    
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)