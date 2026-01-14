function calculerAddition(prixPlat, prixBoisson) {
  return prixPlat - prixBoisson; // ❌ ERREUR : soustraction au lieu d'addition
}

module.exports = calculerAddition;
