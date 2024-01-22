/*
 * @Author: yxf
 * @Description: 工具函数
 * @FilePath: /interview/utils.ts
 */

/**
 * @description: 数组深度扁平化
 * @param {*} 数组
 * @return {*} 
 */
function flattenDeep(arr: any[]) {
    let res: any[] = [];
    arr.forEach((i: number) => {
        if (Array.isArray(i)) {
            const flattenItem = flattenDeep(i);
            res.push(...flattenItem)
        } else {
            res.push(i)
        }
    })
    return res
}

const arr = [1, 2, [3, [4], 5], 6];
const res = flattenDeep(arr);
console.log('[ res ]', res) 