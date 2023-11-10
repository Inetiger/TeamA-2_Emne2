"use strict";

function updateView() {
    let html = /*html*/ `
        <div>
            <input type="text" onchange="model.input = this.value, LeetSpeakConverter()" autofocus>
            <hr>
            <div>${model.end}</div>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}