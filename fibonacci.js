// Funktion zur Berechnung der Fibonacci-Folge
const fibonacci = function(anzahl) {
    if (anzahl < 0) return "Fehler";
    if (anzahl === 0) return 0;

    let ersteNum = 1;
    let zweiteNum = 0;
    
    for (let i = 2; i <= anzahl; i++) {
        let aktuel = ersteNum + zweiteNum;
        zweiteNum = ersteNum;
        ersteNum = aktuel;
    }

    return ersteNum;
};

// Exportieren der Funktion für die weitere Verwendung
module.exports = fibonacci;

// Beispiele
const achte = fibonacci(8); // Berechne die 8. Fibonacci-Zahl
console.log(achte); // Antwort: 21
