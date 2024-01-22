#! /usr/bin/env node
// console.time('start');

// setTimeout(function() {
//   console.log(2);
// });

// setImmediate(function() {
//   console.log(1);
// });

// new Promise(function(resolve) {
//   console.log(3);
//   resolve();
//   console.log(4);
// }).then(function() {
//   console.log(5);
//   console.timeEnd('start')
// });

// console.log(6);

// process.nextTick(function() {
//   console.log(7);
// });

// console.log(8);

// 3 4 6 8 7 5 start 2 1

// const URL = "http://www.lubansoft.com/?a=1&b=2&c=&d=xxx&e"

// function urlToObj(url) {
//     const obj = new URLSearchParams(url);
//     const res = {};
//     for (const [key, value] of obj) {
//         res[key] = value
//     }
//     return obj;
// }
// var result = urlToObj(URL);
// console.log('[ result ]', result)

(() => {
    async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end')
    }
    async function async2() {
        console.log('async2')
    }
    console.log('script start')
    setTimeout(() => {
        console.log('settimeout')
    }, 0);
    async1()
    new Promise(resolve => {
        console.log('promise1')
        resolve();
        console.log('promise3')
    }).then(() => {
        console.log('promise2')
    });
    console.log('script end');
    /* 
    script start
    async1 start
    async2
    promise1
    promise3
    script end
    async1 end
    promise2
    settimeout
    */
    // })()
});

(() => {
    async function test1() {
        console.log('start test1');
        console.log(await test2())
        console.log('end test1')
    }
    async function test2() {
        console.log('test2');
        return await 'return test2 value'
    }
    test1()
    console.log('start async');
    setTimeout(() => {
        console.log('settimeout')
    }, 0);
    new Promise(resolve => {
        console.log('promise1');
        resolve();
    }).then(() => {
        console.log('promise2')
    })
    console.log('async end')

    /* 
    start test1
    test2
    start async
    promise1
    async end
    promise2
    return test2 value
    end test1
    settimeout
    */
})

const data = {
    label: "武汉市",
    children: [
        {
            label: '汉阳区',
            children: [
                { label: '永丰街道' },
                { label: '五里墩街道' }
            ]
        },
        {
            label: '江夏区',
            children: [
                { label: '山坡街道' },
                { label: '安山街道' }
            ]
        }
    ]
}

// 有chlidren[]

function test(data) {
    const rcc = (data) => {

    }

}

// 5. 树叶子结点转一维数组
/* 
// 转换为
const flattenTree = [
    { name: "leve11/leaf1" },
    { name: "leve11/leaf12/leaf2" },
    { name: "leve11/leaf12/leaf3" }
]
 */
const treeSample = {
    name: 'leve11',
    children: [
        { name: "leaf1" },
        {
            name: "leve12",
            children: [
                { name: "leaf2" },
                { name: "leaf3" }
            ]
        }
    ]
}
const flattened = []
function treeToflattenTree(tree, path = "") {
    const { name, children } = tree;
    if (children?.length) {
        children.forEach(child => {
            treeToflattenTree(child, `${path ? path + '/' : ''}${name}`)
        });
    } else {
        flattened.push({ name: `${path}/${name}` })
    }
    return flattened;
}

var result = treeToflattenTree(treeSample);
// console.log('[ result ]', result)

const timeoutVal = (ms, val) => new Promise(r => setTimeout(() => r(val), ms)).then(e => {
    console.log(e);
    return e
})
const func1 = () => timeoutVal(2000, 1);
const func2 = () => timeoutVal(1000, 2);
const func3 = () => timeoutVal(2000, 3);

const executePromise = (ajaxArray) => {
    return new Promise((resolve) => {
        let promise = Promise.resolve()
        let result = []
        ajaxArray.forEach(child => {
            promise = promise.then(child).then(res => {
                result.push(res)
            })
        })
        // for (let i = 0; i < ajaxArray.length; i++) {
        //     promise = promise.then(ajaxArray[i]).then(res => {
        //         result.push(res)
        //     })
        // }
        promise.then(() => {
            resolve(result)
        })
    })
}

executePromise([func1, func2]).then(data => {
    console.log('[ done ]');
    console.log('[ 6-data ]', data);
})

// executePromise([func1, func2, func3]).then(data => {
//     console.log('[ done ]');
//     console.log('[ 6-data ]', data);
// })