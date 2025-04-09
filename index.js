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

const checkValidText = (userInput) => {
  // 유효성 체크하여 boolean값 반환
  let isValid = true;
  if (!userInput) {
    // 사용자가 값을 입력하지 않은경우
    console.log("사용자가 값을 입력하지 않음");
    isValid = false;
    // alert("값을 입력해주세요");
  } else {
    // 사용자가 값을 입력한 경우
    console.log("사용자가 값을 입력함");
    isValid = true;
  }

  return isValid;
};

console.log("checkValidText=>", checkValidText());

// if (undefined) {
//   console.log("조건식이 true인 경우");
// } else {
//   console.log("조건식이 false인 경우");
// }

// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다

const orderSandwich = (type = "basic") =>
  type === "basic" ? "🥖 + 🥬 + 🍅 + 🧀 + 🥓" : "🥖 + 🥬 + 🍅 + 🥑 + 🥒";

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

console.log("=".repeat(30));

// 배열
const daysOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ daysOfWeek:", daysOfWeek);

const tue = daysOfWeek[1];
console.log("🚀 ~ tue:", tue);

const students = ["정효진", "김재명", "이준범", "정다운", "김현모", "김다솜"];
// 1. 내 이름을 뽑아와서 me라는 변수에 할당하기
// 2. me라는 변수를 console에 찍어보기
const me = students[students.length - 1];
console.log("🚀 ~ me:", me);

// 학생 정보
const studentName = "김재명";
const studentGender = "Male";
const studentAttendanceCheck = true;

const studentInfo = {
  name: "김재명",
  gender: "Male",
  attendanceCheck: true,
};

const key = "gender";
console.log("🚀 ~ studentInfo:", studentInfo);
console.log("name: ", studentInfo.name);
console.log("name: ", studentInfo[key]);

const studentList = [
  {
    name: "김재명",
    gender: "Male",
    attendanceCheck: true,
  },
  {
    name: "정효진",
    gender: "FeMale",
    attendanceCheck: true,
  },
  {
    name: "이준범",
    gender: "Male",
    attendanceCheck: true,
  },
  {
    name: "김현모",
    gender: "Male",
    attendanceCheck: true,
  },
  {
    name: "정다운",
    gender: "Male",
    attendanceCheck: true,
  },
  {
    name: "김다솜",
    gender: "Male",
    attendanceCheck: true,
  },
];

console.log("studentList갯수", studentList.length);
console.log(studentList[1].name);

// for (let i = 0; i < studentList.length; i++) {
//   console.log(`${i + 1}번째 학생이름: ${studentList[i].name}`);
// }

studentList.forEach((value) => {
  console.log("🚀 ~ value:", value.name);
});

// const studentNames = ["김재명", "정효진", ...]

// map
let studentNames = studentList.map((value) => value.name);
console.log("🚀 ~ studentNames:", studentNames);

studentNames = studentNames.map((value) => value + "🔥"); // 원본배열과 갯수가 동일
console.log("🚀 ~ studentNames:", studentNames);

// filter
const filterNames = studentNames.filter((name) => name[0] === "최"); // 원본배열과 갯수가 동일하지 않을수 있음
console.log("🚀 ~ filterNames:", filterNames);

// find
const filterName = studentNames.find((name) => name[0] === "정");
console.log("🚀 ~ filterName:", filterName);

const isLastNameCheck = studentNames.some((name) => name[0] === "정");
console.log("🚀 ~ isLastNameCheck:", isLastNameCheck);

// let i = 0;
// for (i = 0; i < 100; i++) {
//   console.log(`${i}번째 실행`);
// }

// console.log("반복문 끝");
// console.log("i==> ", i);

const h1El = document.querySelector(".title");
const buttonEl = document.querySelector("button");
// console.log("🚀 ~ h1El:", h1El);

const changeH1 = () => {
  h1El.innerText = "JavaScript";
  h1El.style.color = "red";
};

buttonEl.addEventListener("click", changeH1);

console.dir(h1El);

console.log("=".repeat(30));

// Logical operators (단축 평가 논리 계산법)
const user = {
  isLoggedIn: true, // 로그인 여부
  role: "admin", // "guest", "user"
  age: 10,
  hasParentalConsent: true, // 부모의 동의를 받았는지 체크
};

// let canAccessAdminPage; // 관리자페이지 접근 권한 boolean타입

// if (user.isLoggedIn) {
//   if (user.role === "admin") {
//     // 로그인이 되어있고 권한도 있는경우
//     canAccessAdminPage = true;
//   } else {
//     // 로그인은 되어있지만 권한이 없는경우
//     canAccessAdminPage = false;
//   }
// } else {
//   // 로그인이 안된경우
//   canAccessAdminPage = false;
// }

const canAccessAdminPage = user.isLoggedIn && user.role === "admin";
console.log("canAccessAdminPage", canAccessAdminPage);

console.log(
  canAccessAdminPage
    ? "관리자 페이지에 접근할 수 있습니다"
    : "관리자 페이지에 접근할수 없습니다"
);

const canAccessService = user.age >= 18 || user.hasParentalConsent;
console.log("🚀 ~ canAccessService:", canAccessService);

const userInput = "김다솜";

if (!userInput) {
  // 입력값이 비어있는 경우
  alert("입력값이 비어있습니다. 값을 입력해주세요");
} else {
  console.log("다음스텝으로 진행");
}

// 구조 분해 할당
const colors = ["red", "blue"];

const [_, firstColor] = colors;
// secondColor : colors[0]
// firstColor : colors[1]
console.log("🚀 ~ firstColor:", firstColor);
// console.log("🚀 ~ secondColor:", secondColor);

const person = {
  name: "정다운",
  mbti: "INTP",
};

const { name: userName, mbti } = person;
console.log("🚀 ~ name:", userName);
console.log("🚀 ~ mbti:", mbti);

// 미션
const animals = ["개", "고양이", "앵무새"];
// 고양이와 앵무새를 구조분해 할당으로 가져와서 새로운 변수에 저장하세요.

const animals2 = ["하마", "코뿔소"];

const copyAnimals = ["호랑이", ...animals, ...animals2];
console.log("🚀 ~ copyAnimals:", copyAnimals);

const todoItem = {
  title: "밥먹기",
  description: "양갈비 먹으러 갈꺼임",
};

const newTodoItem = {
  ...todoItem,
  isComplete: true,
  description: "소갈비로 변경!!",
};

console.log("🚀 ~ newTodoItem:", newTodoItem);
