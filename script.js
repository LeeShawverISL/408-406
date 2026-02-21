// 1. Find the elements
const startBtn = document.getElementById('start-btn');
const music = document.getElementById('bg-music');
const storyBox = document.getElementById('fr-story-display');

// 2. Add the "Click" instruction
startBtn.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('whiteboard-FR.jpg')";
    music.play();
    
    // Optional: Lower the volume so it's not too loud (0.0 to 1.0)
    music.volume = 0.4;

    // Transition to the next part of your game
    storyBox.style.display = 'none'; 
    document.getElementById('fr-puzzle-area').classList.remove('hidden');
    console.log("Music started and story hidden!");
});