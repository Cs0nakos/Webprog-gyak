import createConsole from "./console.js";

const _console = createConsole();
function onLoad(e)
{
    document.body.appendChild(_console);
}

window.addEventListener('load', onLoad);
window.addEventListener('unload', e => _console.remove());