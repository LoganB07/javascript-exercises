const repeatString = function(string, numRepeated) {
    if (numRepeated < 0){
        return "ERROR";
    }
    let newString ='';
    for (let i = 0; i < numRepeated; i++){
        newString += string;
    }
    return newString;

};

// Do not edit below this line
module.exports = repeatString;
