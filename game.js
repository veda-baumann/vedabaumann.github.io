const PREVIEW_CELL = 20; // smaller size for preview pieces
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const piecesContainer = document.getElementById("pieces");

const GRID_SIZE = 10;
const CELL = 40;

let board = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
let score = 0;

// Create score display
const scoreDisplay = document.createElement("h2");
scoreDisplay.innerText = "Score: 0";
document.body.insertBefore(scoreDisplay, canvas);

function updateScore(points) {
  score += points;
  scoreDisplay.innerText = "Score: " + score;

  // Change color based on score
  if (score < 50) {
    scoreDisplay.style.color = "white";
  } else if (score < 100) {
    scoreDisplay.style.color = "light yellow";
  } else {
    scoreDisplay.style.color = "light green";
  }
}

const SHAPES = [
  [[1, 1, 1]],
  [[1], [1], [1]],
  [[1, 1], [1, 1]],
  [[1, 1, 1], [0, 1, 0]],
  [[1, 0], [1, 0], [1, 1]]
];

function updateScore(points) {
  score += points;
  scoreDisplay.innerText = "Score: " + score;
}

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      ctx.strokeStyle = "rgb(243, 224, 224)";
      ctx.strokeRect(c * CELL, r * CELL, CELL, CELL);

      if (board[r][c]) {
        ctx.fillStyle = "#d87cf4";
        ctx.fillRect(c * CELL + 2, r * CELL + 2, CELL - 4, CELL - 4);
      }
    }
  }
}

function createPiece(shape) {
  const piece = document.createElement("canvas");
  const pCtx = piece.getContext("2d");

  piece.width = shape[0].length * PREVIEW_CELL;
  piece.height = shape.length * PREVIEW_CELL;
  piece.draggable = true;

  shape.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell) {
        pCtx.fillStyle = "#31024f";
        pCtx.fillRect(
          c * PREVIEW_CELL + 1,
          r * PREVIEW_CELL + 1,
          PREVIEW_CELL - 2,
          PREVIEW_CELL - 2
        );
      }
    });
  });

  piece.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("shape", JSON.stringify(shape));

    // 👇 This centers the drag image so placement feels natural
    e.dataTransfer.setDragImage(
      piece,
      piece.width / 2,
      piece.height / 2
    );
  });

  piecesContainer.appendChild(piece);
}

function spawnPieces() {
  piecesContainer.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    createPiece(shape);
  }
}

// 🔧 FIXED DROP ACCURACY
canvas.addEventListener("dragover", (e) => e.preventDefault());

canvas.addEventListener("drop", (e) => {
  e.preventDefault();

  const shape = JSON.parse(e.dataTransfer.getData("shape"));
  const rect = canvas.getBoundingClientRect();

  // Adjusted accurate grid position
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const gridX = Math.floor(mouseX / CELL);
  const gridY = Math.floor(mouseY / CELL);

  if (canPlace(shape, gridX, gridY)) {
    placeShape(shape, gridX, gridY);
    const linesCleared = clearLines();
    updateScore(5 + linesCleared * 10);
    drawBoard();
    spawnPieces();
  }
});

function canPlace(shape, x, y) {
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (shape[r][c]) {
        let br = y + r;
        let bc = x + c;

        if (
          br < 0 ||
          bc < 0 ||
          br >= GRID_SIZE ||
          bc >= GRID_SIZE ||
          board[br][bc]
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

function placeShape(shape, x, y) {
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (shape[r][c]) {
        board[y + r][x + c] = 1;
      }
    }
  }
}

function clearLines() {
  let lines = 0;

  // Clear rows
  for (let r = 0; r < GRID_SIZE; r++) {
    if (board[r].every(cell => cell === 1)) {
      board[r] = Array(GRID_SIZE).fill(0);
      lines++;
    }
  }

  // Clear columns
  for (let c = 0; c < GRID_SIZE; c++) {
    let full = true;
    for (let r = 0; r < GRID_SIZE; r++) {
      if (!board[r][c]) {
        full = false;
        break;
      }
    }
    if (full) {
      for (let r = 0; r < GRID_SIZE; r++) {
        board[r][c] = 0;
      }
      lines++;
    }
  }

  return lines;
}
canvas.addEventListener("drop", (e) => {
  e.preventDefault();

  const shape = JSON.parse(e.dataTransfer.getData("shape"));
  const rect = canvas.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Center placement based on shape size
  const gridX = Math.floor(mouseX / CELL) - Math.floor(shape[0].length / 2);
  const gridY = Math.floor(mouseY / CELL) - Math.floor(shape.length / 2);

  if (canPlace(shape, gridX, gridY)) {
    placeShape(shape, gridX, gridY);
    const linesCleared = clearLines();
    updateScore(5 + linesCleared * 10);
    drawBoard();
    spawnPieces();
  }
});
drawBoard();
spawnPieces();