/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 创建一个元素数组，分为长度为 的组size。如果array不能均匀分割，则最终的块将是剩余的元素。
 */

import _ from "lodash";

console.log('[ _.chunk(["a", "b", "c", "d"], 2) ]', _.chunk(["a", "b", "c", "d"], 2));
// => [['a', 'b'], ['c', 'd']]

console.log('[ _.chunk(["a", "b", "c", "d"], 3) ]', _.chunk(["a", "b", "c", "d"], 3));
// => [['a', 'b', 'c'], ['d']]
