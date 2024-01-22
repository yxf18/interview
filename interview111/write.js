/**
 * @description: instanceof 原理
 */
// const instanceOf = (A, B) => {
//     let p = A
//     while (p) {
//         if (p === B.prototype) return true
//         p = p.__proto__;
//     }
//     return false
// }
// console.log(instanceOf([], Object))
// console.log(instanceOf(1, Number))

/**
 * @description: 手写promise
 */

/**
 * @description: 实现 add(1)(2)(3) 
 */

// const add = a => b => c => a + b + c;

function sum(...args) {
    //求和
    return args.reduce((a, b) => a + b)
}

function currying(fn) {
    let args = [];
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [...args, ...newArgs];
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}
// const add = currying(sum);
// console.log(add(1)(2)(3)(4)());
// console.log(add(1)(2, 2)(3)(4)());
// console.log(add(2, 2)(4)());

/**
 * @description: 数组转树结构
 * @param {*}
 * @return {*}
 */
const arr = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: "部门B", parentId: 1 },
    { id: 3, name: "部门C", parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 }
]

function arry2Tree(arr) {
    const idToTreeNode = new Map()
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        const { id, name, parentId } = arr[i];
        const treeNode = {
            id,
            name
        }
        idToTreeNode.set(id, treeNode);
        const parentNode = idToTreeNode.get(parentId);
        if (parentNode) {
            if (parentNode.children == null) parentNode.children = []
            parentNode.children.push(treeNode)
        }
        if (parentId === 0) root = treeNode
    }
    return root
}

const tree = arry2Tree(arr);
console.log('[ tree ]', tree)