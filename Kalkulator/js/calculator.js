// Model
result = "";

// Controller

function addToResult(value) {
    result += value;
    displayResult(result);
}

function clearResult() {
    result = "";
    displayResult(result);
}

function calculateResult() {
    try {
        result = eval(result);
        displayResult(result);
    } catch (error) {
        displayResult("Feil");
    }
}

// View
function displayResult(result) {
    document.getElementById("result").value = result;
}
