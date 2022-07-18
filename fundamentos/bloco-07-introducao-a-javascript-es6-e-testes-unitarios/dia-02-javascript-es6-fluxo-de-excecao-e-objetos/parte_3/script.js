//VER EXERCÍCIO 5

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

////////////////////////////////////////////////////////////////////////////////////////////EXERCICIO 1
//Crie uma função para adicionar o turno da noite na lesson2. 
//Essa função deve possuir três parâmetros, sendo eles: 
//o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

//tentativa 1 - ADICIONA O TURNO, MAS APENAS COM UM PARÂMETRO
// const addShift = object => {
  
//   const nightShift = {
//     turno: 'noite'
//   }
  
//   Object.assign(object, nightShift)

//   return object;
// }

// console.log(addShift(lesson2));

//tentativa 2 - NÃO FUNCIONA

/* const newObject = (object, key, value) => {
  
  newObject = {key: value};

  Object.assign(object, newObject);
  
  return object;

}

console.log(newObject(lesson2, turno, noite)); */

//Gabarito com exercício extra de replicação do método
// const addNewKey = (obj, key, value) => {
//   obj[key] = value;
//   // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
// };

// addNewKey(lesson2, 'turno', 'noite');
// console.log(lesson2);


// let obj1 = {
//   a:1,
//   b:2
// }

// addNewKey(obj1, 'a', 10);
// console.log(obj1);

////////////////////////////////////////////////////////////////////////////////////////////EXERCICIO 2

//FUNCIONA

/* const returnKeys = object => Object.keys(object);

console.log(returnKeys(lesson1)); */

////////////////////////////////////////////////////////////////////////////////////////////EXERCICIO 3

//FUNCIONA

/* const objectLength = object => Object.keys(object).length;

console.log(objectLength(lesson1)); */

////////////////////////////////////////////////////////////////////////////////////////////EXERCICIO 4
/* 
const returnValues = object => Object.values(object);

console.log(returnValues(lesson1));
 */
////////////////////////////////////////////////////////////////////////////////////////////EXERCICIO 5

//NÃO FUNCIONA
//TERIA COMO REFATORAR?

/* const fillAllLessons = (object1, object2, object3) => {
  
  const fillLessonOne = Object.assign({}, object1)
  const fillLessonTwo = Object.assign({}, object2)
  const fillLessonThree = Object.assign({}, object3)

  return `lesson1: ${fillLessonOne}, 
  ${object2}: ${fillLessonTwo}.
  ${object3}: ${fillLessonThree}`

}

console.log(fillAllLessons(lesson1, lesson2, lesson3)); */

//GABARITO/* 

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });


// console.log(allLessons);

// console.log('------------');

////////////////////////////////////////////////////////////////////////////////////////////EXERCICIO 6

/* const allStudents = (obj) =>{

  let sum = 0;

  const array = Object.keys(obj);
  
  for (index = 0; index < array.length; index += 1) {
    sum += obj[array[index]].numeroEstudantes
  }
  return sum;
  
}

console.log(allStudents(allLessons)); */

/* const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2)); */

const verifyPair = (obj) => {
  const arr = Object.entries(obj);

  let arrValues = 0;

  for (let index = 0; index < arr.length; index += 1) {
    arrValues += arr[index];
  };
}

console.log(verifyPair(lesson1));