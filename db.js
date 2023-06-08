const expenses = []
let spendLimit = 0

function get() {
    return [...expenses]
}

function push(expense) {
    expenses.push(expense)
}

function setLimit(limit) {
    spendLimit = limit
}

function getLimit() {
    return spendLimit
}

module.exports = {
    get,
    push,
    setLimit,
    getLimit,
}
