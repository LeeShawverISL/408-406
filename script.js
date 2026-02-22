// 1. Find the elements
const startBtn = document.getElementById('start-btn');
const music = document.getElementById('bg-music');
const storyBox = document.getElementById('fr-story-display');

// 2. Add the "Click" instruction
startBtn.addEventListener('click', function() {
    // 1. Change Background & Music
    document.body.style.backgroundImage = "url('whiteboard-FR.jpg')";
    music.play();

    // 2. Hide the Intro
    document.getElementById('fr-story-display').style.display = 'none';

    // 3. Show the Input Box
    document.getElementById('puzzle-container').classList.remove('hidden');
    
    // Pro-tip: Automatically put the cursor in the box
    document.getElementById('user-input').focus();
});

const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');

// The answer you are looking for
const correctTranslation = [
    "the inability to learn from history leads to the repetition of incidents",
    "failure to learn from history leads to the repetition of incidents",
    "failure to learn from history results in the repetition of incidents",
    "failure to learn from history causes the repetition of incidents",
    "the inability to learn from history leads to the repetition of incidents",
    "the inability to learn from history results in the repetition of incidents",
    "failure to learn from history leads to repeated incidents",
    "inability to learn from history causes repeated incidents",
    "the inability to learn from history leads to the repetition of events",
    "failure to learn from history leads to the repetition of events",
    "failure to learn from history results in the repetition of events",
    "failure to learn from history causes the repetition of events",
    "the inability to learn from history leads to the repetition of events",
    "the inability to learn from history results in the repetition of events",
    "failure to learn from history leads to repeated events",
    "inability to learn from history causes repeated events"    
];

submitBtn.addEventListener('click', function() {
    let rawInput = userInput.value;
    const playerGuess = rawInput
        .toLowerCase()             // Make it all lowercase
        .replace(/[^\w\s]|_/g, "") // REMOVES: . , ! ? : ; ( ) etc.
        .replace(/\s+/g, " ")      // Shrinks double spaces to a single space
        .trim();                   // Removes spaces at the start/end

    console.log("Cleaned input for checking:", playerGuess);

    if (playerGuess === correctTranslation) {
        console.log("Access Granted!");
        alert("Correct! The door clicks open...");
        // Here you would trigger the next scene/background
    } else {
        console.log("Access Denied");
        // Visual feedback: Make the input glow red
        userInput.style.borderColor = "red";
        userInput.placeholder = "Incorrect. Try again.";
        userInput.value = ""; // Clear the box for them
    }
});