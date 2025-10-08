function handleEvent(event) {

}

function createConsole() {
    let cns = document.createElement('console');
    let border = document.createElement('div');
    border.className = 'border';
    border.addEventListener('mousedown', handleEvent);
    border.addEventListener('mouseup', handleEvent);
    border.addEventListener('mouseout', handleEvent);
    cns.appendChild(border);
    let content = document.createElement('div');
    content.className = 'content';
    cns.appendChild(content);
    return cns;
}

export default createConsole;