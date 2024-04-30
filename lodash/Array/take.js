/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 使用从开头获取的元素array创建一个切片。n
 * @Effect: 【从开头或结尾 创建array一个切片】
 */
/* ================== take ================== */
{
  _.take([1, 2, 3]);
  // => [1]

  _.take([1, 2, 3], 2);
  // => [1, 2]

  _.take([1, 2, 3], 5);
  // => [1, 2, 3]

  _.take([1, 2, 3], 0);
  // => []
}

/* ================== takeWhile ================== */
// array使用从开头获取的元素创建一个切片。元素被获取直到predicate返回 falsey。使用三个参数调用谓词：(value, index, array)。
{
  var users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  _.takeWhile(users, function (o) {
    return !o.active;
  });
  // => objects for ['barney', 'fred']

  // The `_.matches` iteratee shorthand.
  _.takeWhile(users, { user: "barney", active: false });
  // => objects for ['barney']

  // The `_.matchesProperty` iteratee shorthand.
  _.takeWhile(users, ["active", false]);
  // => objects for ['barney', 'fred']

  // The `_.property` iteratee shorthand.
  _.takeWhile(users, "active");
  // => []
}

/* ================== takeRight ================== */
// 创建一个切片，array其中的n元素取自末尾。
{
  _.takeRight([1, 2, 3]);
  // => [3]

  _.takeRight([1, 2, 3], 2);
  // => [2, 3]

  _.takeRight([1, 2, 3], 5);
  // => [1, 2, 3]

  _.takeRight([1, 2, 3], 0);
  // => []
}

/* ================== takeRightWhile ================== */
// 创建一个切片，array其中的元素取自末尾。元素被获取直到predicate返回 falsey。使用三个参数调用谓词：(value, index, array)。
{
  var users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
    { user: "pebbles", active: false },
  ];

  _.takeRightWhile(users, function (o) {
    return !o.active;
  });
  // => objects for ['fred', 'pebbles']

  // The `_.matches` iteratee shorthand.
  _.takeRightWhile(users, { user: "pebbles", active: false });
  // => objects for ['pebbles']

  // The `_.matchesProperty` iteratee shorthand.
  _.takeRightWhile(users, ["active", false]);
  // => objects for ['fred', 'pebbles']

  // The `_.property` iteratee shorthand.
  _.takeRightWhile(users, "active");
  // => []
}
