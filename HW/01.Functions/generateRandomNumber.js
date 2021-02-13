/* -------------------------------------------------------------------------- */
/*                            task: generateRandomNumber                      */
/* -------------------------------------------------------------------------- */
// Да се дефинира функцията generateRandomNumber(start, end), която генерира
// цяло случайно число в интервала, зададен чрез параметрите start и end.
// Hint: използвайте Math.random() функцията за генериране на случайно число.

function generateRandomNumber(start, end){
    let min = Math.ceil(start);
    let max = Math.ceil(end);
    let randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber;
}

// примерно извикване:
let randomNumber = generateRandomNumber(1,100);
console.log( randomNumber );
// randomNumber трябва да е цяло число, като 1 >= randomNumber <=100