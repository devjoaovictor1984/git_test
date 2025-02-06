// Escreva uma função chamada add7que recebe um número e retorna esse número + 7.
// Escreva uma função chamada multiplyque recebe 2 números e retorna o produto deles.
// Escreva uma função chamada capitalizeque recebe uma string e retorna essa string com apenas a primeira letra em maiúscula.
// Certifique-se de que ela pode receber strings que sejam minúsculas, MAIÚSCULAS ou BoTh.
// Escreva uma função chamada lastLetterque recebe uma string e retorna a última letra dessa string:
// lastLetter("abcd")deveria retornar"d"

function add7(num) {
    return num + 7;
    
}
console.log(add7(10));

function multiplyque(num1, num2) {
    return num1 * num2;
}

console.log(multiplyque(2,4));

function capitalize(str) {
    if (!str) return ""; // Retorna uma string vazia se a entrada for vazia ou undefined
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Testes
console.log(capitalize("javascript"));  // "Javascript"
console.log(capitalize("JAVASCRIPT"));  // "Javascript"
console.log(capitalize("jAvAsCrIpT"));  // "Javascript"
console.log(capitalize("hello WORLD")); // "Hello world"
console.log(capitalize(""));            // ""
console.log(capitalize("123test"));     // "123test"

function lastLetterque(word) {
    return word.slice(-1);
    
}

console.log(lastLetterque("ABCDE"));