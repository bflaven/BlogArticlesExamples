/*
node -v
npm install --save-dev fs
npm install --save-dev path


cd /Users/brunoflaven/Documents/01_work/blog_articles/asana_hoshin_kanri_strategic_planning/read-file-json
node write_a_javascript_functions_006.mjs


- rules
0.7 to 1.0 = green.* (We delivered.)
0.4 to 0.6 = yellow. (We made progress, but fell short of completion.)
0.0 to 0.3 = red. (We failed to make real progress.)

- example of calculation
Key result #1: 0.5
Key result #2: 0.7
Key result #3: 0.3
Objective: 1.5 ÷ 3 = 0.5



https://bobbyhadz.com/blog/javascript-get-date-quarter

*/

/**
 * January 1st - March 31st  = First Quarter
 * April 1st - June 30th = Second Quarter
 * July 1st - September 30th = Third Quarter
 * October 1st - December 31st = Fourth Quarter
 */

/* 
* Get the Quarter from a Date using JavaScript
*/
// console.log('\n\n--- Get the Quarter from a Date using JavaScript ---\n\n')

	function getQuarter(date = new Date()) {
	  return Math.floor(date.getMonth() / 3 + 1);
	}

// console.log(getQuarter()); // 👉️ current quarter ✅
// console.log(getQuarter(new Date('2023-01-24'))); // 👉️ 1
// console.log(getQuarter(new Date('2023-02-24'))); // 👉️ 1
// console.log(getQuarter(new Date('2023-03-24'))); // 👉️ 1
// console.log(getQuarter(new Date('2023-04-24'))); // 👉️ 2
// console.log(getQuarter(new Date('2023-05-24'))); // 👉️ 2
// console.log(getQuarter(new Date('2023-06-24'))); // 👉️ 2
// console.log(getQuarter(new Date('2023-07-24'))); // 👉️ 3
// console.log(getQuarter(new Date('2023-08-24'))); // 👉️ 3
// console.log(getQuarter(new Date('2023-09-24'))); // 👉️ 3
// console.log(getQuarter(new Date('2023-10-24'))); // 👉️ 4
// console.log(getQuarter(new Date('2023-11-24'))); // 👉️ 4
// console.log(getQuarter(new Date('2023-12-28'))); // 👉️ 4


/* 
* Get the number of days left in a Quarter  
*/
// console.log('\n\n--- Get the number of days left in a Quarter ---\n\n')

		function daysLeftInQuarter(date = new Date()) {
		  const quarter = getQuarter(date);
		  const nextQuarter = new Date();

		  if (quarter === 4) {
		    nextQuarter.setFullYear(date.getFullYear() + 1, 0, 1);
		  } else {
		    nextQuarter.setFullYear(date.getFullYear(), quarter * 3, 1);
		  }

		  const ms1 = date.getTime();
		  const ms2 = nextQuarter.getTime();

		  return Math.floor((ms2 - ms1) / (24 * 60 * 60 * 1000));
		}
/*
console.log(daysLeftInQuarter(new Date())); // 👉️ current date til next quarter
console.log(daysLeftInQuarter(new Date('2022-03-01'))); // 👉️ 31
console.log(daysLeftInQuarter(new Date('2022-03-29'))); // 👉️ 3
console.log(daysLeftInQuarter(new Date('2022-12-30'))); // 👉️ 2
console.log(daysLeftInQuarter(new Date('2022-12-31'))); // 👉️ 1
console.log(daysLeftInQuarter(new Date('2022-03-31'))); // 👉️ 1
*/

// console.log(daysLeftInQuarter(new Date('2022-12-28')));
// console.log(daysLeftInQuarter(new Date()));


/*
function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// console.log(days_of_a_year(2022));
console.log(days_of_a_year(2023));
*/

/*
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function daysInYear(year) {
  var days = 0;
  
  for(var month = 1; month <= 12; month++) {
    days += daysInMonth(month, year);
  }
  
  return days;
}

// console.log('2016: ', daysInYear(2016));
console.log('2023: ', daysInYear(2023));
*/
// quarterCompleted 
/*
new Date().getTime() :: 1672052433548
quarterStartDate.getTime() :: 1672052416561
(1672052433548 - 1672052416561) = 384346


86400000 ms == 1 day in milliseconds
91.25 = number of days in quarter

The Math.min() function returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

console.log(Math.min(2, 3, 1));
// expected output: 1


The getTime() method returns the number of milliseconds since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.


const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');

// milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// expected output: -14182940000



const quarterCompleted = roundTwoDecimals(
      Math.min(1,
        Math.round(
          (new Date().getTime() - quarterStartDate.getTime()) / 86400000
        ) / 91.25
      )
    );

success: roundTwoDecimals(
              current_result / target_result / quarterCompleted)

*/

/**
 * Round a number to up to two decimal places
 * @param {number} value - Number to round
 * @returns {number} - Rounded value
 */
function roundTwoDecimals(value) {
  return Math.round(value * 100) / 100;
}

// const date = new Date()
// console.log ('date :: '+date);
// console.log('month :: '+date.getMonth());


const quarterStartDate = new Date();




console.log ('quarterStartDate :: '+quarterStartDate);
// console.log((new Date().getTime() - quarterStartDate.getTime()))
// 
// 
// 

