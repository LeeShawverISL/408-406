// 1. Find the elements
const startBtn = document.getElementById('start-btn');
const music = document.getElementById('bg-music');
const storyBox = document.getElementById('fr-story-display');

// 2. Add the "Click" instruction
startBtn.addEventListener('click', function () {
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
const validAnswers = [
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

let incorrectCount = 0;

submitBtn.addEventListener('click', function () {
    let rawInput = userInput.value;
    const playerGuess = rawInput
        .toLowerCase()
        .replace(/\n/g, " ")       // Turns "Enter" presses into a space
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ")
        .trim();                 // Removes spaces at the start/end

    console.log("Cleaned input for checking:", playerGuess);

    if (validAnswers.includes(playerGuess)) {
        console.log("Translation Accepted");

        // 1. IMPORTANT: Hide the puzzle box immediately
        document.getElementById('puzzle-container').classList.add('hidden');

        // 2. Start the FIRST transition (Scene 2)
        const scene2 = document.getElementById('victory-1');
        scene2.style.opacity = "1";

        // 3. Wait 3000ms (3 seconds) and then start the SECOND transition
        setTimeout(function () {
            const scene3 = document.getElementById('victory-2');
            scene3.style.opacity = "1";
            console.log("Final scene reached.");
        }, 3000);
    } else {
        // INCORRECT LOGIC
        incorrectCount++; // Add 1 to the counter
        console.log("Incorrect attempts:", incorrectCount);

        // Check if they've reached the limit
        if (incorrectCount === 5) {
            alert("Try opening a new browser tab and using Google Translate.");
        }

        // Visual feedback
        userInput.style.border = "2px solid red";
        userInput.placeholder = "Translation rejected. Try again.";
        userInput.value = "";
    }
});