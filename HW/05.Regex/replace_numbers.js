/*
    Given is the string: 'a1b2c3d'
    Write a program which will replace each digit in string with '-'. 
    I.e. the resulting string should be 'a-b-c-d'
*/

let originalString = 'a1b2c3d';
const re = /[0-9]/g; 

let newString = originalString.replace(re, '-');

console.log(`Original String: ${originalString}`);
console.log(`New String: ${newString}`);