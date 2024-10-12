const fibonacci = function(num) {
    previous = 0;
    current = 1;
    num = parseInt(num);
    if (num == 0) {return 0;}
    if (num < 0) {return "OOPS";}

    for (let i = 1; i < num; i++) {
        let temp = current;
        console.log(current);
        current += previous;
        previous = temp;
    }

    return current;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
