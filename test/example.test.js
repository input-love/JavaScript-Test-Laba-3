const assert = require('assert');
const findCountOfElements = require('../app.js');

describe('findCountOfElements', () => {
  it('Должно вернуть количество элементов, превышающих предыдущий', () => {
    console.log('Test 1');
    assert.strictEqual(findCountOfElements(5, [1, 2, 3, 4, 5]), 4);

    console.log('Test 2');
    assert.strictEqual(findCountOfElements(5, [-1000, 567, 3, 27, 5]), 2);

    console.log('Test 3');
    assert.strictEqual(findCountOfElements(5, [567, 3, 1000, 23, 5]), 1);
  });

  it('Должно вызывать ошибку при недопустимом размере', () => {
    console.log('Test 4');
    assert.throws(() => findCountOfElements('str', [2, 3]), { name: 'Error', message: '-1001' });

    console.log('Test 5');
    assert.throws(() => findCountOfElements(0, [2, 3]), { name: 'Error', message: '-1002' });

    console.log('Test 6');
    assert.throws(() => findCountOfElements(10001, [23, -10, 67]), { name: 'Error', message: '-1002' });
  });

  it('Должно вызывать ошибку при недопустимых данных', () => {
    console.log('Test 7');
    assert.throws(() => findCountOfElements(5, 'fr', 567, 56, 89, 127), { name: 'Error', message: '-1001' });

    console.log('Test 8');
    assert.throws(() => findCountOfElements(5, [567, 34.8, 56, 89, 127]), { name: 'Error', message: '-1001' });

    console.log('Test 9');
    assert.throws(() => findCountOfElements(5, [567, 56, '=', 78, -20]), { name: 'Error', message: '-1001' });
  });

  it('Должно вызывать ошибку при данных вне диапазона', () => {
    console.log('Test 10');
    assert.throws(() => findCountOfElements(5, [29, 89, 56, 24, 1001]), { name: 'Error', message: '-1002' });

    console.log('Test 11');
    assert.throws(() => findCountOfElements(5, [29, 89, 56, 24, -1001]), { name: 'Error', message: '-1002' });
  });
});
