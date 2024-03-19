document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    const rgbDisplay = document.getElementById("rgb"); // Display for RGB value to guess
    const optionsContainer = document.getElementById("options"); // Container for color options
    const messageDisplay = document.getElementById("message"); // Display for feedback messages
    const livesDisplay = document.getElementById("lives-count"); // Display for remaining lives
    const replayBtn = document.getElementById("replay-btn"); // Replay button

    // Initialize game variables
    let lives = 3; // Initial lives count
    let score = 0; // Initial score

    // Generate an array of random colors
    const colors = generateRandomColors(6); // 6 options for colors

    let correctColor; // Variable to store the correct color for the current question

    // Initialize game when the DOM content is loaded
    init();

    // Function to initialize the game
    function init() {
        lives = 3; // Reset lives
        score = 0; // Reset score
        updateLives(); // Update lives display
        generateQuestion(); // Generate the first question
        displayOptions(); // Display color options
    }

    // Function to generate a random RGB color
    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256); // Random red value (0-255)
        const g = Math.floor(Math.random() * 256); // Random green value (0-255)
        const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
        return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
    }

    // Function to generate an array of random colors
    function generateRandomColors(num) {
        const colorsArray = []; // Initialize an empty array for colors
        for (let i = 0; i < num; i++) {
            colorsArray.push(generateRandomColor()); // Generate a random color and add it to the array
        }
        return colorsArray; // Return the array of random colors
    }

    // Function to generate a new question
    function generateQuestion() {
        correctColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a correct color
        rgbDisplay.textContent = correctColor; // Display the RGB value of the correct color
    }

    // Function to display color options
    function displayOptions() {
        optionsContainer.innerHTML = ""; // Clear previous options
        for (let i = 0; i < colors.length; i++) {
            const option = document.createElement("div"); // Create a new option element
            option.classList.add("option"); // Add 'option' class for styling
            option.style.backgroundColor = colors[i]; // Set background color for the option
            option.addEventListener("click", function() {
                // Add click event listener
                if (this.style.backgroundColor === correctColor) {
                    // If the clicked color is correct
                    messageDisplay.textContent = "Correct! Well done!"; // Display correct message
                    score++; // Increase the score
                    generateQuestion(); // Generate a new question
                    displayOptions(); // Display options again
                } else {
                    // If the clicked color is incorrect
                    messageDisplay.textContent = "Incorrect. Try again!"; // Display incorrect message
                    lives--; // Decrease remaining lives
                    updateLives(); // Update lives display
                    if (lives === 0) {
                        // If no lives left
                        endGame(); // End the game
                    }
                }
            });
            optionsContainer.appendChild(option); // Add option to options container
        }
    }

    // Function to update lives display
    function updateLives() {
        livesDisplay.textContent = lives; // Update lives count displayed
    }

    // Function to end the game
    function endGame() {
        messageDisplay.textContent = `Game over! Your score: ${score}`; // Display final score
        replayBtn.style.display = "block"; // Display replay button
    }

    // Event listener for replay button
    replayBtn.addEventListener("click", function() {
        init(); // Restart the game
        replayBtn.style.display = "none"; // Hide replay button
        messageDisplay.textContent = ""; // Clear previous messages
    });
});
