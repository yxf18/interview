// function sum(...rest) {
//     var sum = 0;
//     // for (let i = 0; i < rest.length; i++) {
//     //     sum += rest[i];
//     // }
//     for (const item of rest) {
//         sum += item
//     }
//     return sum;
// }

// console.log('[ sum(1,2,3)===6 ]', sum(1, 2, 3) === 6);
// console.log('[ sum(1,2,3,4)===10 ]', sum(1, 2, 3, 4) === 10)

// 5.
// function Ninja () {
//     this.whoAmI = ()=> this;
// }

// var ninja1 = new Ninja();
// console.log('[ ninja1.whoAmI() === ninja1 ]', ninja1.whoAmI() === ninja1)
// var ninja2 = {
//     whoAmI:ninja1.whoAmI
// }
// console.log('[ ninja2.whoAmI() === ninja2 ]', ninja2.whoAmI() === ninja2)

// this
// 'use strict';
// var a = 20;
// function foo() {
//   var a = 1;
//   var obj = {
//     a: 10,
//     c: this.a + 20,
//     fn: function () {
//       return this.a;
//     }
//   }
//   return obj.c;
// }
// // console.log(foo());    // ？
// console.log(window.a)

// function f1() {
//     return this;
// }
// console.log('[   f1() ]', f1()) //globalThis

// function fn(a) {
//     console.log('[ a1 ]', a);
//     var a = 123;
//     console.log('[ a2 ]', a)
//     function a() { }
//     console.log('[ a3 ]', a)
//     var b = function () { }
//     console.log('[ b ]', b)
//     function d() { }
// }
// fn(1)

// var x  = 1;
// if (function f(){}) {
//     x += typeof(f)
// }
// console.log('[ x ]', x)

// 闭包、作用域链
var arr = [];

for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log('[ i ]', i)
    }
    // (function (j) {
    //     arr[j] = function () {
    //         console.log('[ j ]', j)
    //     }
    // })(i)
};

for (const fn of arr) {
    fn()
}


console.log(1);
async function demo1() {
    console.log(11);
    await 2;
    console.log(111)
    return 1
}

async function demo2() {
    console.log(22);
    await 2;
    console.log(222)
    return 1
}

demo1();
demo2();
console.log(3);


var a = 5;
function test(){
    a=0;
    console.log('[ a ]', a);
    console.log('[ this.a ]', this.a)
    var a;
    console.log('[ a ]', a)
}

test()