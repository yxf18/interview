// 1. 数组求和
{
    // reduce
    const arr = [1, 2, 3, 4, 5];
    Array.prototype.sum = function () {
        return this.reduce((prev, cur) => {
            return prev + cur
        }, 0)
    }
    const res = arr.sum()
    console.log('[ sum-res ]', res)

}
// 2. 计算平均值
{
    // reduce
    const arr = [1, 2, 3, 4, 5];
    Array.prototype.average = function () {
        return this.reduce((prev, cur, curIdx, arr) => {
            if (curIdx === arr.length - 1) {
                return (prev + cur) / arr.length
            }
            return prev + cur
        }, 0)
    }
    const res = arr.average()
    console.log('[ average-res ]', res)
}
// 3. 取出100~999中的水花仙数
{
    // 题目分析：水仙花数是一个三位数其各位数字的立方和等于该数本身
    // 例如：3^3 + 7^3+ 0^3 = 370     1^3+5^3+3^3=153
    function getNarcissusNum(start, end) {
        const res = [];
        for (let i = start; i < end; i++) {
            const a = parseInt(i / 100) // 百位
            const b = parseInt((i % 100) / 10) // 十位
            const c = parseInt(i % 10) // 个位
            const sum = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
            if (sum === i) {
                res.push(i)
            }
        }
        return res
    }
    const res = getNarcissusNum(100, 999)
    console.log('[ getNarcissusNum-res ]', res)
}

// 4. 判断是不是回文数组
{
    // 题目分析：如果对每一个下标i均满足A[i] =A[N-i+1]，则称数组是回文的。
    const arr1 = [1, 2, 3, 2, 1];
    const arr2 = [1, 2, 3, 3, 2, 1];
    Array.prototype.isPalindromeArray = function () {
        let flag = false;
        for (let i = 0; i < this.length; i++) {
            if (this[i] === this[this.length - i + 1]) {
                flag = true
                break
            }
            flag = false
        }
        return flag
    }
    console.log('[1, 2, 3, 2, 1]', arr1.isPalindromeArray())
    console.log('[1, 2, 3, 3, 2, 1]', arr2.isPalindromeArray())
}

// 5. 数组升序
{
    const arr = [1, 123, 42, 412, 512, 2, 5];
    const res = arr.sort((a, b) => a - b);
    console.log('[ sort-res ]', res)
}

// 6. 数组 是否存在该数据，存在返回次数，不存在返回false
{
    const arr = [1, 2, 3, 4, 5, 6, 2, 2, 3];
    Array.prototype.includesValCount = function (val) {
        const o = {};
        for (let i = 0; i < this.length; i++) {
            let key = this[i], val = o[key];
            if (val) {
                o[key]++
            } else {
                o[key] = 1
            }
        }
        return o[val] || false
    }
    console.log('[ arr.includesValCount(2) ]', arr.includesValCount(2))
    console.log('[ arr.includesValCount(10) ]', arr.includesValCount(10))
}

// 7. 数组去重
{
    // 1. Set
    const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7];
    Array.prototype.deduplication = function () {
        return [...new Set(arr)]
    }
    const res = arr.deduplication()
    console.log('[ deduplication-res ]', res)

    // 2. 递归版
    Array.prototype.deduplication2 = function () {
        const loop = (idx) => {
            if (idx >= 0) {
                if (this.indexOf(this[idx]) != idx) {
                    this.splice(idx, 1);
                }
                loop(idx - 1); //递归loop函数进行去重
            }
        }
        loop(this.length - 1);
        return this
    }
    const res2 = arr.deduplication2()
    console.log('[ deduplication2-res ]', res2)
    // 3. 利用对象，不写了。。。
}