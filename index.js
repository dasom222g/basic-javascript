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

const add = (num1, num2) => {
  result = num1 + num2;
  // console.log("두 숫자의 합은", result, "입니다");
  console.log(`두 숫자의 합은 ${result}입니다`);
  return result;
};

// function double(num) {
//   return num * 2;
//   console.log("🔥🔥함수 종료!!");
// }

// const double = (num) => {
//   return num * 2;
// };

const double = (num) => num * 2;

const sum = add(12, 345);
const doubleResult = double(sum);
console.log("🚀 ~ doubleResult:", doubleResult);

function validCheck(text) {
  // 유효성 체크
  const check = text !== ""; // boolean
  if (check === false) {
    return;
  }

  console.log("유효한 값입니다");
}

validCheck("후츠릿");

console.log("==================");

// 조건문
const score = 50;

// if (score >= 60) {
//   console.log("합격");
// } else {
//   console.log("불합격");
// }

// score >= 60 ? console.log("합격") : console.log("불합격");

console.log(score >= 60 ? "합격" : "불합격");

// if (score >= 90) {
//   console.log("A등급");
// } else if (score >= 80) {
//   console.log("B등급");
// } else if (score >= 70) {
//   console.log("C등급");
// } else {
//   // 70점 미만인경우
//   console.log("D등급");
// }

console.log("끝!!!");
