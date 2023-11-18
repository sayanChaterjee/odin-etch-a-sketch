document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  
  // Create a 16x16 grid
  for (let i = 0; i < 256; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      container.appendChild(cell);
  }

  // Add event listeners to change cell color on hover
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
      cell.addEventListener('mouseover', () => {
          cell.style.backgroundColor = 'black';
      });
  });
});
