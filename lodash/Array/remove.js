/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: array删除其中返回 true 的所有元素predicate，并返回删除元素的数组。使用三个参数调用谓词：(value, index, array)。
注意：与 不同_.filter，此方法会发生变化array。用于_.pull按值从数组中提取元素。
    @effect:【删除数组中的元素】    与 _.filter 相反，并且_.remove会改变原数组
 */
import _ from "lodash";
{
  const array = [1, 2, 3, 4];
  const evens = _.remove(array, function (n) {
    return n % 2 == 0;
  });

  console.log(array);
  // => [1, 3]

  console.log(evens);
  // => [2, 4]
}

{
  const array = [1, 2, 3, 4];
  const evens = _.filter(array, function (n) {
    return n % 2 == 0;
  });

  console.log(array);
  // => [1, 2, 3, 4]

  console.log(evens);
  // => [2, 4]
}
