const logic = require('./logic');

// check all operations are working correctly

test('check for +', () => {
    expect(logic({ prev: "2", operation: "+", current: "25" })).toBe("27")
    expect(logic({ prev: "1", operation: "+", current: "-24" })).toBe("-23")
    expect(logic({ prev: "-100", operation: "+", current: "-15" })).toBe("-115")
})

test('check for -', () => {
    expect(logic({ prev: "2", operation: "-", current: "25" })).toBe("-23")
    expect(logic({ prev: "1", operation: "-", current: "-24" })).toBe("25")
    expect(logic({ prev: "-100", operation: "-", current: "-15" })).toBe("-85")
})

test('check for ×', () => {
    expect(logic({ prev: "10", operation: "×", current: "25" })).toBe("250")
    expect(logic({ prev: "1", operation: "×", current: "-26" })).toBe("-26")
    expect(logic({ prev: "-100", operation: "×", current: "-15" })).toBe("1500")
})

test('check for ÷', () => {
    expect(logic({ prev: "2", operation: "÷", current: "25" })).toBe("0.08")
    expect(logic({ prev: "100", operation: "÷", current: "-25" })).toBe("-4")
    expect(logic({ prev: "-500", operation: "÷", current: "-25" })).toBe("20")
})

test('check for ^', () => {
    expect(logic({ prev: "20", operation: "^", current: "5" })).toBe("3200000")
    expect(logic({ prev: "100", operation: "^", current: "-1" })).toBe("0.01")
    expect(logic({ prev: "-50", operation: "^", current: "3" })).toBe("-125000")
})

test('check for x²', () => {
    expect(logic({ prev: "2asda0", operation: "x²", current: "10" })).toBe("100")
    expect(logic({ prev: "a", operation: "x²", current: "-2" })).toBe("4")
    expect(logic({ prev: "", operation: "x²", current: "250" })).toBe("62500")
})

test('check for √x', () => {
    expect(logic({ prev: "2asda0", operation: "√x", current: "100" })).toBe("10")
    expect(logic({ prev: "a", operation: "√x", current: "-4" })).toBe("NaN")
    expect(logic({ prev: "", operation: "√x", current: "625" })).toBe("25")
})

test('check for x!', () => {
    expect(logic({ prev: "2asda0", operation: "x!", current: "5" })).toBe("120")
    expect(logic({ prev: "a", operation: "x!", current: "1" })).toBe("1")
    expect(logic({ prev: "", operation: "x!", current: "-5" })).toBe("NaN")
})

test('check for %', () => {
    expect(logic({ prev: "2asda0", operation: "%", current: "650" })).toBe("6.5")
    expect(logic({ prev: "a", operation: "%", current: "1" })).toBe("0.01")
    expect(logic({ prev: "", operation: "%", current: "-52" })).toBe("-0.52")
})

test('check for 10x', () => {
    expect(logic({ prev: "2asda0", operation: "10x", current: "5" })).toBe("100000")
    expect(logic({ prev: "", operation: "10x", current: "-1" })).toBe("0.1")
})

test('check for sin', () => {
    expect(logic({ prev: "2asda0", operation: "sin", current: "90" })).toBe("1")
    expect(logic({ prev: "", operation: "sin", current: "58654" })).toBe("-0.43837114678907513")
})

test('check for cos', () => {
    expect(logic({ prev: "2asda0", operation: "cos", current: "180" })).toBe("-1")
    expect(logic({ prev: "", operation: "cos", current: "-180" })).toBe("-1")
})

test('check for tan', () => {
    expect(logic({ prev: "2asda0", operation: "tan", current: "0" })).toBe("0")
    expect(logic({ prev: "", operation: "tan", current: "-135" })).toBe("1")
})