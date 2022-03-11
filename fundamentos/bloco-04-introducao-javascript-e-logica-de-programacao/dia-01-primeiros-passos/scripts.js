/* 
1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) 
*/

let a = 10;
let b = 5;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);


/*
2- Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os valores que serão comparados.
*/

let numb1 = 27
let numb2 = 34

if (numb1 > numb2) {
    console.log('O numero ' + numb1 + ' é maior que o numero ' + numb2)
} else {
    console.log('O numero ' + numb2 + ' é maior que o numero ' + numb1)
}


/*
3- Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados.
*/

let n1 = 45 
let n2 = 34
let n3 = 51

if (n1 > n2 && n1 > n3) {
    console.log('O número ' + n1 + ' é o maior dos 3')
} else if (n2 > n1 && n2 > n3) {
    console.log('O número ' + n2 + ' é o maior dos 3') 
} else {
    console.log('O número ' + n3 + ' é o maior dos 3')
}


/*
4- Faça um programa que, dado um valor definido numa constante, retorne "positive" 
se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

const valor = 4;

if (valor > 0) {
    console.log('positive')
} else if ( valor < 0) {
    console.log('negative')
}
else {
    console.log('zero')
}
