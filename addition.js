function calculerAddition(prixPlat, prixBoisson) {
  return prixPlat + prixBoisson;
}

function appliquerReduction(total, pourcentage) {
  return total - (total * pourcentage / 100);
}

module.exports = {
  calculerAddition,
  appliquerReduction
};