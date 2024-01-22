// var obj = new Proxy({}, {
//   get: function (target, propKey, receiver) {
//     console.log(`getting ${propKey}!`);
//     return Reflect.get(target, propKey, receiver);
//   },
//   set: function (target, propKey, value, receiver) {
//     console.log(`setting ${propKey}!`);
//     return Reflect.set(target, propKey, value, receiver);
//   }
// });

// obj.count = 1;


// async function test(){
//   console.log('[ 1 ]', 1)
//   await 2
//   console.log('[ 2 ]', 2)
// }
// test()
// console.log('[ 3 ]', 3)

function isObject(obj) {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
}

function cloneDeep(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source); // 新增代码，查哈希表

  var target = Array.isArray(source) ? [] : {};
  hash.set(source, target); // 新增代码，哈希表设值

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep(source[key], hash); // 新增代码，传入哈希表
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

var obj1 = {
  a: 1,
  b: {
    bb: 1
  },
  c: [1, 2, 3]
}
obj1.d = obj1;

const obj2 = cloneDeep(obj1);
obj2.a = 2;
console.log('[ obj1 ]', obj1)
console.log('[ obj2 ]', obj2)