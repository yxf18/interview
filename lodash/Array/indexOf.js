/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: value获取array用于SameValueZero相等比较时第一次出现 的索引。如果fromIndex为负数，则用作距 结尾的偏移量array。
 * @effect:【根据下标找元素】
 */
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3