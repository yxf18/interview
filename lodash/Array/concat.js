/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: array创建一个与任何其他数组和/或值连接的新数组。
 */
import _ from "lodash";

{
  const array = [1];
  const other = _.concat(array, 2, [3], [[4]]);

  console.log(other);
  // => [1, 2, 3, [4]]

  console.log(array);
  // => [1]
}

{
  const array = [1];
  const other = array.concat(2, [3], [[4]]);

  console.log(other);
  // => [1, 2, 3, [4]]

  console.log(array);
  // => [1]
}
