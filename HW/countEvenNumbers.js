/* -------------------------------------------------------------------------- */
/*                           task: countEvenNumbers                           */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция countEvenNumbers, която връща броя четни числа в
// подаденият й масив от числа.

function countEvenNumbers(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element % 2 === 0){
            count++;
        }
    }
    return count;
}

// примерно извикване:
let evenCount = countEvenNumbers( [1,4,2,3,5] );
console.log( evenCount );
// 2