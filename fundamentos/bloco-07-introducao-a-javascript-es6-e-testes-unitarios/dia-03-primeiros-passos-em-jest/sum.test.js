const sumTests = require('./sum.js');

test('adds 4 and 5 equals 9', () => {
  expect(4 + 5).toEqual(9);
});

test('adds 0 and 0 equals 0', () => {
  expect(0 + 0).toEqual(0);
});

//------------------------------------------

test('check if parameters are not numbers', () => {
  expect(() => {
    sumTests.sumNumbers(4, "5"); 
    }).toThrow();    
  });

//------------------------------------------ 

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

//------------------------------------------ 
//ERRO
test('check if 15 returns fizzbuzz'), () => {
  sumTests.myFizzBuzz(15);
  expect(() => {
  expect(15).toEqual('fizzbuzz');
});
};

