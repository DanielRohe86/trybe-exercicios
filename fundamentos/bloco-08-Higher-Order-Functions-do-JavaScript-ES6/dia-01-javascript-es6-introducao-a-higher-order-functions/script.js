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

/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
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

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers)); */

//Exercício Bônus

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// https://www.youtube.com/watch?v=djNgmZw6m3E
// random = Math.floor((Math.random() * (end - start) + start));

// //BONUS 1
// const dragonDamage = () => {  
//   const randomDmg = Math.floor(Math.random() * (dragon.strength -15) + 15);
//   return randomDmg;
// }

// console.log(`Dragon damage = ${dragonDamage()}`);

// //BONUS 2

// const warriorDamage = () => {  
//   const randomDmg = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
//   return randomDmg;
// }

// console.log(`Warrior damage = ${warriorDamage()}`);



// //BONUS 3

// const mageAttack = (mage) => {
//   const mageMana = mage.mana;
//   const minDmg = mage.intelligence;
//   const maxDmg = minDmg * 2;
//   const turnStats = {
//     manaSpent: 0,
//     damageDealt: 'Not enough mana...',
//   };

//   if (mageMana > 15) {
//     const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
//     turnStats.manaSpent = 15;
//     turnStats.damageDealt = mageDamage;
//     return turnStats;
//   };
// }

// console.log(mageAttack(mage));

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
  return dragonDmg;
};

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());