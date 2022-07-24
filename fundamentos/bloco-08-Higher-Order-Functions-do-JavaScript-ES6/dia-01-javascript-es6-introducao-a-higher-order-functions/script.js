//EXERCICIO 1

/* const newEmployees = () => {
  const employees = {
    id1: nameAndEmail('Pedro Guerra'),
    id2: nameAndEmail('Luiza Drumond'),
    id3: nameAndEmail('Carla Paiva'),
  }
  return employees;
};

const nameAndEmail = (nome) => {
  const personalEmail = nome.toLowerCase().split(' ').join('_');  
  return {nome, email:  `${personalEmail}@trybe.com` }
}

console.log(newEmployees(nameAndEmail)); */


//EXERCICIO 2

// const checkNumber = (number, sortedNumber) => number === sortedNumber;
 

// const prizeResult = (number, theFunction) => {
//   const sortedNumber = Math.ceil(Math.random() * 5);
//   console.log(sortedNumber);

//   if (theFunction(number, sortedNumber) === true) {
//     return "Parabéns você ganhou"
//   } 
//     return "Tente novamente" 
// }

// console.log(prizeResult(5, checkNumber));

//EXERCICIO 3

/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const restult = STUDENT_ANSWERS.ForEach((answer, index) => {
  let nota = 0;
  if (answer[index] === RIGHT_ANSWERS[index]) {
    nota += 1;
  }
  if (answer[index] === 'N.A.') {
    nota = nota;
  }    
  if (answer[index] !== RIGHT_ANSWERS[index]) {
    nota -= 0.5
  }
  return nota;
})

console.log(STUDENT_ANSWERS(STUDENT_ANSWERS)) */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'N.A', 'N.A', 'A', 'D', 'N.A'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, callback) => {
  let nota = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const callbackEmAcao = callback(rightAnswers[index], studentAnswers[index]);
    nota += callbackEmAcao;
  }
  return `Resultado final: ${nota} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));