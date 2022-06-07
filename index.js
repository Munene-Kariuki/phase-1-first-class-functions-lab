// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let newArray = drivers.slice(0, 2)
  return newArray
}
const returnLastTwoDrivers = function(drivers){
  let lastDrivers = drivers.slice(-2)
  return lastDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(interger) {
  return function fare() {
    return interger * interger
  }
}
const fare = createFareMultiplier()
const fareDoubler = function (fare){
  return fare * 2
}
const fareTripler = function(fare) {
  return fare * 3
}
function selectDifferentDrivers(drivers, firstOrLast) {
  return firstOrLast(drivers)
}