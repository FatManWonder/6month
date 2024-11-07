const wordsToFind = ["LOVE", "HEART", "DATE", "ROMANTIC", "SMILE"];
let foundWords = [];

function generateBoard() {
    const board = document.getElementById("word-search-board");
    const gridSize = 10;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Clear previous board
    board.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
        const span = document.createElement("span");
        span.textContent = letters.charAt(Math.floor(Math.random() * letters.length));
        span.addEventListener("click", () => handleClick(span));
        board.appendChild(span);
    }
}

function handleClick(span) {
    const letter = span.textContent;
    for (const word of wordsToFind) {
        if (word.includes(letter) && !foundWords.includes(word)) {
            foundWords.push(word);
            document.getElementById("found-words").innerHTML = foundWords.map(word => `<li>${word}</li>`).join("");
        }
    }
}

generateBoard();
