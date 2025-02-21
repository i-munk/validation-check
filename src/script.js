// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const passwordInput = document.getElementById("password");
const passwordRetypeInput = document.getElementById("password-retype");
const mismatchMessage = document.querySelector(".mismatch-message");
const usernameInput = document.getElementById("username");
const failureMessage = document.querySelector(".failure-message");
const successMessage = document.querySelector(".success-message");

// 비밀번호 일치 여부 확인 함수
function isMatch(password1, password2) {
  return password1 === password2;
}

// 아이디 길이 검사 함수
function isMoreThan4Length(value) {
  return value.length >= 4;
}

// 사용자가 아이디를 입력할 때 (이벤트 객체 활용)
if (usernameInput) {
  usernameInput.addEventListener("keyup", function (event) {
    const value = event.target.value.trim(); // 공백 제거

    if (value.length === 0) {
      // 입력이 없을 경우 실패 메시지만 보이도록 수정
      successMessage.classList.add("hide");
      failureMessage.classList.remove("hide"); // 실패 메시지 보이기
    } else if (isMoreThan4Length(value)) {
      successMessage.classList.remove("hide"); // 4글자 이상 → 성공 메시지 표시
      failureMessage.classList.add("hide");  // 실패 메시지 숨김
    } else {
      successMessage.classList.add("hide");  // 성공 메시지 숨기기
      failureMessage.classList.remove("hide"); // 4글자 이하 → 실패 메시지 표시
    }
  });
}

// 비밀번호 일치 여부 검사 (비밀번호 확인 입력창)
if (passwordRetypeInput) {
  passwordRetypeInput.addEventListener("keyup", function (event) {
    const value = event.target.value.trim();

    if (value === "") {
      // 입력이 없을 경우 메시지 숨기기
      mismatchMessage.classList.add("hide");
    } else if (isMatch(passwordInput.value, passwordRetypeInput.value)) {
      mismatchMessage.classList.add("hide"); // 일치하면 숨기기
    } else {
      mismatchMessage.classList.remove("hide"); // 불일치하면 표시
    }
  });
}