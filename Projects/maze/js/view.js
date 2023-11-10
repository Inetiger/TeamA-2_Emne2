"use strict";

function updateView() {
    let html = /*html*/ `
    <input type="text" onchange="model.input.sizeInput = this.value">
    <input type="button" value="bytt størrelse" onclick="model.data.mazeModel.size = model.input.sizeInput, initModel(model.data.mazeModel.size)">
    <table>
        ${createLabyrintRows()}
    </table>
    `;
    document.getElementById('app').innerHTML = html;
}