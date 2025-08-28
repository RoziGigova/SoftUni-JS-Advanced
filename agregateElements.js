function agregateElements (arr) {
    
    function summing () {
        let sum = 0;
        for (let el of arr) {
            sum = sum + el;
        }
        return sum;
    }
    
    function summing1 () {
        let sum1 = 0;
        for (let el of arr) {
            sum1 = sum1 + 1/el;
        }
        return sum1;
    }
    function concatenation () {
        let concat = "";
        for (let el of arr) {
            concat = concat + el;
        }
        return concat;
    }
console.log (summing ());
console.log (summing1 ());
console.log (concatenation ());  
}
agregateElements ([1,2,3]);
// agregateElements ([3,8,7]);
