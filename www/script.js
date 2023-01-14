(function(){

    "use strict";

    const result = document.getElementById('result');
    const form = document.getElementById('ageCalc');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let userDate = parseFloat(document.getElementById('userDate').value);
        let userMonth = parseFloat(document.getElementById('userMonth').value);
        let userYear = parseFloat(document.getElementById('userYear').value);
        //console.log(`User Date: ${userDate}.${userMonth}.${userYear}`);
        
        const leapYear = !Boolean(userYear % 4);
        const leapYearCorrection = leapYear === true ? 1 : 0;
        //console.log(`Leap Year: ${leapYear}`);
        //console.log(`Leap Year Correction: ${leapYearCorrection}`);
    
        // convert user date & month into numbers
        const monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let prevMonthSum = 0;
        for (let i = 0; i < userMonth - 1; i++) {
            prevMonthSum = prevMonthSum + monthArray[i];
        }
        //console.log(`prevMonth: ${prevMonthSum}`);
    
        let userDateNumeric = prevMonthSum + userDate;
        //console.log(`userDateNumeric: ${userDateNumeric}`);
    
        // no correction for a leap year yet 
        const zodiaks = [
            {endNumDate:  19, name: 'Capricornus'},
            {endNumDate:  49, name: 'Aquarius'},
            {endNumDate:  79, name: 'Pisces',},
            {endNumDate: 109, name: 'Aries'},
            {endNumDate: 140, name: 'Taurus'},
            {endNumDate: 172, name: 'Gemini'},
            {endNumDate: 203, name: 'Cancer'},
            {endNumDate: 234, name: 'Leo'},
            {endNumDate: 265, name: 'Virgo'},
            {endNumDate: 296, name: 'Libra'},
            {endNumDate: 325, name: 'Scorpius'},
            {endNumDate: 355, name: 'Sagittarius'}
        ];
        
        let zodiakCalc;
        if (userDateNumeric <= zodiaks[0].endNumDate || userDateNumeric > zodiaks[11].endNumDate) {zodiakCalc = 0;} // before Jan 19 or after Dec 21
        else if (userDateNumeric <= zodiaks[1].endNumDate) {zodiakCalc = 1;}
        else if (userDateNumeric <= zodiaks[2].endNumDate) {zodiakCalc = 2;}
        else if (userDateNumeric <= zodiaks[3].endNumDate) {zodiakCalc = 3;}
        else if (userDateNumeric <= zodiaks[4].endNumDate) {zodiakCalc = 4;}
        else if (userDateNumeric <= zodiaks[5].endNumDate) {zodiakCalc = 5;}
        else if (userDateNumeric <= zodiaks[6].endNumDate) {zodiakCalc = 6;}
        else if (userDateNumeric <= zodiaks[7].endNumDate) {zodiakCalc = 7;}
        else if (userDateNumeric <= zodiaks[8].endNumDate) {zodiakCalc = 8;}
        else if (userDateNumeric <= zodiaks[9].endNumDate) {zodiakCalc = 9;}
        else if (userDateNumeric <= zodiaks[10].endNumDate) {zodiakCalc = 10;}
        else if (userDateNumeric <= zodiaks[11].endNumDate) {zodiakCalc = 11;}
        else {console.log('zodiakCalc: error');}

        result.innerHTML = `<span>Date: ${userDate}.${userMonth}.${userYear}</span><span>Zodiak: ${zodiaks[zodiakCalc].name}</span>`;
    });

})();