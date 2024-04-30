/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 此方法与此方法类似，只是它从右到左_.indexOf迭代元素。array
 * @effect:【根据下标找元素-从右到左】 与 _.indexOf 相对应
 */

_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1