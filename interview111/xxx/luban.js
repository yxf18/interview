#! /usr/bin/env node

/*  1. 要求输出
    {
        ary1: [1,2,3,9,8,5,6,7]
        ary2: [1,2,3,5,6,7,8,9]
    }
*/
function getVal(arr) {
    // 1. 扁平化+过滤false值
    const ary1 = arr.flat(Infinity).filter(i => !!i);
    // 2. 升序
    const ary2 = [...ary1].sort((a, b) => a - b);
    return {
        ary1,
        ary2
    }
}

var result = getVal([1, 2, 3, [9, undefined, 8], 5, 6, 7]);
console.log('[ 1-result ]', result)


/* 4. js实现深拷贝（ >2 ）*/
console.log('[ 4-result ]', `
    1. JSON.parse(JSON.stringify(xxx)) 对数据有限制，例如null、undefinde、function等可能会出现和意向不一致的结果
    2. 使用递归，判断属性值是否为object类型
    3. 使用loash函数库中提供的_cloneDeep()方法 
`)

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

function treeToflattenTree(tree, path = '', flattened = []) {
    const { name, children } = tree;
    // 如果没有children，则将其名称与路径拼接并添加到新数组中
    if (!children || children.length === 0) {
        flattened.push({ name: `${path}/${name}` });
    } else {
        // 如果有children，则递归遍历每一项
        children.forEach((child) => {
            treeToflattenTree(child, `${path}/${name}`, flattened);
        });
    }

    return flattened;
}

var result = treeToflattenTree(treeSample);
console.log('[ 5-result ]', result)

// 6. 
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
        for (let i = 0; i < ajaxArray.length; i++) {
            promise = promise.then(ajaxArray[i]).then(res => {
                result.push(res)
            })
        }
        promise.then(() => {
            resolve(result)
        })
    })
}

executePromise([func1, func2]).then(data => {
    console.log('[ done ]');
    console.log('[ 6-data ]', data);
})

executePromise([func1, func2, func3]).then(data => {
    console.log('[ done ]');
    console.log('[ 6-data ]', data);
})


// 7. 
{
    const testURL = "http://www.lubansoft.com/?a=1&b=2&c=&d=xxx&e"

    function urlToObj(url) {
        const newUrl = new URL(url);
        const obj = new URLSearchParams(newUrl.search);
        return Object.fromEntries(obj.entries())
        // const res = Object.create(null);
        // for (const [key, value] of obj) {
        //     res[key] = value
        // }
        // return res;
    }
    var result = urlToObj(testURL);
    
    console.log('[ 7-result ]', result)
}


// 8. 水平垂直居中一个元素
// /* 假设 container 为父元素，box为子元素 */

// /* 1. grid布局（有兼容性问题） */
// .box{
//     display: grid;
//     place-content: center;
// }
// /* 2. flex布局 */
// .box{
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// /* 3. 定位 */
// .container{
//     position: relative;

// }
// .container .box{
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     margin: auto
// }

// /* 4. 如果已知box宽高 假如宽高100px */
// .box{
//     position: absolute;
//     /* margin-left: calc(50% - 50px); */
//     /* transform: translate(50%-50px,50%-50px); */
// }