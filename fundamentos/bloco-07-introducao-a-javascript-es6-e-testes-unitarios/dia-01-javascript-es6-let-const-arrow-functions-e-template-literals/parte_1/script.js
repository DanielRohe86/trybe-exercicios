//PARTE 1

//EXERCÍCIO 1

/* const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
// console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

testingScope(true); */

//EXERCÍCIO 2

//VERSÃO NOVA DO CÓDIGO

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compareNumbers = (a, b) => a - b;

oddsAndEvens.sort(compareNumbers);


console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
 */

//VERSÃO ANTIGA DO CÓDIGO

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let orderedArray = oddsAndEvens.sort((a,b) => a - b);

//"Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!"

console.log(`Os números ${orderedArray} se encontram ordenados de forma crescente!`); */

//MODIFICANDO O EXERCÍCIO BÔNUS COM CALLBACK
/*
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const callback = (a,b) => a - b;

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort(callback);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);*/