//
(function(){
    "use strict";
    
    // set user data
    const userDate = 15;
    const userMonth = 2;
    const userYear = 1990;
    
    //console.log('User Date: ' + userDate);
    console.log(`User Date: ${userDate}.${userMonth}.${userYear}`);
    
    const month = userMonth;
    const leapYear = userYear % 4;
    let daysInMonth;
    
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        daysInMonth = 31; // 31 days if month is Jan, Mar, May, Jul, Aug, Oct, Dec
    } else if (month === 2 && leapYear > 0) {
        daysInMonth = 28 // 28 days if month is Feb
    } else if (month === 2 && leapYear === 0) {
        daysInMonth = 29 // 28+1 days if month is Feb and leap year
    } else {
        daysInMonth = 30; // 30 days if month is Apr, Jun, Sep, Nov
    }
    
    console.log('Days in Month: ' + daysInMonth);
})();