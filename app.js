let addness = 0;
naming();
addEventListenerInput();

function add() {
    let tfoot = document.querySelectorAll("tbody");
    for (let j = 0; j < 4; j++) {
        addInput(tfoot[j]);
    }
    for (let j = 4; j < 6; j++) {
        addInputForData(tfoot[j]);
    }
    addInputForDataArr(tfoot[6]);
}

function addInput(tbody) {
    let tr = createEl("tr");
    let td1 = tr.appendChild(createEl('td'));
    let td2 = tr.appendChild(createEl('td'));
    let input1 = td1.appendChild(createEl('input'));
    let input2 = td2.appendChild(createEl('input'));
    input1.name = `addness-${addness}`;
    addness++;
    input2.name = `addness-${addness}`;
    addness++;
    addEventListenerInputSpec(input1);
    addEventListenerInputSpec(input2);
    input1.maxLength = 3;
    input2.maxLength = 3;
    tbody.appendChild(tr);

}

function addInputForData(tbody) {
    let tr = createEl("tr");
    let td1 = tr.appendChild(createEl('td'));
    let input1 = td1.appendChild(createEl('input'));
    input1.name = `addness-${addness}`;
    addness++;
    input1.maxLength = 3;
    addEventListenerInputSpec(input1);
    tbody.appendChild(tr);
}

function addInputForDataArr(tbody) {
    let tr = createEl("tr");
    for (let x = 6; x < 17; x++) {
        let td = tr.appendChild(createEl('td'));
        let input = td.appendChild(createEl('input'));
        input.name = `addness-${addness}`;
        addness++;
        input.maxLength = 3;
        addEventListenerInputSpec(input);
    }
    tbody.appendChild(tr);
}

function createEl(el) {
    let newEl = document.createElement(el);
    return newEl;
}


function d() {
    let tbodies = document.querySelectorAll("tbody");
    for (let tbody of tbodies) {
        tbody.lastElementChild.remove();
    }
    addness -= 21;
}

function naming() {
    let inputs = document.querySelectorAll('input');
    for (input of inputs) {
        input.name = `addness-${addness}`
        input.maxLength = 3;
        addness++;
    }
}

function addEventListenerInput() {
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('change', () => {
            if (input.value[input.value.length - 1] != "h")
                input.value = `${input.value}h`;

        }
        );
    }
}

function addEventListenerInputSpec(input) {
    input.addEventListener('change', () => {
        input.value = `${input.value}h`;
    }
    )
}