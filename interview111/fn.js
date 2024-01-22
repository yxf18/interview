// var values = [0, 3, 2, 5, 7, 4, 8, 1];
// values.sort((val1, val2) => val2 - val1);
// console.log('[ values ]', values)

function demo1() {
    var a = 10;
    function calc() {
        console.log(a); // undefined
        var a = 3;
        console.log(a); //3
        console.log(a + 3) //6
    }
    calc()
}
demo1();

function demo2 () {
    function calc () {
        console.log(a); // undefined
        var a = 3;
        console.log(a); // 3
        console.log(a + 3); // 6
    }
    calc()
}
demo2()
