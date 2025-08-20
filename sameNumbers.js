function sameNumber (number) {

    let input=number.toString()
    let firstDigit = input [0];
    let isEqual=true;
    let sum = 0;

for (let i = 0; i <input.length; i++) {
    if (isEqual && firstDigit != input [i]) {
        isEqual=false;
    }
    sum += Number (input [i]);
}


console.log(isEqual);
console.log (sum);
}

sameNumber(222282922);
