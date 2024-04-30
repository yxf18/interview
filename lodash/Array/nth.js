/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: n获取索引为的元素array。如果n为负数，则返回倒数第 n 个元素。
 * @effect:【根据下标找元素-支持负数】与 _.indexOf 区别在于支持负数
 */
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';