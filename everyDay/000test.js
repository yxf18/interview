// Object.freeze()
const obj = {
    a: 1,
    b: 2
}

function myFreeze(obj) {
    if (obj instanceof Object) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                Object.defineProperty(obj, key, {
                    writable: false, // 能否被修改
                    // configurable: false, // 能否被delete
                    // enumerable: false, // 能否被遍历
                    // value: '',
                    // get: function () {},
                    // set: function () {}
                })
            }
        }
        Object.seal(obj) // 封闭对象属性的增加和删除
    }
}
myFreeze(obj)
obj.c = 4 // 增
delete obj.b // 删
obj.a = 3; // 该
console.log(obj)

// 迭代器
var iterable = {
    [Symbol.iterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 4) {
                    return {
                        value: this.i++,
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
};

for (var val of iterable) {
    console.log(val);
}

// 手写reduce
{
    const arr = [1, 2, 3, 4, 5];
    Array.prototype.$reduce = function (fn, prev) {
        let startIdx = 0;
        if (prev === undefined) {
            prev = this[0]
            startIdx = 1
        };
        for (let i = startIdx; i < this.length; i++) {
            prev = fn.call(this, prev, this[i])
        }
        return prev
    }
    const res = arr.$reduce((prev, cur) => {
        return prev + cur
    }, 10)
    console.log('[ reduce-res ]', res)
}

{
    const compose = function (...funcs) {
        let len = funcs.length,
            count = len - 1,
            result = null;
        // 首先compse 返回的是一个函数
        return function fn(...args) {
            // 函数体里就是不断执行args函数，将上一个函数的执行结果作为下一个执行函数的输入参数，需要一个count来记录args函数列表的执行情况
            result = funcs[count].apply(this, args);
            // 递归退出条件
            if (count <= 0) {
                count = len - 1;
                return result;
            } else {
                count--;
                return fn.call(null, result);
            }
        };
    };
    // 测试
    const greeting = (name) => `hello ${name}`;
    const toUpper = (str) => str.toUpperCase();
    const fn = compose(toUpper, greeting);
    console.log(fn("yideng"));
}

// 如何创建一个 ajax?
{
    // 以post请求为例子：
    // var xhr = null
    // if (XMLHttpRequest) {
    //     xhr = new XMLHttpRequest()
    // } else {
    //     // 兼容IE5、6
    //     xhr = new ActiveXObject("Microsoft.XMLHTTP")
    // }
    // // 2.设置请求方式及请求地址
    // xhr.open('post', 'url' + Date.now())
    // // 3.设置请求头，必须在open()和send()之间
    // xhr.setRequestHeader(
    //     'Content-Type',
    //     'application/x-www-form-urlencoded'
    // )
    // // 4.发送请求
    // xhr.send('param')
    // // 5.绑定事件监听
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         // 请求成功
    //         console.log('请求成功')
    //     } else {
    //         // 请求失败
    //         console.log('请求失败')
    //     }
    // }
}
// 模拟实现let
{

    (function _let(name, val) {
        var name = val;
    })('abc', 123)

    function _const(name, val) {
        Object.defineProperty(window, name, {
            enumerable: false,
            configurable: false,
            get() {
                return val
            },
            set(newVal) {
                throw new Error("不能修改值")
            }
        })
    }
}

// js模拟实现重载
// {
//     function addMethod(obj, name, fn) {
//         var old = obj[name];
//         obj[name] = function () {
//             if (arguments.length === fn.length) {
//                 fn.apply(this, arguments)
//             } else {
//                 old.apply(this, arguments)
//             }
//         }
//     }
//     addMethod(window, "fn", (name) => {
//         console.log(`我叫${name}`)
//     })
//     addMethod(window, "fn", (name, age) => {
//         console.log(`我叫${name}，今年${age}岁`)
//     })
//     addMethod(window, "fn", (name, age, sex) => {
//         console.log(`我叫${name}，今年${age}岁，性别${sex}`)
//     })

//     window.fn("王丽", 19)
//     window.fn("王丽")
//     window.fn("王丽", 20, "女")
// }

// redux-saga 如何处理并发
// {

//     // takeEvery,可以让多个 saga 任务并行被 fork 执行
//     import {
//         fork,
//         take
//     } from "redux-saga/effects";

//     const takeEvery = (pattern, saga, …args) =>
//         fork(function* () {
//             while (true) {
//                 const action = yield take(pattern);
//                 yield fork(saga, …args.concat(action));
//             }
//         });
//     // takeLatest,
//     // takeLatest不允许多个saga任务并行的执行。 一旦接收到新的发起的action， 它就会取消前面所有fork过的任务(如果这些任务还在执行的化)。 在处理ajax请求的时候， 如果我们只希望获取最后那个请求的响应， takeLatest就会非常有用
//     import {
//         cancel,
//         fork,
//         take
//     } from "redux-saga/effects";

//     const takeLatest = (pattern, saga, …args) =>
//         fork(function* () {
//             let lastTask;
//             while (true) {
//                 const action = yield take(pattern);
//                 if (lastTask) {
//                     yield cancel(lastTask); // 如果任务已经结束，则 cancel 为空操作
//                 }
//                 lastTask = yield fork(saga, …args.concat(action));
//             }
//         });
// }

//请实现一个 JSON.stringify
{

    JSON.myStringify = (function () {
        var toString = Object.prototype.toString;
        var isArray =
            Array.isArray ||
            function (a) {
                return toString.call(a) === "[object Array]";
            };
        var escMap = {
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
        };
        var escFunc = function (m) {
            return (
                escMap[m] ||
                "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1)
            );
        };
        var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
        return function stringify(value) {
            if (value == null) {
                return "null";
            } else if (typeof value === "number") {
                return isFinite(value) ? value.toString() : "null";
            } else if (typeof value === "boolean") {
                return value.toString();
            } else if (typeof value === "object") {
                if (typeof value.toJSON === "function") {
                    return stringify(value.toJSON());
                } else if (isArray(value)) {
                    var res = "[";
                    for (var i = 0; i < value.length; i++)
                        res += (i ? ", " : "") + stringify(value[i]);
                    return res + "]";
                } else if (toString.call(value) === "[object Object]") {
                    var tmp = [];
                    for (var k in value) {
                        if (value.hasOwnProperty(k))
                            tmp.push(stringify(k) + ": " + stringify(value[k]));
                    }
                    return "{" + tmp.join(", ") + "}";
                }
            }
            return '"' + value.toString().replace(escRE, escFunc) + '"';
        };
    })()

    const obj = {
        name: 'zs',
        age: 22
    };

    const res = JSON.myStringify(obj);
    console.log('[ JSON.myStringify(obj) ]', res)
}