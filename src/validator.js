// [유효성 검증 함수]: 영어 또는 숫자만 가능 (첫 글자가 영어일 필요 없음)
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z0-9]+$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상, 대문자, 소문자, 숫자, 특수문자(@$!%*#?&) 포함 필수
function strongPassword(str) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

// 유효성 검증 테스트 실행 (디버깅용)
console.log('`rocketboost`는 영어만 포함하므로', onlyNumberAndEnglish('rocketboost')); // true
console.log('`elice킴`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('elice킴')); // false
console.log('`123ABC`는 숫자와 영어만 포함하므로', onlyNumberAndEnglish('123ABC')); // true
console.log('`qwerty`는 충분히 강력하지 않은 암호이므로', strongPassword('qwerty')); // false
console.log('`q1W2e3r4`는 특수문자를 포함하지 않으므로', strongPassword('q1W2e3r4')); // false
console.log('`q1W2e3r4!`는 조건을 충족하므로', strongPassword('q1W2e3r4!')); // true