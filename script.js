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
        console.log("✅ MATCH FOUND: Starting victory sequence...");

        // 1. Hide the puzzle box
        const puzzleBox = document.getElementById('puzzle-container');
        if (puzzleBox) {
            puzzleBox.classList.add('hidden');
            console.log("1. Puzzle container hidden.");
        } else {
            console.error("❌ ERROR: Could not find 'puzzle-container'");
        }

        // 2. Start the FIRST transition
        const scene2 = document.getElementById('victory-1');
        if (scene2) {
            console.log("2. victory-1 found. Current opacity:", getComputedStyle(scene2).opacity);
            scene2.style.opacity = "1";
            console.log("2. victory-1 opacity command sent. New opacity should be: 1");
        } else {
            console.error("❌ ERROR: Could not find 'victory-1'. Check your HTML IDs!");
        }

        // 3. Wait 3 seconds and start the SECOND transition
        console.log("3. Timer started: Waiting 3000ms...");
        setTimeout(function () {
            console.log("4. Timer finished! Triggering final scene...");
            const scene3 = document.getElementById('victory-2');
            if (scene3) {
                scene3.style.opacity = "1";
                console.log("4. victory-2 opacity set to 1.");
            } else {
                console.error("❌ ERROR: Could not find 'victory-2'");
            }
            console.log("🏁 Final scene sequence complete.");
        }, 3000);
} else {
        // --- THIS PART WAS MISSING ---
        incorrectCount++;
        console.log("❌ Incorrect attempts:", incorrectCount);

        if (incorrectCount === 5) {
            alert("Try opening a new browser tab and using Google Translate.");
        }

        userInput.style.border = "2px solid red";
        userInput.placeholder = "Translation rejected. Try again.";
        userInput.value = "";
    }
}); // This closing bracket and semicolon are crucial!