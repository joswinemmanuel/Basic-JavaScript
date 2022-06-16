const days_in_week=7;
//Number of days in a week is a constant

let days_in_month=31;
let no_of_week=days_in_month/days_in_week;
//Number of days in a month may vary

console.log(`Number of days in a week = ${days_in_week}`);

console.log(`Number of days in this month = ${days_in_month}`);
console.log(`Number of weeks in this month = ${no_of_week}`);

days_in_month=30;
no_of_week=days_in_month/days_in_week;

console.log(`Number of days in this month = ${days_in_month}`);
console.log(`Number of weeks in this month = ${no_of_week}`);

days_in_month=29;
no_of_week=days_in_month/days_in_week;

console.log(`Number of days in this month = ${days_in_month}`);
console.log(`Number of weeks in this month = ${no_of_week}`);

days_in_month=28;
no_of_week=days_in_month/days_in_week;

console.log(`Number of days in this month = ${days_in_month}`);
console.log(`Number of weeks in this month = ${no_of_week}`);

/*let	                                        var
  let is block-scoped.	                        var is function scoped.
  let does not allow to redeclare variables.	var allows to redeclare variables.
  Hoisting does not occur in let.	            Hoisting occurs in var.*/

var number=10;
console.log(number);