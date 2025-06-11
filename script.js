const container = document.getElementById('container');
const gridSizeBtn = document.getElementById('grid-size');

const promptGridSize = () => {
  const input = prompt('Enter grid size (max 100):');
  const size = parseInt(input, 10);

  if (isNaN(size) || size < 1 || size > 100) {
    alert('Invalid input! Please enter a number between 1 and 100.');
    return;
  }

  createGrid(size);
};

const createGrid = (size) => {
  container.innerHTML = ''; // Clear previous grid

  const containerSize = 400; // px
  const cellSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    cell.addEventListener('mouseover', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(cell);
  }
};

gridSizeBtn.addEventListener('click', promptGridSize);
