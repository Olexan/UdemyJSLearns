"use strict";

const num = 50;
/*
if (num < 49){
    console.log('Error');
} else if (num > 100){
    console.log('Too much');
} else {
    console.log('Ok');
}

(num === 50) ? console.log('Ok') : console.log('Error');
*/ 

/* 
while(num <= 55){
    console.log(num);
    num++;
}

do{
    console.log(num);
    num++;
}
while(num <55);
*/

for (let i = 1; i < 8; i++) {
    if (i === 3){
        break;
    }
    console.log(i);
    i++;
}

switch (num){
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 51:
        console.log('Ok');
        break;
    default:
        console.log('No way');
        break;
}