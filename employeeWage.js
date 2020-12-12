const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
	totalWorkingDays < NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs = totalEmpHrs+empHrs
	empDailyWageArr.push(calcDailyWage(empHrs));
	empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

function calcDailyWage(empHrs)
{
	return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck)
{
	switch(empCheck)
	{
		case IS_PART_TIME:
			return PART_TIME_HOURS;
		case IS_FULL_TIME:
			return FULL_TIME_HOURS;
		default:
			return 0;
	}
}	

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " +totalWorkingDays+ 
	" Total Hrs: " +totalEmpHrs+ " Employee Wage " + empWage);

//Array Helper Functions
//UC 7A Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage)
{
	totEmpWage = totEmpWage + dailyWage;
}

empDailyWageArr.forEach(sum)
{
	console.log("UC7A - Total Days " + totalWorkingDays +
		" Total Hrs: " + totalEmpHrs + " Emp Wage :" + totEmpWage);
}

function totalWages(totalWage, dailyWage)
{
	return totalWage + dailyWage;
}
console.log("UC7A - Employee Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));


//UC 7B - Show the Day along with Daily Wage using Array Map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
	dailyCntr++;
	return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);


//UC 7C - Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage filter when fulltime wage earned");
console.log(fullDayWageArr);


//UC 7D - Find the first occurrence when full time wage was earned using find function
function findFulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("UC 7D - First time fulltime wage was earned on day: "
	+ mapDayWithWageArr.find(findFulltimeWage));


//UC 7E - Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("UC 7E  - Check All Element have Full time wage: "
	+ fullDayWageArr.every(isAllFulltimeWage));


//7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
	return dailyWage.includes("80");
}
console.log("UC 7F - check if any part time wage: "
	+mapDayWithWageArr.some(isAnyPartTimeWage));


//UC 7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage)
{
	if(dailyWage > 0) return numOfDays+1;
	return numOfDays;
}
console.log("UC 7G - Number of Days Employee Worked: "
	+ empDailyWageArr.reduce(totalDaysWorked, 0));

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage)
{
	return totalWage + dailyWage;
}
console.log("UC8 - Employee Wage Map totalHrs: "
	+ Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
	