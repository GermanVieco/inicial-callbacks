function mainCalculate(){
const numberToDoubleAndTriple=document.getElementById('number1').value;
getDouble(numberToDoubleAndTriple)
getTriple(numberToDoubleAndTriple)
showResults(getDouble(numberToDoubleAndTriple),getTriple(numberToDoubleAndTriple));
}
function getDouble(number){
const numberDouble=number*2
return numberDouble
}
function getTriple(number){
const numberTriple=number*3
return numberTriple
}
function showResults(number1, number2){
document.getElementById('doble').innerHTML=`Double is ${number1}`;
document.getElementById('triple').innerHTML=`Triple is ${number2}`;
}