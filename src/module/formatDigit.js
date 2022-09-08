function formatDigit(inputDigit) {
    if (inputDigit === "") { return "" }
    return `${Intl.NumberFormat("en-us", { maximumFractionDigits: 20 }).format(inputDigit)}`
}

module.exports = formatDigit