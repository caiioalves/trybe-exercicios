/*
Utilizando o array abaixo, percorra-o somando todos os valores.
Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou 
menor que 15, imprima a mensagem: "valor menor que 16":
*/


let fruits = [3, 4, 10, 1, 12];
let resultado = 0;

for (let index = 0; index < fruits.length; index++) {
resultado = resultado + fruits[index];  
}


if (resultado > 15) {console.log(resultado)}
else if (resultado <= 15) {console.log('valor menor que 16')}; 

/*
1- O fatorial é a multiplicação de um número natural pelos seus antecessores, 
exceto o zero. Por exemplo:
*/
var fatorialDe10 = 1;

for (let index = 1; index <= 10; index++) {
    fatorialDe10 = fatorialDe10 * index
}

console.log(fatorialDe10);

/*
2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a 
string abaixo como exemplo, depois troque por outras para verificar se seu
algoritmo está funcionando corretamente.
*/

let word = 'tryber';
let palavraInvertida = '';

palavraInvertida = word.split('').reverse('').join('');

console.log(palavraInvertida);

/*
3- Escreva dois algoritmos: um que retorne a maior palavra deste array e 
outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array [0];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > maiorPalavra.length ) {
        maiorPalavra = array[index]
    }
}
for (let index2 = 0; index2 < array.length; index2++) {
    if (array[index2].length < menorPalavra.length ) {
        menorPalavra = array[index2]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);


/*
4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
*/
let arrayDeNumeros = []
let maiorNumeroPrimo = 0;

for (let index = 1; index <= 50; index++) {
    if (index % 2 != 0 && index % 3 != 0) {
        arrayDeNumeros.push(index)}
}

for (let index2 = 0; index2 < arrayDeNumeros.length; index2++) {
    if (arrayDeNumeros[index2] > maiorNumeroPrimo) {
        maiorNumeroPrimo = arrayDeNumeros[index2]
    }
}
console.log(maiorNumeroPrimo);

