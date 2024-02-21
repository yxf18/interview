// for (let i = 0; i < 300000; i++) {
//   console.log(i);
// }
// document.getElementById("hello").innerHTML = "js 执行完毕";

// web worker方案
{
  // 创建 Worker 对象
  var worker = new Worker("./worker.js");

  // 向 Worker 发送消息
  worker.postMessage({ start: 0, end: 300000 });

  // 接收来自 Worker 的消息
  worker.onmessage = function (event) {
    var result = event.data;
    document.getElementById("hello").innerHTML = `js 执行完毕${result}`;
  };
}
