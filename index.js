// Code your solution here
function findMatching(driverNames, nameMatch){
    return driverNames.filter(name => name.toUpperCase() === nameMatch.toUpperCase());
}

function fuzzyMatch(driverNames, nameBegin){
    return driverNames.filter(name => name.startsWith(nameBegin));
}

function matchName(drivers, nameMatch){
    return drivers.filter(driver => driver.name === nameMatch);
}