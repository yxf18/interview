const treeData = [{
  "documentTypeId": "JCJL",
  "documentTypeName": "检查记录",
  "documentStatDtoList": [
      {
          "documentId": 1908,
          "documentName": "检查记录1"
      },
      {
          "documentId": 1921,
          "documentName": "检查记录14"
      },
      {
          "documentId": 1922,
          "documentName": "检查记录15"
      },
      {
          "documentId": 1923,
          "documentName": "检查记录16"
      }
  ]
}]


function formatData(arr,result = []) {
arr.forEach(i => {
  const obj = {};
  obj.title = i.documentTypeName || i.documentName;
  obj.id = i.documentTypeId || i.documentId;
  if (i.documentStatDtoList && i.documentStatDtoList.length) {
    obj.children = [];
    formatData(i.documentStatDtoList, obj.children)
  }
  result.push(obj)
})
return result
}

const res = formatData(treeData)
console.log(res)