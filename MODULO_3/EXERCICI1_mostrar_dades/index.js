varName=prompt('Enter NAME');
varSurname=prompt('Enter SURNAME');
varAge=prompt('Enter AGE')
console.log(`You are ${varName} ${varSurname}, and your age is ${varAge}`)
alert(`You are ${varName} ${varSurname}, and your age is ${varAge}`);
document.getElementById("nameSurnameAge").innerHTML=`You are ${varName} ${varSurname}, and your age is ${varAge}`;
//Ojo con el orden de carga del script y del html
