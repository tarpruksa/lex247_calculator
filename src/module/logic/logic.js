function logic({ current, prev, operation }) {
    const prevNum = parseFloat(prev)
    const currentNum = parseFloat(current)

    let result = ""
    switch (operation) {
        case "+":
            result = prevNum + currentNum
            break
        case "-":
            result = prevNum - currentNum
            break
        case "×":
            result = prevNum * currentNum
            break
        case "÷":
            result = prevNum / currentNum
            break
        case "^":
            result = Math.pow(prevNum, currentNum)
            break
        case "x²":
            result = currentNum * currentNum
            break
        case "√x":
            result = Math.sqrt(currentNum)
            break
        case "x!":
            if (currentNum < 0) {
                result = "NaN"
            }
            else {
                let rval = 1
                for (let i = 2; i <= currentNum; i++) {
                    rval = rval * i;
                }
                result = rval
            }
            break
        case "%":
            result = currentNum / 100
            break
        case "10x":
            result = Math.pow(10, currentNum)
            break
        case "sin":
            result = Math.sin(currentNum * Math.PI / 180)
            break
        case "cos":
            result = Math.cos(currentNum * Math.PI / 180)
            break
        case "tan":
            result = Math.tan(currentNum * Math.PI / 180)
            break
        default:
            result = ""
            break
    }
    return result.toString()
}


module.exports = logic