// JSON fájl betöltése
async function loadData(url) {
    let resp = await fetch(url);
    if (!resp.ok) throw new Error(`Failed to fetch '${url}': ${resp.statusText}`);
    return await resp.json();
}

function buildNavigation(data) {
    
}

function buildSections(data) {

    let sections = Object.keys(data).map(
        key => {
            let s = document.createElement('section')
            s.id = key
            return s;
        });
        
    let main = document.querySelector('#content');
    for (let s of sections) {
        main.appendChild(s);
    }

    for (let key in data) {
        let section = document.querySelector(`#${key}`);
        if (section) {
            section.innerHTML = `<h2 class="addTitle">${key}</h2>`;
            let ul = document.createElement('ul');

            for (let kulcs in data[key]) {
                let li = document.createElement('li');
                li.textContent = `${kulcs}: ${data[key][kulcs]}`;
                ul.appendChild(li);
            }
            section.appendChild(ul);
        }
        else {
            section.innerHTML = `<h2 class="addTitle">${key}</h2><p>${data[key]}</p>`;
        }
    }
}

function buildPage(data) {
    buildNavigation(data)
    buildSections(data)
}

async function main() {
    try {
        const data = await loadData("js-built-in.json");
        buildPage(data)
        console.log(data)
    } catch (err) {
        alert(err)
    }
}

main();
//window.addEventListener("load", main);