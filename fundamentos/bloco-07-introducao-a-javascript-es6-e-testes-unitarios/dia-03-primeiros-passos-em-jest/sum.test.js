const sumTests = require('./sum.js');

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
  });


describe('The function myRemove', () => {

  test('check if new Array does not include 3', () => {
    expect(() => {
      sumTests.myRemove([1, 2, 3, 4], 3);
      (newArr).toContain([1, 2, 4]);
    });
  });

  test('check if new Array does not return 1, 2, 3, 4', () => {
    expect(() => {
      sumTests.myRemove([1, 2, 3, 4], 3);
      (newArr).not.toContain([1, 2, 3, 4]);
    });
  });

  test('check if new Array returns 1, 2, 3, 4', () => {
    expect(() => {
      sumTests.myRemove([1, 2, 3, 4], 5);
      (newArr).toContain([1, 2, 3, 4]);
    });
  });
});
//------------------------------------------ 
//ERRO
//Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder.

/* describe('The function fizzbuzz', () => {
 */
  test('check if 15 returns fizzbuzz'), () => {
    expect(() => {
    sumTests.myFizzBuzz('15').toEqual('fizzbuzz');
    /*  sumTests.myFizzBuzz();
    expect('15').toEqual('fizzbuzz'); */
  });
};

//------------------------------------------ 


