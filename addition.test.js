const { calculerAddition, appliquerReduction } = require('./addition');

describe('Tests du système d\'addition', () => {
  
  test('calcule correctement l\'addition avec un plat à 15€ et une boisson à 5€', () => {
    expect(calculerAddition(15, 5)).toBe(20);
  });

  test('applique correctement une réduction de 10% sur 100€', () => {
    expect(appliquerReduction(100, 10)).toBe(90);
  });

  test('applique correctement une réduction de 20% sur 50€', () => {
    expect(appliquerReduction(50, 20)).toBe(40);
  });

  test('calcul complet : addition + réduction fidélité', () => {
    const total = calculerAddition(15, 5); // 20€
    const avecReduction = appliquerReduction(total, 10); // 18€
    expect(avecReduction).toBe(18);
  });

});