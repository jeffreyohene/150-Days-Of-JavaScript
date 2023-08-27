// pour un environnement navigateur web
const mot = prompt("Entrez votre mot s'il vous plaît :"); // Demande à l'utilisateur d'entrer un mot
function cestPalindrome(mot) {

    // Expression régulière pour supprimer la ponctuation et les espaces, et rendre insensible à la casse.
    const regex = /[^\w\s]+/g;

    const propreMot = mot.replace(regex, '').toLowerCase();

    let nouveauMot = propreMot.split('').reverse().join('');

    // Vérifie si le mot inversé est égal au mot nettoyé
    return nouveauMot === propreMot;
}

// Exemple
test = cestPalindrome("Lid off a daffodil"); // Appel de la fonction avec un exemple
console.log(test); // Affiche le résultat dans la console


// pour un environnement non navigateur web
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez votre mot s'il vous plaît: ", function(mot) {
  function cestPalindrome(mot) {
    // Code regex pour supprimer la ponctuation et les espaces
    const regex = /[^\w\s]+/g;

    // Nettoyer le mot en remplaçant les caractères non alphanumériques et en le mettant en minuscules
    const propreMot = mot.replace(regex, '').toLowerCase();

    // Inverser le mot nettoyé
    let nouveauMot = propreMot.split('').reverse().join('');

    // Vérifier si le mot inversé est égal au mot nettoyé
    return nouveauMot === propreMot;
  }

  // Fermer l'interface readline
  rl.close();
});