// const calculator = {
//     "add": function(a, b){return a+b;},
//     "sub": function(a, b){return a-b;},
//     "mult": function(a, b){return a*b;},
//     "div": function(a, b){return a/b;},
// };

const calculator = {
    "add": (a, b) =>  a+b,
    "sub": (a, b) => a-b,
    "mult": (a, b) => a*b,
    "div": (a, b) => a/b,
};

console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.mult(2,3));
console.log(calculator.div(2,3));
