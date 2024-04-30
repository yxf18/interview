/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 创建一个数组，排除用于SameValueZero相等比较的所有给定值。
 * 注意：与_.pull不同，此方法返回一个新数组。
 * @effect:【排除】
 */

{
  _.without([2, 1, 2, 3], 1, 2);
  // => [3]
}
