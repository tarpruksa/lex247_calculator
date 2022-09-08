import { createSlice } from '@reduxjs/toolkit';
const logic = require('../module/logic/logic');
const formatDigit = require('../module/formatDigit')

const initialState = {
  curOperand: "",
  prevOperand: "",
  operation: "",
  result: "",
  longResult: [],
  isPositive: true,
  reset: false
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action) => {
      if (state.reset) {
        state.curOperand = action.payload
        state.isPositive = true
        state.reset = false
      }
      else if (action.payload === "0" && state.curOperand === "0") { return state }
      else if (action.payload === "." && state.curOperand.includes(".")) { return state }

      else {
        state.curOperand = `${state.curOperand}${action.payload}`
      }
    },
    positiveOrNegative: (state) => {
      if (state.isPositive) {
        state.curOperand = `-${state.curOperand}`
        state.isPositive = false
      } else {
        state.curOperand = state.curOperand.slice(1)
        state.isPositive = true
      }
    },
    chooseOperation: (state, action) => {
      state.isPositive = true
      state.reset = false
      if (state.curOperand === "" && state.prevOperand === "") { return state };
      if (state.curOperand && state.prevOperand === "") {
        state.operation = action.payload;
        state.prevOperand = state.curOperand;
        state.curOperand = ""

      }

      if (state.curOperand === "") {
        state.operation = action.payload
      }

      else {
        state.result = logic({ current: state.curOperand, prev: state.prevOperand, operation: state.operation })
        state.longResult.unshift(`${formatDigit(state.prevOperand)} ${state.operation} ${formatDigit(state.curOperand)} = ${formatDigit(state.result)}`)
        state.operation = action.payload;
        state.prevOperand = state.result;
        state.curOperand = "";
      }
    },
    specialOperation: (state, action) => {
      if (state.curOperand) {
        state.result = logic({ current: state.curOperand, prev: "", operation: action.payload })
        if (state.prevOperand) {
          state.curOperand = state.result
        }
        else {
          switch (action.payload) {
            case "x²":
              state.longResult.unshift(`${formatDigit(state.curOperand)}² = ${formatDigit(state.result)}`)
              state.isPositive = true
              break
            case "√x":
              state.longResult.unshift(`√${formatDigit(state.curOperand)} = ${formatDigit(state.result)}`)
              state.isPositive = true
              break
            case "x!":
              state.longResult.unshift(`${formatDigit(state.curOperand)}! = ${formatDigit(state.result)}`)
              break
            case "%":
              state.longResult.unshift(`${formatDigit(state.curOperand)}% = ${formatDigit(state.result)}`)
              break
            case "10x":
              state.longResult.unshift(`10 ^ ${formatDigit(state.curOperand)} = ${formatDigit(state.result)}`)
              state.isPositive = true
              break
            case "sin":
              state.longResult.unshift(`sin(${formatDigit(state.curOperand)}°) = ${formatDigit(state.result)}`)
              if (state.result >= 0) { state.isPositive = true } else { state.isPositive = false }
              break
            case "cos":
              state.longResult.unshift(`cos(${formatDigit(state.curOperand)}°) = ${formatDigit(state.result)}`)
              if (state.result >= 0) { state.isPositive = true } else { state.isPositive = false }
              break
            case "tan":
              state.longResult.unshift(`tan(${formatDigit(state.curOperand)}°) = ${formatDigit(state.result)}`)
              if (state.result >= 0) { state.isPositive = true } else { state.isPositive = false }
              break
            default:
              break
          }
          state.curOperand = state.result

          state.reset = true
        }
      }

    },
    evaluate: (state) => {
      if (state.curOperand === "" || state.prevOperand === "" || state.operation === "") { return state };

      state.result = logic({ current: state.curOperand, prev: state.prevOperand, operation: state.operation })
      state.longResult.unshift(`${formatDigit(state.prevOperand)} ${state.operation} ${formatDigit(state.curOperand)} = ${formatDigit(state.result)}`)

      if (state.result >= 0) { state.isPositive = true } else { state.isPositive = false }
      state.operation = ""
      state.prevOperand = ""
      state.curOperand = state.result
      state.reset = true
    },
    clear: (state) => {
      state.operation = ""
      state.prevOperand = ""
      state.curOperand = ""
      state.result = ""
      state.reset = false
      state.isPositive = true
    },
    deleteDigit: (state) => {
      if (state.reset) {
        state.curOperand = ""
        state.reset = false
      }
      if (state.curOperand === "") { return state }
      if (state.curOperand.length === 1) { state.curOperand = "" }

      state.curOperand = state.curOperand.slice(0, -1)
    },
    clearHistory: (state) => {
      state.longResult = []
    }
  },
})

export const { addDigit, chooseOperation, clear, addResult, evaluate, deleteDigit, positiveOrNegative, specialOperation, clearHistory } = calculatorSlice.actions

export default calculatorSlice.reducer

