/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 创建一个包含在所有给定数组中的唯一值数组，用于SameValueZero相等比较。结果值的顺序和引用由第一个数组确定
 * @effect:【求交集】 与 difference 相反
 */
import _ from "lodash";
/* ================== intersection ================== */
{
  _.intersection([2, 1], [2, 3]);
  // => [2]
}
/* ================== intersectionBy ================== */
// 此方法与此类似_.intersection，只是它接受iteratee为每个元素调用哪个arrays以生成比较它们的标准。结果值的顺序和引用由第一个数组确定。迭代器通过一个参数调用：
{
  _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  // => [2.1]

  // The `_.property` iteratee shorthand.
  _.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
  // => [{ 'x': 1 }]
}

/* ================== intersectionWith ================== */
// 此方法与类似_.intersection，只是它接受comparator调用哪个来比较 的元素arrays。结果值的顺序和引用由第一个数组确定。使用两个参数调用比较器：(arrVal, othVal)。
{
  var objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  var others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];
  const res1 = _.isEqual(objects[0], others[0]);
  console.log("[ res1 ]", res1);

  const res = _.intersectionWith(objects, others, _.isEqual);
  console.log("[ res ]", res);
  // => [{ 'x': 1, 'y': 2 }]
}
