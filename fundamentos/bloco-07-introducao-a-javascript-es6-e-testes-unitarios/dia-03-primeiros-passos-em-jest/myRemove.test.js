const myRemoveTests = require('./myRemove.js');

test('check if new Array does not include 3', () => {
  expect(myRemoveTests([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('check if new Array does not include 3', () => {
  expect(myRemoveTests([1,2,3,4], 3)).not.toEqual([1,2,3,4])
});

test('check if new Array does not include 3', () => {
  expect(myRemoveTests([1,2,3,4], 5)).toEqual([1,2,3,4]);
});




//VERSÕES ANTIGAS
//OBSERVAÇÃO: OS TESTES DOS TRÊS EXERCÍCIOS ESTAVAM NUM MESMO ARQUIVO DE TESTES! POR ISSO A SINTAXE DIFERENCIADA!!

/* describe('The function myRemove', () => {

  test('check if new Array does not include 3', () => {
    expect(() => {
      sumTests.myRemove([1, 2, 3, 4], 3);
      (newArr).toContain([1, 2, 4]);
    });
  });

})
 
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
});*/