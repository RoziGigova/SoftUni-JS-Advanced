function upperCase (string) {


    let words = string.toUpperCase()
    .split(/\W+/)
    .join (', ')
    .toString()
    .replace(/, $/, "")
    console.log (words);
  

}
upperCase ('Hi, h 69 %^&*(_) owк жккк "vv" a. .re you?');
upperCase ('Hi, my - name is ; Brrrr!');
upperCase ('Functions in JS can be nested, i.e. hold other functions');
