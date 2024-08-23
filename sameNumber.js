function sameNumbers (num) {

    let numArray = num.toString().split ('').map(Number);
    let state = true
    let firstDigit=numArray[0]
    for (let i = 0; i <= numArray.length-2; i++) {
        if (numArray [i+1] != firstDigit){
            state = false
        }
    }
    let sum = 0;
    for (let i = 0; i <= numArray.length-1; i++) {
       sum += numArray [i]; 
    }

    console.log(state);
    console.log (sum);
    }
