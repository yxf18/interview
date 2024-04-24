/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 扁平化
 */
import _ from "lodash";
/* ================== flatten ================== */
{
  _.flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]
  _.flattenDeep(array);
}
/* ================== flattenDeep ================== */
// 递归展平array。
{
  _.flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]
}

/* ================== flattenDepth ================== */
// 递归展平array至depth次。
{
  var array = [1, [2, [3, [4]], 5]];

  _.flattenDepth(array, 1);
  // => [1, 2, [3, [4]], 5]

  _.flattenDepth(array, 2);
  // => [1, 2, 3, [4], 5]
}

// 感觉和 flat方法类似
