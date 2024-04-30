/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: array创建一个未包含在其他给定数组中的值数组，SameValueZero用于相等比较。结果值的顺序和引用由第一个数组确定。
 * @effect:【求差集-相对第一个数组】
 */

import _ from "lodash";
/* ================== difference ================== */
/* array创建一个未包含在其他给定数组中的值数组，SameValueZero用于相等比较。结果值的顺序和引用由第一个数组确定。
注意：与 不同_.pullAll，此方法返回一个新数组。 */
{
  const arr = _.difference([2, 1], [2, 3]);
  console.log(arr); // => [1]
}

/* ================== differenceBy ================== */
/* 此方法与此类似_.difference，只是它接受iteratee为 的每个元素调用的方法array，并values生成比较它们的标准。结果值的顺序和引用由第一个数组确定。迭代器通过一个参数调用：
(value)。

注意：与 不同_.pullAllBy，此方法返回一个新数组。 */
{
  const arr1 = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  console.log(arr1); // => [1.2]
  const arr2 = _.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
  console.log(arr2); // => [{ 'x': 2 }]
}

/* ================== differenceWith ================== */
/* 这个方法类似于 _.difference 接受调用比较器来将数组元素与值进行比较之外，差异。结果值的顺序和引用由第一个数组确定。比较器由两个参数调用: (arrVal，othVal)。

注意: 与 _. pullAllWith 不同，此方法返回一个新数组。 */

{
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];

  const arr = _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);
  console.log("[ differenceWith ]", arr); // => [{ x: 2, y: 1 }]
}
