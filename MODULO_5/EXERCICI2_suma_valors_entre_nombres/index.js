function getSumNumbers() {
    const firstNumber = Number(prompt('Enter first Number'));
    const lastNumber = Number(prompt('Enter last Number'));
    arrayNumbers = calculateArray(firstNumber, lastNumber);
    result = sumNumbersArray(arrayNumbers);
    console.log(arrayNumbers)
    console.log(result)
    showResult(result)
}
function calculateArray(first, last) {
    const array1 = [];
    for (i = first; i <= last; i++) {
        array1.push(i)
    }
    return array1
}
function sumNumbersArray(array) {
    let resultSuma = 0
    for (i = 0; i < array.length; i++) { resultSuma = resultSuma + array[i] }
    return resultSuma
}
function showResult(result){
document.getElementById('results').innerHTML=`El resultado de sumar todo el array es ${result}`
}