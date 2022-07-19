const sumTests = require('./sum.js');


// EXERCICIO 1
describe('The function sum', () => {
  it ('should equal 9 if 4 is added to 5', () => {
    expect(4 + 5).toEqual(9);
  });

  it ('should equal 0 if 0 is added to 0', () => {
    expect(0 + 0).toEqual(0);
  });

  it ('should return an error if 4 is added to "5"', () => {
    expect(() => sum(4+ "5").toThrow('parameters must be numbers'));
  });
});

//VERSÕES ANTIGAS

/* const sumTests = require('./sum.js');

describe('The function sum', () => {

  test('adds 4 and 5 equals 9', () => {
    expect(4 + 5).toEqual(9);
  });

  test('adds 0 and 0 equals 0', () => {
    expect(0 + 0).toEqual(0);
  });
});

//------------------------------------------

describe('The function sumTests', () => {

  test('check if parameters are not numbers', () => {
    expect(() => {
      sumTests.sumNumbers(4, "5"); 
      }).toThrow();    
    });
  }); */


