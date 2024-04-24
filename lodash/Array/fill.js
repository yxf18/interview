/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: array用valuefrom up to填充 的元素start，但不包括end。
 */
import _ from "lodash";
var array = [1, 2, 3];

const res1 = _.fill(array, "a");
console.log(array);
// => ['a', 'a', 'a']

const res11 = _.fill(Array(3), 2);
// => [2, 2, 2]

/**
    Arguments
    array (Array): The array to fill.
    value (*): The value to fill array with.
    [start=0] (number): The start position.
    [end=array.length] (number): The end position.
 */
const res111 = _.fill([4, 6, 8, 10], "*", 1, 3);  
// => [4, '*', '*', 10]

console.log("[ res ]", res1, res11, res111);
