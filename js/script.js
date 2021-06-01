
for (i = 1; i <= 100; i++) {
    var generatorNumber = Math.floor( Math.random() * 100) + 1;
    if (generatorNumber % 3 === 0) {
        document.getElementById("number").innerHTML = generatorNumber + "FIZZ";
    } else if (generatorNumber % 5 === 0){
        document.getElementById("number").innerHTML = generatorNumber + "BUZZ";
    } else {
        generatorNumber % 3 === 0 && generatorNumber % 5 === 0;
        document.getElementById("number").innerHTML = generatorNumber + "FIZZBUZZ";
    }
}
