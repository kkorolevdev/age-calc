(function(){

    "use strict";

    console.log('Welcome to Zodiak Calculator');

    const result = document.getElementById('result');
    const form = document.getElementById('ageCalc');
    const date = new Date();
    const today = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
    //const today = [14, 2, 2023] // 2 = March !!!
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const ChineseCalendar = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    const skyStems = ['wood', 'fire', 'earth', 'metal', 'water'];
    const zodiaks = [ // no correction for a leap year yet 
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

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const userDate = parseFloat(document.getElementById('userDate').value);
        const userMonth = parseFloat(document.getElementById('userMonth').value);
        const userYear = parseFloat(document.getElementById('userYear').value);
        const leapYear = !Boolean(userYear % 4);
        const leapYearCorrection = leapYear === true ? 1 : 0;


        // convert user date & month into numbers
        let prevMonthSum = 0;
        for (let i = 0; i < userMonth - 1; i++) {
            prevMonthSum = prevMonthSum + daysInMonth[i];
        }
        const userDateNumeric = prevMonthSum + userDate;


        // Calculate zodiak
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


        // Calculate age
        let thisYearDoB;
        let yearCorrection;
        if (today[1] > userMonth) {
            thisYearDoB = true;
            yearCorrection = 0;
        } else if (today[1] === userMonth && today[0] >= userDate) {
            thisYearDoB = true;
            yearCorrection = 0;
        } else {
            thisYearDoB = false;
            yearCorrection = 1;
        }
        const age = today[2] - userYear - yearCorrection;


        // Calculate Chinese Calendar
        let chYear = userYear - 1984;;
        let chZodiak;
        if (userYear >= 1984) {
            chYear = (chYear > 11) ? chYear % 12 : chYear;
            chZodiak = ChineseCalendar[chYear];
        } else {
            chYear = (chYear < 11) ? chYear % 12 : chYear;
            chZodiak = ChineseCalendar[12 + chYear];
        }
        
        
        //console.log(`today: ${today}`);
        //console.log(`User Date: ${userDate}.${userMonth}.${userYear}`);
        //console.log(`prevMonth: ${prevMonthSum}`);
        //console.log(`userDateNumeric: ${userDateNumeric}`);
        //console.log(`Leap Year: ${leapYear}`);
        //console.log(`Leap Year Correction: ${leapYearCorrection}`);
        //console.log(thisYearDoB);
        //console.log(chZodiak);

        // Show result
        result.innerHTML = `<div><span>Date of Birth: ${userDate}.${userMonth}.${userYear}</span><span>Age: ${age}</span></div><div><span>Zodiak: ${zodiaks[zodiakCalc].name}</span><span>Chinese Zodiak: ${chZodiak}*</span></div>`;
    });

})();