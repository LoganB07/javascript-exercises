const palindromes = function palindromes(string) {
    toString(string);
    string = string.toLowerCase();
    string = string.replace(/[^\w\']|_/g, "");
    console.log(string);

    let j = string.length -1;
    for (let i = 0; i <= j; i++) {
        console.log(string[i]); console.log(string[j]);
        if (string[i] != string[j]) {return false;}
        j--;
    }
    return true;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
