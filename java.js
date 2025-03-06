//window.prompt(" Type 'yes' to start the JavaScript calculation")


let result = document.getElementById("input");

function clearInput() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        alert("Invalid Input");
        clearInput();
    }
}

function mathFun(userTouch) {
    result.value += userTouch;
}
