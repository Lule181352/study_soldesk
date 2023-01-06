/* 변수들
number, string, boolean, null,undefinded
object, function, ...
*/

let age = 20;
console.log(age);
console.log(typeof age);

/* var 문제점이 업데이트 된것이 let
        문제점
    1. Hoisting (끌어올린다.)
            전역변수처럼 쓰이는데 위에있는거는 안에 없다

    2. 블락 무시
*/
console.log(whyDontUse);

var whyDontUse;
whyDontUse = 1111;

var test = 1;
console.log(test);

{
  var whyDontUse2;
  whyDontUse2 = 2222;
}
console.log(whyDontUse2);



