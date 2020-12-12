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

while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
	totalWorkingDays < NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs = totalEmpHrs+empHrs
	empDailyWageArr.push(calcDailyWage(empHrs));
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