/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 删除用于相等比较的所有给定array值SameValueZero。
 * @effect:【自定义删除】
 */
import _ from "lodash";

/* ================== pull ================== */
// 删除用于相等比较的所有给定array值SameValueZero。
{
  let array = ["a", "b", "c", "a", "b", "c"];
  _.pull(array, "a", "c");
  console.log(array); // => ['b', 'b']
}

/* ================== pullAll ================== */
// 此方法与此方法类似_.pull，只是它接受要删除的值数组。
{
  let array = ["a", "b", "c", "a", "b", "c"];
  _.pullAll(array, ["a", "c"]);
  console.log(array); // => ['b', 'b']
}

/* ================== pullAllBy ================== */
// 此方法与此类似_.pullAll，只是它接受iteratee为 的每个元素调用的方法array，并values生成比较它们的标准。迭代器通过一个参数调用：(value)。
{
  let array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
  _.pullAllBy(array, [{ x: 1 }, { x: 3 }], "x");
  console.log(array); // => [{ 'x': 2 }]
}

/* ================== pullAllWith ================== */
// 此方法与此方法类似_.pullAll，只是它接受comparator调用哪个来比较arrayto的元素values。使用两个参数调用比较器：(arrVal, othVal)。
{
  let array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
  ];

  _.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual);
  console.log(array);
  // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
}

/* ================== pullAt ================== */
// array从对应的元素中删除元素indexes并返回删除元素的数组。
{
  let array = ["a", "b", "c", "d"];
  let pulled = _.pullAt(array, [1, 3]);

  console.log(array);
  // => ['a', 'c']

  console.log(pulled);
  // => ['b', 'd']
}
