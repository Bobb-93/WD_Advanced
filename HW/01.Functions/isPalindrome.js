/* -------------------------------------------------------------------------- */
/*                             task: isPalindrome                             */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция isPalindrome, която връща "true" ако подадената й
// като аргумент дума е палиндром, и "false" - ако думата не е палиндром.
// Палиндром е дума, която се чете по един и същ начин от ляво надясно и от
// дясно наляво. Пример за палиндром са: мадам, боб, капак.
function isPalindrome(word){
    let wordReversed = word.split("").reverse().join("");
    //console.log(wordReversed);
    
    if(wordReversed === word){
        return true;
    }else{
        return false;
    }
}
// примерно извикване:
console.log( isPalindrome("madam") );// true
console.log( isPalindrome("test") ); // false