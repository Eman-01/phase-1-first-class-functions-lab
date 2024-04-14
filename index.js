// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(arr) { 
    return drivers.slice(0,2)  
}
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(arr) {
    return drivers.slice(2)
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(value){
        return value*multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
    
function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
}

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);

