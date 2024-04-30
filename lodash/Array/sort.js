/*
 * @Author: yangxuefeng yangxuefeng@clinbrain.com
 * @Description: 【排序】
 */
import _ from "lodash";
/* ================== sortedIndex ================== */
// 使用二分搜索来确定value应插入的最低索引array，以维持其排序顺序。
{
  const res = _.sortedIndex([30, 50], 40);
  console.log("[ res ]", res);
  // => 1
}
/* ================== sortedIndexBy ================== */
// 此方法与此类似，_.sortedIndex只是它接受iteratee调用哪个元素value以及其中的每个元素array来计算其排序排名。迭代器通过一个参数调用：(value)。
{
  const objects = [{ x: 4 }, { x: 5 }];

  _.sortedIndexBy(objects, { x: 4 }, function (o) {
    return o.x;
  });
  // => 0

  // The `_.property` iteratee shorthand.
  _.sortedIndexBy(objects, { x: 4 }, "x");
  // => 0
}

/* ================== sortedIndexOf ================== */
// 此方法与此方法类似，_.indexOf只是它对已排序的 执行二分搜索array。
{
  _.sortedIndexOf([4, 5, 5, 5, 6], 5);
  // => 1
}
/* ================== sortedLastIndex ================== */
{
  _.sortedLastIndex([4, 5, 5, 5, 6], 5);
  // => 4
}

/* ================== sortedLastIndexBy ================== */
// 此方法与此类似，_.sortedLastIndex只是它接受iteratee调用哪个元素value以及其中的每个元素array来计算其排序排名。迭代器通过一个参数调用：(value)。
{
  var objects = [{ x: 4 }, { x: 5 }];

  _.sortedLastIndexBy(objects, { x: 4 }, function (o) {
    return o.x;
  });
  // => 1

  // The `_.property` iteratee shorthand.
  _.sortedLastIndexBy(objects, { x: 4 }, "x");
  // => 1
}

/* ================== sortedLastIndexOf ================== */
// 此方法与此方法类似，_.lastIndexOf只是它对已排序的 执行二分搜索array。
{
  _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
  // => 3
}

/* ================== sortedUniq ================== */
// 此方法与此类似，_.uniq只是它是针对排序数组设计和优化的。【去重+排序】
{
  _.sortedUniq([1, 1, 2]);
  // => [1, 2]
}

/* ================== sortedUniqBy ================== */
// 此方法与此类似，_.uniqBy只是它是针对排序数组设计和优化的。
{
  _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
  // => [1.1, 2.3]
}
