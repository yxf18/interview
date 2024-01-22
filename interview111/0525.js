// 5,敏感词过滤
//   原文：今天天气很好，我们开开心心去上学，今天天气很好
//   敏感词：好，开心，上学
//   过滤结果：今天天气很***，我们开***心去***，今天天气很***

function fn3(str) {
    // 遍历敏感词数组，找到数组中的每一项，找到敏感词在字符串中的位置
    var arr = ["好", "开心", "上学"]
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        //判断敏感词数组中是否存在当前字
        // console.log('[ item ]', item)
        if (str.indexOf(item) !== -1) {
            str = str.replaceAll(item, "***")
        }
        //根据敏感词的索引位置截取字符串
    }
    return str
}
// 2
function fn33(str) {
    return str.replace(/好|开心|上学/g, '***')
}

// 3
function fn333(str, ...reset) {
    const reg = new RegExp(`${reset.join('|')}`, 'g')
    return str.replace(reg, '***')
}

var str = "今天天气很好，我们开开心心去上学，今天天气很好"
console.log(fn33(str));
console.log(fn333(str, '好', '开心', '上学'));