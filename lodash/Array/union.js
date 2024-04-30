/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 【多数组去重】
 */
/* ================== union ================== */
// SameValueZero从用于相等比较的所有给定数组中按顺序创建唯一值数组。
{
  _.union([2], [1, 2]);
  // => [2, 1]
}

/* ================== unionBy ================== */
// 该方法与此类似_.union，只是它接受iteratee为每个元素调用哪个arrays来生成计算唯一性的标准。结果值是从该值出现的第一个数组中选择的。迭代器通过一个参数调用：
{
  _.unionBy([2.1], [1.2, 2.3], Math.floor);
  // => [2.1, 1.2]

  // The `_.property` iteratee shorthand.
  _.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
  // => [{ 'x': 1 }, { 'x': 2 }]
}

/* ================== unionWith ================== */
// 此方法与类似_.union，只是它接受comparator调用哪个来比较 的元素arrays。结果值是从该值出现的第一个数组中选择的。使用两个参数调用比较器：(arrVal, othVal)。
{
  var objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  var others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];

  _.unionWith(objects, others, _.isEqual);
  // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
}
