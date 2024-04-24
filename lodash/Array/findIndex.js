/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 寻找下标
 */
import _ from "lodash";
/* ================== findIndex ================== */
// 此方法与此方法相似_.find，只是它返回第一个元素的索引，predicate而不是元素本身返回 true。
// array (Array)：要检查的数组。
// [predicate=_.identity] (Function)：每次迭代调用的函数。
// [fromIndex=0] (number)：要搜索的索引。

{
  var users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  _.findIndex(users, function (o) {
    return o.user == "barney";
  });
  // => 0

  // The `_.matches` iteratee shorthand.
  _.findIndex(users, { user: "fred", active: false });
  // => 1

  // The `_.matchesProperty` iteratee shorthand.
  _.findIndex(users, ["active", false]);
  // => 0

  // The `_.property` iteratee shorthand.
  _.findIndex(users, "active");
  // => 2
}

/* ================== findLastIndex ================== */
// 此方法与 _.findIndex 此方法类似，只是它从右到左_.findIndex迭代元素。collection
{
  var users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
    { user: "pebbles", active: false },
  ];

  _.findLastIndex(users, function (o) {
    return o.user == "pebbles";
  });
  // => 2

  // The `_.matches` iteratee shorthand.
  _.findLastIndex(users, { user: "barney", active: true });
  // => 0

  // The `_.matchesProperty` iteratee shorthand.
  _.findLastIndex(users, ["active", false]);
  // => 2

  // The `_.property` iteratee shorthand.
  _.findLastIndex(users, "active");
  // => 0
}
