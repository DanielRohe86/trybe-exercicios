//EXERCICIO 1

/* const fatorialNumber = number => {
  if (number > 1) {
    return number * fatorialNumber(number-1)
  }
  return number;
} */


/* const fatorialNumber = numero => {
  let num = 1;
  for (let i = numero; i > 1; i--) {
      num *= i;
  }
  return num;
}
*/

//EXERCICIO 1 COM OPERADOR TERNÁRIO - DIFERENTE DO GABARITO
/* const fatorialNumber = number => {
if (number < 0) return false;
return number === 0 ? 1 : number * fatorialNumber(number - 1);
};

console.log(fatorialNumber(5));
console.log(fatorialNumber(6)); */


/////////////Antigo

//PARTE 2

//EXERCÍCIO 1

/* const fatorialNumber = number => {

  let result = number;
  for (let i = 1; i < number; i += 1) {
    result *= i;
  }
  return result;
}
console.log(fatorialNumber(5));*/


/* 

const factorial = n => {
//(n === 1 || n === 0) ? 1 : n * factorial(n - 1);
  if (n === 0) {
  return 1;
  } else {  
  return n * factorial(n - 1);
  }
} 

console.log(factorial(7));
 */



///////////////////////EXERCICIO 2

/* let string = "Bom dia a todos!";*/

//DUVIDA RETORNA UNDEFINED
/* const longestWord = string => {
let longest = "";

string.split(" ").forEach(word => {
  if (word.trim().length > longest.length) {
    longest = word.trim();
    }
  return longest;
  });
}


console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

 */
/* const longestWord = string => {
  
  const splitString = string.split(' ');
  let maxLength = 0;
  let longest = '';

  for (const word of splitString) {
      if (word.length > maxLength) {
        maxLength = word.length;
        longest = word; 
    }
  }

  return longest;

}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); */

//VERSÃO ANTIGA

/* const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";
let big = "";

phrase.split(" ").forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});

console.log(big);
 */

// COM FUNÇÃO
/* const bigWord = phrase => {
  phrase.split(" ").forEach(word => {
    if (word.trim().length > big.length) {
      big = word.trim();
    }
  });
    console.log(big);
} */


//ESSA NÃO FUNCIONA
/* 
const biggestWord = phrase => {
  let phraseSplit = phrase.split(' ');
  let bigWord = phraseSplit.Aggregate("", (p1, p2) => p1.Length > p2.Length ? p1 : p2);
  return bigWord;
  
  //trim().length > )
  }

console.log(biggestWord("Encontre a maior palavra desta frase"));
  */

//refatora o gabarito

/* const longestWord = (text) => {
  const wordArray = text.split(' ');
  let result = '';

  for (const word of wordArray) {
      if (word.length > 0) {
        result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu')); */

//EXERCICIO 3

//ESTÁ NO HTML

//EXERCÍCIO 4
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = 'Minhas três principais habilidades são:';

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));
