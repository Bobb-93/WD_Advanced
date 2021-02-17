function power(base, exponent){
    let result = 1;
    if(exponent === 0){
        result = 1;
    }else{
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
    }
    return result;
}

console.log(`power(2, 0) = ${power(2, 0)}`);
console.log(`power(0, 2) = ${power(0, 2)}`);
console.log(`power(0, 0) = ${power(0, 0)}`);
console.log(`power(2, 10) = ${power(2, 10)}`);