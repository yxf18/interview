/*
 * @Author: yxf
 * @Description: Description
 * @FilePath: /interview/最长字符串.js
 */

var str = "zhaochucichuzuiduodezifu";
var o = {};
//遍历str，统计每个字符出现的次数
for (var i = 0, length = str.length; i < length; i++) {
    //当前第i个字符
    var char = str.charAt(i);
    //char就是对象o的一个属性，o[char]是属性值，存储出现的次数
    if (o[char]) {  //如果char属性存在，属性值+1 
        o[char]++;  //次数加1
    } else {        //char属性不存在为1（即字符第一次出现） 
        o[char] = 1;    //若第一次出现，次数记为1
    }
}

console.log('[ o ]', o)
// //遍历对象，找到出现次数最多的字符和次数
// var max = 0;        //存储出现次数最多的次数
// var maxChar = null; //存储出现次数最多的字符
// for (var key in o) {
//     if (max < o[key]) {
//         max = o[key];   //max始终储存次数最大的那个
//         maxChar = key;  //那么对应的字符就是当前的key
//     }
// }
// console.log("最多的字符是" + maxChar);
// console.log("出现的次数是" + max);