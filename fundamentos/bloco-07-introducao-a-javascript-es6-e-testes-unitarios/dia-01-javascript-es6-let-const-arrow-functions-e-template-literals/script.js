//PARTE 1

//EXERCÍCIO 1
/* const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !'`
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */

//EXERCÍCIO 2
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let orderedArray = oddsAndEvens.sort((a,b) => a - b);

//"Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!"

console.log(`Os números ${orderedArray} se encontram ordenados de forma crescente!`); */

//PARTE 2

//EXERCÍCIO 1

/* const fatorialNumber = number => {

  let result = number;
  for (let i = 1; i < number; i += 1) {
    result *= i;
  }
  return result;
}
console.log(fatorialNumber(5)); */




/* const factorial = n => 
//(n === 1 || n === 0) ? 1 : n * factorial(n - 1);
  if (n === 0)  {
  return 1;
  } else {  
  return n * factorial(n - 1);
  }
} 

console.log(factorial(5)); */



//EXERCÍCIO 2

const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";
let big = "";

phrase.split(" ").forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});

console.log(big);

/* /
const biggestWord = phrase => {
  let phraseSplit = phrase.split(' ');
  let bigWord = phraseSplit.Aggregate("", (p1, p2) => p1.Length > p2.Length ? p1 : p2);
  return bigWord;
  
  //trim().length > )
  }*/

//console.log(biggestWord("Encontre a maior palavra desta frase"));


//EXERCICIO 3



