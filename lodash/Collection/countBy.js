/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: collection创建一个由运行thru每个元素的结果生成的键组成的对象iteratee。每个键对应的值是该键被返回的次数iteratee。迭代器通过一个参数调用：(value)。
 */

import _ from "lodash";

const res1 = _.countBy([6.1, 4.2, 6.3], Math.floor);
console.log("[ res1 ]", res1); // 输出 {4: 1, 6: 2}

const res2 = _.countBy(["one", "two", "three"], "length");
console.log("[ res2 ]", res2);  // 输出 {3: 2, 5: 1}
