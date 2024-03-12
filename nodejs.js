// 寻找差集(前端每日一题)
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

// 指定要读取的目录路径
const directoryPath = "./everyDay";

// 使用 fs.readdir() 读取目录
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  const arrSet = new Set([]);
  files.forEach((file) => {
    arrSet.add(+file.split(".")[0]);
  });

  const fillArr = _.range(1, 901);
  const diffArr = _.difference(
    fillArr,
    [...arrSet].sort((a, b) => a - b)
  );
  console.log("[ diffArr ]", diffArr);
});
