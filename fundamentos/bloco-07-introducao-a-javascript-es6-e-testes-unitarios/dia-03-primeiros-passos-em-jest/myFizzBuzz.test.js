const myFuzzBuzzTests = require('./myFizzBuzz.js');

test('check if 15 returns fizzbuzz', () => {
  expect(myFuzzBuzzTests(15)).toBe('fizzbuzz');
});

test('check if 3 returns fizz', () => {
  expect(myFuzzBuzzTests(3)).toBe('fizz');
});

test('check if 10 returns buzz', () => {
  expect(myFuzzBuzzTests(10)).toBe('buzz');
});

test('check if 4 returns "" ', () => {
  expect(myFuzzBuzzTests(4)).toBe(4);
});




/////////////////////////////////////////////////////////////////////////////////////////////// EXERCICIO 3


//VERSÕES ANTIGAS
//------------------------------------------ 
//ERRO
//Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder.

/* describe('The function fizzbuzz', () => {

  test('check if 15 returns fizzbuzz'), () => {
    expect(() => {
    sumTests.myFizzBuzz('15').toEqual('fizzbuzz');
    /*  sumTests.myFizzBuzz();
    expect('15').toEqual('fizzbuzz');
  });
};

//------------------------------------------ 
 */

