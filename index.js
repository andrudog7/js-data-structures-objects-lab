// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, address, value) {
    return Object.assign({}, driver, {address: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, address, value) {
    return Object.assign(driver, {address: value})
}

function deleteFromDriverByKey(driver, key) {
    let newDriver =  Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}