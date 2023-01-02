//
(function(){
    "use strict";
    
    // set user data
    const userDate = 31;
    const userMonth = 12;
    const userYear = 1990;
    
    //console.log('User Date: ' + userDate);
    console.log(`User Date: ${userDate}.${userMonth}.${userYear}`);
    
    const month = userMonth;
    const leapYear = userYear % 4;
    let daysInMonth;
    
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        daysInMonth = 31; // 31 days if month is Jan, Mar, May, Jul, Aug, Oct, Dec
    } else if (month === 2 && leapYear !== 0) {
        daysInMonth = 28 // 28 days if month is Feb
    } else if (month === 2 && leapYear === 0) {
        daysInMonth = 29 // 28+1 days if month is Feb and leap year
    } else {
        daysInMonth = 30; // 30 days if month is Apr, Jun, Sep, Nov
    }
    
    console.log('Days in Month: ' + daysInMonth);


    // convert user date & month into numbers
    let numericDate;

    const Jan = 31;
    let Feb = 28;
    if (leapYear === 0) {
        Feb++;
    }
    const Mar = 31;
    const Apr = 30;
    const May = 31;
    const Jun = 30;
    const Jul = 31;
    const Aug = 31;
    const Sep = 30;
    const Oct = 31;
    const Nov = 30;

    let prevMonth;

    switch (userMonth) {
        case 1:
            prevMonth = 0;
            break;
        case 2:
            prevMonth = Jan;
            break;
        case 3:
            prevMonth = Jan + Feb;
            break;
        case 4:
            prevMonth = Jan + Feb + Mar;
            break;
        case 5:
            prevMonth = Jan + Feb + Mar + Apr;
            break;
        case 6:
            prevMonth = Jan + Feb + Mar + Apr + May;
            break;
        case 7:
            prevMonth = Jan + Feb + Mar + Apr + May + Jun;
            break;
        case 8:
            prevMonth = Jan + Feb + Mar + Apr + May + Jun + Jul;
            break;
        case 9:
            prevMonth = Jan + Feb + Mar + Apr + May + Jun + Jul + Aug;
            break;
        case 10:
            prevMonth = Jan + Feb + Mar + Apr + May + Jun + Jul + Aug + Sep;
            break;
        case 11:
            prevMonth = Jan + Feb + Mar + Apr + May + Jun + Jul + Aug + Sep + Oct;
            break;
        case 12:
            prevMonth = Jan + Feb + Mar + Apr + May + Jun + Jul + Aug + Sep + Oct + Nov;
            break;
        default:
            console.log('invalid user month');
    }

    console.log(`prevMonth: ${prevMonth}`);
        numericDate = userDate + prevMonth;
    console.log(`numericDate: ${numericDate}`)

})();