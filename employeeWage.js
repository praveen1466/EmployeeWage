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
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
	totalWorkingDays < NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs = totalEmpHrs+empHrs
	empDailyHrsAndWageArr.push({
		dayNum:totalWorkingDays,
		dailyHours:empHrs,
		dailyWage:calcDailyWage(empHrs),
		toString(){
			return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
					' And Wage Earned = ' + this.dailyWage
		},
	});
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

//UC 10 object creation
console.log("UC10 showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);

//UC 11A to UC 11D using object functions along with arrow functions
let totalWages = empDailyHrsAndWageArr
					.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
					.reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
					.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
					.reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("UC 11A Total Hours: " +totalHours+ " Total Wages: " +totalWages);

process.stdout.write("UC 11B Logging Full Work Days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
						.forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
							.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
							.map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\nUC 11C PartWorking DaysStrings: "+partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
						.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
						.map(dailyHrsAndWage => dailyHrsAndWage.dayNum);

console.log("UC 11D NonWorkingDayNums: "+nonWorkingDayNums);









