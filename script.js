// Fungsi operasi dasar
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Tampilan di layar
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Fungsi DEL untuk hapus
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1)
}

// Fungsi persen
function percent(expression) {
    return expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
}

// Fungsi jumlah akhir
function calculate() {
    const display = document.getElementById("display");
    try {
        const expression = percent(display.value)
        display.value = eval(expression);
    }
    catch {
        display.value = "Error";
    }
}