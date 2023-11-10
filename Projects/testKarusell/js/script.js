// Model
const app = document.getElementById('app');
let imagearray = ['', '', '',];
let imageindex = 1;
let page1 = '';
let page2 = '';
let page3 = '';

// View
updateView();
function updateView() {
    html = /*html*/ `
    index:
    ${imageindex} <br>
    array:
    ${imagearray.length} <br>
    <input type="button" value="minusOne" onclick="minusOne(), update()">
    <input type="button" value="plusOne" onclick="plusOne(), update()">
    <br>
    <input type="text" value="${page1}">
    <input type="text" value="${page2}">
    <input type="text" value="${page3}">
    `;
    app.innerHTML = html;
}

// Controler
function update() {
    if (imageindex === 0) {
        page1 = 'here';
        page2 = '';
        page3 = '';
    } else if (imageindex === 1) {
        page1 = '';
        page2 = 'here';
        page3 = '';
    } else if (imageindex === 2) {
        page1 = '';
        page2 = '';
        page3 = 'here';
    }
    updateView();
}

function plusOne() {
    imageindex = (imageindex + 1 < imagearray.length) ? imageindex + 1 : 0;
    
    // imageindex++;
    // imageindex = (imageindex % imagearray.length);
    
    
    // if (imageindex > imagearray.length - 1) imageindex = 1
    // else imageindex ++;
}

function minusOne() {
    imageindex = (imageindex - 1 >= 0) ? imageindex - 1 : imagearray.length - 1;

    // imageindex--;
    // imageindex = imageindex % imagearray.length;
    // if (imageindex < 0) imageindex = imagearray.length - 1;

    // if (imageindex < imagearray.length - 1) imageindex = imagearray.length
    // else imageindex --;
}