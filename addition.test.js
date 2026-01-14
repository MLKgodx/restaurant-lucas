// addition.test.js
const calculerAddition = require('./addition');

test('calcule correctement l\'addition avec un plat à 15€ et une boisson à 5€', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});