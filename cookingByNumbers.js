function cookingNumbers (...input) {
    let command;
    let num = Number (input.shift());
    console.log (input);

    for (let i = 0; i < input.length; i ++) {
        let command = input [i];
        if (command == "chop") {
            num = num / 2;
            console.log (num);
        } else if (command == 'dice') {
            num = Math.sqrt(num);
            console.log (num);
        } else if (command == 'spice') {
            num = num + 1;
            console.log (num);
        } else if (command == 'bake'){
            num = num * 3;
            console.log (num);
        } else if (command == 'fillet') {
            num = num * 0.80;
            console.log (num);
        }
        
    } 
}


// cookingNumbers ('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers ('9', 'dice', 'spice', 'chop', 'bake',

'fillet');
