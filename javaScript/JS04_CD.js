//조건문

/*
80 이상 - 상
50 이상 - 중
나머지  - 하
*/

let score = 80;

if (score >= 80) {
  console.log("상");
} else if (score >= 50) {
  console.log("중");
} else {
  console.log("하");
}

// printf
// %s

let a = 6;
let b = "히히";

console.log("a는", a + "이고, b는 " + b + "이다");

console.log(`a는 ${a}이고 ,b는 ${b}이다`);
