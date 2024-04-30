/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 数组解压
 */
import _ from "lodash";
/* ================== unzip ================== */
// 此方法与此类似_.zip，只是它接受分组元素的数组并创建一个将元素重新分组为其压缩前配置的数组。
{
  const zipped = _.zip(["a", "b"], [1, 2], [true, false]);
  console.log("[ zipped ]", zipped);
  // => [['a', 1, true], ['b', 2, false]]

  const unZipped = _.unzip(zipped);
  console.log("[ unZipped ]", unZipped);
  // => [['a', 'b'], [1, 2], [true, false]]
}

/* ================== unzipWith ================== */
// 此方法与此方法类似_.unzip，只是它接受iteratee指定如何组合重新分组的值。使用每个组的元素调用 iteratee：(...group)。
{
  var zipped = _.zip([1, 2], [10, 20], [100, 200]);
  // => [[1, 10, 100], [2, 20, 200]]

  _.unzipWith(zipped, _.add);
  // => [3, 30, 300]
}
