// const username = "정효진";
let username = "정효진";
const userage = 20;
console.log("🚀 ~ userage:", userage);

console.log("변경 전", username);

username = "후츠릿";
console.log("변경 후", username);

console.log("username 타입: ", typeof username);
console.log("userage 타입: ", typeof userage);

const bool = true;
console.log("🚀 ~ bool:", bool, "type: ", typeof bool);

let today;
console.log("🚀 ~ today:", today, "type: ", typeof today);

const a = null;
console.log("🚀 ~ a:", a);

// 함수 정의
function helloWorld() {
  // 실행시킬 코드
  console.log("Hello world");
}

// 함수 실행
helloWorld();
// console.log("🚀 ~ helloWorld:", helloWorld);

function greeting(username) {
  // username: 매개변수(parameter)
  console.log("반갑습니다.", username, "님");
}

greeting("후츠릿"); // "후츠릿": 인자(argument)

// 미션
// add라는 함수를 만들어서 2개의 숫자를 받아와서 두 숫자의 합을 console에 찍는 함수를 만들어보세요

function add(num1, num2) {
  result = num1 + num2;
  // console.log("두 숫자의 합은", result, "입니다");
  console.log(`두 숫자의 합은 ${result}입니다`);
  return result;
}

function double(num) {
  return num * 2;
}

const sum = add(12, 345);
const doubleResult = double(sum);
console.log("🚀 ~ doubleResult:", doubleResult);
