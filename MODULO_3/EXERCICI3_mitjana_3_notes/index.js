/* let varAverage//Si la declaro global vacía y la reasigno en la función, 
se puede usar para más funciones. Pero MEJOR NO. PUEDE GENERAR ERRORES */

function average() {
    const varNumber1 = Number(document.getElementById('number1').value);
    const varNumber2 = Number(document.getElementById('number2').value);
    const varNumber3 = Number(document.getElementById('number3').value);

    const varAverage = ((varNumber1 + varNumber2 + varNumber3) / 3);
    return showAverage(varAverage)
}
function showAverage(average) {
    return document.getElementById('average').innerHTML = average
}
