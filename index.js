// Code your solution here
var findMatching = (array, driver)=>{
    return array.filter(drivers => drivers.toLowerCase() === driver.toLowerCase());
}
var fuzzyMatch = (array, str)=>{
    return array.filter(drivers => drivers.startsWith(str));
}
var matchName = (array, driver)=>{
    return array.filter(({name, hometown} )=> name === driver);
}