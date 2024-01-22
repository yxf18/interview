// 【上海美浮特-现场笔试】(2023-06-05)

// 1. 去重
// 2. 手写深拷贝
function cloneDeep(obj, map = new WeakMap()) {
    if (!Boolean(obj) || typeof obj != 'object') return obj // null undefined 基础类型
    if (obj instanceof Date) return new Date(obj) // 日期
    if (obj instanceof RegExp) return new RegExp(obj) // 正则
    if (map.get(obj)) return map.get(obj) // 避免循环引用
    const cloneObj = new obj.constructor;

    map.set(obj, cloneObj)
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) cloneObj[key] = cloneDeep(obj[key], map) // 实现递归深拷贝
    }

    return cloneObj
}
const obj = {
    a: {
        b: 1
    },
    null: null, // null
    fn: function () {}, // 函数
    arr: [1, 2, 3, 4, 5], // 数组
    date: new Date(), // 日期、正则等复合类型
}
obj.deep = obj

const res = cloneDeep(obj);
obj.a.b = 99
console.log('[ 深拷贝-res ]', res)
// 3. 实现Promise.all