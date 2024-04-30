/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 此方法返回一个由 key-value 组成的对象pairs。
 * @effect:【键值对转对象】
 */
import _ from "lodash";
{
  _.fromPairs([
    ["a", 1],
    ["b", 2],
  ]);
  // => { 'a': 1, 'b': 2 }
}
