let correctAnswers = {
    "Afghanistan": "2", // Option correcte pour Afghanistan
    "Azerbaidjan": "5", // Option correcte pour Azerbaidjan
    "Kirghizistan": "1", // Option correcte pour Kirghizistan
    "Pakistan": "7", // Option correcte pour Pakistan
    "Tadjikistan": "6", // Option correcte pour Tadjikistan
    "Turkménistan": "3", // Option correcte pour Turkménistan
    "Ouzbékistan": "4"  // Option correcte pour Ouzbékistan
};

function validateAll() {
    let allCorrect = true;

    for (let country in correctAnswers) {
        let selectedOption = document.querySelector(`input[name="${country}"]:checked`);

        if (selectedOption) {
            let answer = selectedOption.value;
            if (answer === correctAnswers[country]) {
                markAsCorrect(country);
            } else {
                markAsIncorrect(country);
                allCorrect = false;
            }
        } else {
            alert(`Veuillez sélectionner une réponse pour ${country}`);
            allCorrect = false;
        }
    }

    if (allCorrect) {
        alert("Félicitations, toutes les réponses sont correctes !");
    } else {
        alert("Certaines réponses sont incorrectes. Essayez à nouveau.");
    }
}

function markAsCorrect(country) {
    const button = document.getElementById(`${country}-button`);
    button.style.backgroundColor = "lightgreen";
    button.textContent = `${country.charAt(0).toUpperCase() + country.slice(1)} (Correct)`;
}

function markAsIncorrect(country) {
    const button = document.getElementById(`${country}-button`);
    button.style.backgroundColor = "lightcoral";
    button.textContent = `${country.charAt(0).toUpperCase() + country.slice(1)} (Incorrect)`;
}
