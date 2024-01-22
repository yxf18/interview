// 【牛客网-远程机试】- 2023-06-07
//
(async function () {
    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);

    await new Promise((resolve, reject) => {
        console.log(3);
        resolve();
    }).then(() => {
        console.log(4);
    });
    console.log(5);
})();

// 数组转数
const arr = [{
        id: 1,
        name: '部门A',
        parentId: 0
    },
    {
        id: 2,
        name: '部门B',
        parentId: 1
    },
    {
        id: 3,
        name: '部门C',
        parentId: 1
    },
    {
        id: 4,
        name: '部门D',
        parentId: 2
    },
    {
        id: 5,
        name: '部门E',
        parentId: 2
    },
    {
        id: 6,
        name: '部门F',
        parentId: 3
    },
];

function arrToTree(arr) {
    let root = null;
    const parentMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const {
            id,
            name,
            parentId
        } = arr[i];
        const treeNode = {
            id,
            name
        }
        parentMap.set(id, treeNode);
        const parentNode = parentMap.get(parentId);
        if (parentNode) {
            if (parentNode.children == null) parentNode.children = []
            parentNode.children.push(treeNode)
        }
        if (parentId === 0) root = treeNode
    }

    return root;
}

const result = arrToTree(arr);
console.log(result)

// 链式调用

class MyClass {
    constructor(n) {
        this.n = 0
    }
    calculator(n) {
        this.n = n;
        return this
    }
    add(n) {
        this.n += n;
        return this
    }
    div(n) {
        return this.n /= n
    }
}

const calc = new MyClass();
const res = calc.calculator(1).add(3).div(2);
console.log(`res: ${res}`); // res: 2