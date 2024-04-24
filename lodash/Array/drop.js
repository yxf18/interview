/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 创建一个从头开始删除元素的array切片
 */
import _ from "lodash";
/* ================== drop ================== */
/* 
创建一个从头开始删除元素的array切片
 */
{
  const res1 = _.drop([1, 2, 3]);
  const res2 = _.drop([1, 2, 3], 2);
  const res3 = _.drop([1, 2, 3], 5);
  const res4 = _.drop([1, 2, 3], 0);
  console.log("[ res1234 ]", res1, res2, res3, res4); // [ 2, 3 ] [ 3 ] [] [ 1, 2, 3 ]
}

/* ================== dropWhile ================== */
/* array创建一个排除从头开始删除的元素的切片。元素将被删除，直到predicate返回 falsey。使用三个参数调用谓词：(value, index, array)。 */
{
    var users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ];
  
    _.dropWhile(users, function (o) {
      return !o.active;
    });
    // => objects for ['pebbles']
  
    // The `_.matches` iteratee shorthand.
    _.dropWhile(users, { user: "barney", active: false });
    // => objects for ['fred', 'pebbles']
  
    // The `_.matchesProperty` iteratee shorthand.
    _.dropWhile(users, ["active", false]);
    // => objects for ['pebbles']
  
    // The `_.property` iteratee shorthand.
    _.dropWhile(users, "active");
    // => objects for ['barney', 'fred', 'pebbles']
  }

  
/* ================== dropRight ================== */
/* 创建一个切片，array其中n元素从末尾删除。 */
{
  _.dropRight([1, 2, 3]);
  // => [1, 2]

  _.dropRight([1, 2, 3], 2);
  // => [1]

  _.dropRight([1, 2, 3], 5);
  // => []

  _.dropRight([1, 2, 3], 0);
}

/* ================== dropRightWhile ================== */
/* array创建一个排除从末尾删除的元素的切片。元素将被删除，直到predicate返回 falsey。使用三个参数调用谓词：(value, index, array)。 */
{
  var users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
    { user: "pebbles", active: false },
  ];

  const res1 = _.dropRightWhile(users, function (o) {
    return !o.active;
  });
  // [ { user: 'barney', active: true } ]

  const res2 = _.dropRightWhile(users, { user: "pebbles", active: false });
  // [ { user: 'barney', active: true }, { user: 'fred', active: false } ]

  const res3 = _.dropRightWhile(users, ["active", false]);
  // [ { user: 'barney', active: true } ]

  const res4 = _.dropRightWhile(users, "active");
  /* [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ] */

  console.log("[ res ]", res1, res2, res3, res4);
}

