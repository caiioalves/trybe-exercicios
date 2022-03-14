/*
1- Nesse primeiro exercício, percorra o array imprimindo 
todos os valores nele contidos com a função console.log() 
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

/*
2- Para o segundo exercício, some todos os 
valores contidos no array e imprima o resultado;
*/

let valorSoma = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
valorSoma = valorSoma + numbers[index]
}
console.log(valorSoma);

/*
3- Para o terceiro exercício, calcule e imprima a média 
aritmética dos valores contidos no array;
*/
let valorSoma = 0
let valorMediaAritimetica = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    valorSoma = valorSoma + numbers[index]
    valorMediaAritimetica = valorSoma / numbers.length;
}


console.log(valorMediaAritimetica);

/*
4- Com o mesmo código do exercício anterior, caso o valor final seja maior
que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a 
mensagem: "valor menor ou igual a 20";
*/

let valorSoma = 0
let valorMediaAritimetica = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    valorSoma = valorSoma + numbers[index]
    valorMediaAritimetica = valorSoma / numbers.length;
}
if (valorMediaAritimetica > 20) {
    console.log("valor maior que 20")
} else { console.log("valor menor ou igual a 20")};

/*
5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = numbers[0];

for (let index = 1; index < numbers.length; index++) {
if (numbers[index] > resultado) {resultado = numbers[index]}
};
console.log(resultado);


/*
6- Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {resultado++}}

    if (resultado > 0) {console.log(resultado)} 
    else {console.log("nenhum valor ímpar encontrado")}
