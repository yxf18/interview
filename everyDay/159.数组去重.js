// Problem: 数组去重
const array = [1, 2, 3, 1, 9, 1, 2, 8]
// @interview start

// 1. [...new Set()]
// 2. for
function unique1(arr) {
    const res = new Map();
    return arr.filter(a => !res.has(a) && res.set(a, 1))
}
console.log('[ unique1(array) ]', unique1(array))

// 3. 利用对象或者数组
// @interview end
