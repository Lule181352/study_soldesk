/*
    논리 연산자 : 결과 boolean 나오는거
    >, >=, <, <=, ==, !=

*/

let x = 10;
let y = 20;
console.log(x > y);

/*
    결합 연산자 : 논리 연산자 묶은거
    &&, ||,     
    
    !(NOT)
*/

let a = x > y && y < 10;
console.log(a);

/*
 삼항 연산자 : 둘 중 하나
 조건식 ? true값 : false 값
 
 */

//나이가 10살 넘으면 welcome 아니면 go home

let age = 5;
let resulet = age > 10 ? "welcome" : "go home";

console.log(resulet);

//입장료
let ticket = 10000;

// 할인
//나이가 10살 넘으면 1000원 아니면 500원 할인
let dc = age > 10 ? "1000" : "500";

//총금액

if (age < 5) {
  console.log("입장료 : " + (ticket - 500) + "원");
} else {
  console.log("입장료 : " + (ticket - 1000) + "원");
}

//같다 ==, ===

let stringNum = "10";
let numberNum = 10;

// ==타입을 안따짐
console.log(stringNum == numberNum);
console.log(stringNum != numberNum);

// === 타입을 따짐
console.log(stringNum === numberNum);
console.log(stringNum !== numberNum);

console.log("--------------");

//Object
//{}; 객체
let me1 = { name: "ms", age: 20 };
let me2 = { name: "ms", age: 20 };
let me3 = me1;

console.log(me1);
console.log(me1 == me2);
console.log(me1 === me2);

console.log(me1 == me3);
console.log(me1 === me3);

console.log("-----------------");

console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("" == false);
console.log("" === false);
