//
(function(){
    "use strict";
    
    const userDate = 15;
    const userMonth = 2;
    const userYear = 1996;
    
    console.log('User Date: ' + userDate);
    
    const month = userMonth;
    let daysInMonth;
    
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        daysInMonth = 31; // 31 days if month is Jan, Mar, May, Jul, Aug, Oct, Dec
    } else if (month === 2 && userYear !== 1996) {
        daysInMonth = 28 // 28 days if month is Feb
    } else if (month === 2 && userYear === 1996) {
        daysInMonth = 29 // 28+1 days if month is Feb and leap year
    } else {
        daysInMonth = 30; // 30 days if month is Apr, Jun, Sep, Nov
    }
    
    console.log('Days in Month: ' + daysInMonth);
})();