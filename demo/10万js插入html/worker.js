// 接收主线程传递的消息
self.onmessage = function (event) {
  var start = event.data.start;
  var end = event.data.end;

  // 执行耗时的任务
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  // 将处理结果发送回主线程
  self.postMessage(sum);
};
