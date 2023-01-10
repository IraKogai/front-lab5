const body = document.querySelector('body');
let Valid = 1;
let errorFields = [];
let answers = [];
const answerDiv = document.createElement('div');
const task1 = document.getElementById('task1');

function onSubmit() {
clearInfo();
checkFields('name', 'ПІБ', /^[a-zA-ZА-Яа-яґҐєЄіІїЇ]+ [A-ZА-ЯҐЄІЇ]\. [A-ZА-ЯҐЄІЇ]\.$/);
checkFields('birthday', 'Дата народження', /^\d{2}.\d{2}.\d{4}$/);
checkFields('number', 'Номер телефону', /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/);
checkFields('faculty', 'Факультет', /^[А-ЯІіЇї]{4}$/);
checkFields('address', 'Адреса', /^м\. [a-zA-ZА-Яа-яґҐєЄіІїЇ]+$/);

if (Valid) {
answers.forEach(answer => answerDiv.appendChild(answer));
task1.appendChild(answerDiv); 
} else {
errorFields.forEach(errorField => {
const field = document.getElementById(errorField);
field.style.border = '2px red solid';
});
}
}

function checkFields(type, text, regex, additionalCheck = () => true) {
const valueFromElement = document.getElementById(type).value;
if (regex.test(valueFromElement) && additionalCheck(valueFromElement)) {
const answer = document.createElement('h4');
answer.innerHTML = `${text}: ` + valueFromElement;
answers.push(answer);
} else {
Valid *= 0;
errorFields.push(type);
}
}

function clearInfo() {
while (answerDiv.firstChild) answerDiv.removeChild(answerDiv.firstChild);
if (task1.querySelector('.answerDiv')) task1.removeChild(answerDiv);
errorFields.forEach(errorField => {
const field = document.getElementById(errorField);
field.style.border = '1px gray solid';
});
Valid = 1;
errorFields = [];
answers = [];
}

const VARIANT = 11;
for (let r = 0; r < 6; r++) {
    const rowElement = document.createElement('tr');
    for (let d = 0; d < 6; d++) {
    const index = String(d + 1 + (r * 6));
    const dataElement = document.createElement('td');
    dataElement.innerHTML = index;
    dataElement.id = index;
    rowElement.appendChild(dataElement);
    body.appendChild(rowElement);
    }
    }
    function onMouseClickCell(element) {
    element.style.background = document.getElementById('current_color').value;
    }
    function onDoubleClickCell() {
    const startColumn = VARIANT-4;
    for (let j = startColumn; j <= 36; j += 36) {
    for (let i = 0; i < 6; i++) {
    const currentElement = document.getElementById(String(j + i));
    currentElement.style.background = document.getElementById('current_color').value;
    }
    }
    }
    function onMouseOverRandomBg(element) {
    element.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ')';
    }

const elementByVariant = document.getElementById(String(VARIANT));
elementByVariant.onmouseover = () => {
onMouseOverRandomBg(elementByVariant);
};
elementByVariant.onmouseup = () => {
onMouseClickCell(elementByVariant);
};
elementByVariant.ondblclick = () => {
onDoubleClickCell();
};