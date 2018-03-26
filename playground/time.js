// Unix Epic Time: Jan 1st 1970 00:00:00 am

var moment = require('moment');

// let date = new Date();
// let months = ['Jan','Feb']
// console.log(date.getMonth());

// let date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


let someTimeStamp = moment().valueOf();
console.log(someTimeStamp)
let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));
