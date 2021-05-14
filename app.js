function addh() {
    let inputs = document.querySelectorAll("input");

}


let addness = 0;

function add() {
    let tfoot = document.querySelectorAll("tbody");
    for (let j = 0; j < 4; j++) {
        tfoot[j].appendChild(createEl('tr'));
        for (let i = 0; i < 2; i++) {
            tfoot[j].lastChild.appendChild(createEl('td'));
            tfoot[j].lastChild.children[i].appendChild(createEl('input'));
            tfoot[j].lastChild.children[i].lastChild.name = `addness-${addness}`
            addness++;
        }

    }
    for (let k = 4; k < 6; k++) {
        tfoot[k].appendChild(createEl('tr'));
        tfoot[k].lastChild.appendChild(createEl('td'));
        tfoot[k].lastChild.children[0].appendChild(createEl('input'));
        tfoot[k].lastChild.children[0].lastChild.name = `addness-${addness}`
        addness++;
    }
    for (let x = 6; x < 16; x++) {
        tfoot[x].appendChild(createEl('tr'));
        for (let y = 0; y < 11; y++) {
            tfoot[x].lastChild.appendChild(createEl('td'));
            tfoot[x].lastChild.children[y].appendChild(createEl('input'));
            tfoot[x].lastChild.children[y].lastChild.name = `addness-${addness}`
            addness++;
        }
    }

}


function createEl(el) {
    let newEl = document.createElement(el);
    return newEl;
}

function findLastTr(table) {
    let i = 0;
    let tables = document.querySelectorAll("table")[table].children;

    while (tables[tables.length - i].tagName != "tr") {
        tables = document.querySelectorAll("table")[table].children;
        tables = tables[tables.length - i];
        i++;
    }
    return tr;
}

function d() {
    for (let i = 0; i < 16; i++) {
        let tbody = document.querySelectorAll("tbody")[i];
        let tr = tbody.querySelectorAll("tr");

        tbody.removeChild(tr[tr.length - 1]);
    }

}