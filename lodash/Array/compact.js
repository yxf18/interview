/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 创建一个删除了所有假值的数组。false, null, 0, "", undefined, NaN。
 * @effect:【过滤-假】
 */
import _ from "lodash";

const res = _.compact([0, 1, false, 2, "", 3]);
console.log("[ res ]", res);
