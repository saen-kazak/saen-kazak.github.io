const NONE = 0;
const YELLOW = 1;
const RED = 2;

// Images for each state
const images = [
    "images/blank.png",
    "images/yellow.png",
    "images/red.png"
];

// Load saved states from localStorage
const saved = localStorage.getItem("cards");

const states = saved
    ? JSON.parse(saved)
    : [NONE, NONE, NONE, NONE];

// Get every card element
const cards = document.querySelectorAll(".card");

// Initialise cards
cards.forEach(card => {

    const index = Number(card.dataset.index);

    updateCard(card, states[index]);

    card.addEventListener("click", () => {

        // Cycle Blank -> Yellow -> Red -> Blank
        states[index] = (states[index] + 1) % 3;

        updateCard(card, states[index]);

        // Save updated states
        saveStates();

    });

});

// Updates the displayed image
function updateCard(card, state) {
    card.src = images[state];
}

// Saves to browser storage
function saveStates() {
    localStorage.setItem("cards", JSON.stringify(states));
}

fetch("https://cards-api.saenkazak.workers.dev")
    .then(r => r.json())
    .then(console.log)
    .catch(console.error);