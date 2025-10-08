const size = 8;
const cellSize = 32;

window.addEventListener('load', (e) => {
    let grid = document.createElement('div');
    grid.className = 'board';
    grid.style.gridTemplate = `repeat(${size},1fr)/repeat(${size},1fr)`;

    for (let ci=0; ci<size*size; ci++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        grid.appendChild(cell);
    }

    document.body.appendChild(grid);
});