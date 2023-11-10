"use strict";
let columnIndex = -1;
let rowIndex = -1;

function createLabyrintRows() {
    let rows = model.data.mazeModel.rows;
    let html = '';
    columnIndex = -1
    for (let row of rows) {
        columnIndex++;
        rowIndex = -1;
        html += '<tr>'
        for (let block of row) {
            rowIndex++;
            let tdBlock = `<td onclick="model.data.mazeModel.rows[${columnIndex}][${rowIndex}].isOpen = !model.data.mazeModel.rows[${columnIndex}][${rowIndex}].isOpen, updateView()" class="`;
            if (block.isHigh === true && block.isWide === true) {
                tdBlock += ' room'
            } else {
                if (block.isHigh === true) {
                    tdBlock += ' high'
                } else {
                    tdBlock += ' low'
                }
                if (block.isWide === true) {
                    tdBlock += ' wide'
                } else {
                    tdBlock += ' small'
                }
            }
            if (block.isOpen === false) {
                tdBlock += ' wall'
            } else {
                tdBlock += ' noWall'
            }
            html += tdBlock + '">';
        }
        html += '</tr>'
    }
    return html;
}



function initModel(numb) {
    let maze = [];
    let number = numb * 2 + 1;
    for (let i = 0; i < number; i++) {
        maze.push(createRow(number, i));
    }
    model.data.mazeModel.rows = maze;
    updateView();
}

function createRow(numb, index) {
    let maze = [];
    for (let i = 0; i < numb; i++) {
        if (index === 0 || index === numb - 1) {
            if (index % 2 === 0) {
                if (i % 2 === 0) {
                    maze.push({ isHigh: false, isWide: false, isOpen: false });
                } else {
                    maze.push({ isHigh: false, isWide: true, isOpen: false });
                }
            } else {
                if (i % 2 === 0) {
                    maze.push({ isHigh: true, isWide: false, isOpen: false });
                } else {
                    maze.push({ isHigh: true, isWide: true });
                }
            }
        } else {
            let randNumb = Math.floor(Math.random() * 5)
            let realRandNumb = Math.floor(Math.random() * index)
            let rand1 = false;
            let rand2 = false;
            let rand3 = false;
            if (randNumb === 0) { rand1 = !rand1 }
            if (randNumb === 1) { rand2 = !rand2 }
            if (realRandNumb === 1) { rand3 = !rand3 }
            if (i === 0 || i === numb - 1) {
                if (index % 2 === 0) {
                    if (i % 2 === 0) {
                        maze.push({ isHigh: false, isWide: false, isOpen: false });
                    } else {
                        maze.push({ isHigh: false, isWide: true, isOpen: false });
                    }
                } else {
                    if (i % 2 === 0) {
                        maze.push({ isHigh: true, isWide: false, isOpen: rand3 });
                    } else {
                        maze.push({ isHigh: true, isWide: true });
                    }
                }
            } else {
                if (index % 2 === 0) {
                    if (i % 2 === 0) {
                        maze.push({ isHigh: false, isWide: false, isOpen: false });
                    } else {
                        maze.push({ isHigh: false, isWide: true, isOpen: rand1 });
                    }
                } else {
                    if (i % 2 === 0) {
                        maze.push({ isHigh: true, isWide: false, isOpen: rand2 });
                    } else {
                        maze.push({ isHigh: true, isWide: true });
                    }
                }
            }
        }
    }
    return maze;
}