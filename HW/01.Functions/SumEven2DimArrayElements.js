/* -------------------------------------------------------------------------- */
/*                                    task                                    */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от
// четните елементи на подаден й двумерен масив.

let arr = [
    [1,2,3],
    [4,5,6]
];
// >>>> put your code bellow:

function SumEven2DimArrayElements(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            if(element % 2 === 0){
                sum += element;
            }
        }
    }

    return sum;
}

// <<<< end of your code

// Примерно извикване на функцията:
let sum = SumEven2DimArrayElements(arr);
console.log(sum);
// expected output: 12