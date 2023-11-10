// Model
result = "";
index = 0;

// Controller

function addToResult(value) {
    result += value;
    displayResult(result);
}

function clearResult() {
    result = "";
    displayResult(result);
    indxe = 0;
}

function calculateResult() {
    try {
        result = eval(result);
        displayResult(result);
    } catch (error) {
        displayResult("Feil");
    }
}

function backlash() {
    if (result.length > 0) {
        result = result.slice(0, -1); // Fjern det siste tegnet
        displayResult(result);
    }
}


// View
function displayResult(result) {
    if (index == 3) {
        result += '.';
        index = 0;
    }
    index ++;
    document.getElementById("result").value = result;
}
