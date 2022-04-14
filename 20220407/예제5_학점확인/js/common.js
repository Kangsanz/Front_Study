'use strict'
let num = prompt('학점을 입력해주세요.', '숫자')
let score = Number(num)

if (num == '' || num == ' ' || num == '숫자') {
  alert('입력된 숫자가 없습니다.')
} else if (isNaN(num)) {
  alert('영문자/한글/특수문자는 사용할 수 없습니다. 숫자를 입력해주세요.')
} else {
  alert(`당신의 학점은 ${score} 입니다.`)
  if (score >= 4.3) {
    alert('A+')
  } else if (score >= 3.9) {
    alert('A0')
  } else if (score >= 3.5) {
    alert('A-')
  } else if (score >= 3.2) {
    alert('B+')
  } else if (score >= 2.9) {
    alert('B0')
  } else if (score >= 2.5) {
    alert('B-')
  } else if (score >= 2.2) {
    alert('C+')
  } else if (score >= 1.9) {
    alert('C0')
  } else if (score >= 1.5) {
    alert('C-')
  } else if (score >= 1.2) {
    alert('D+')
  } else if (score >= 0.9) {
    alert('D0')
  } else if (score >= 0.1) {
    alert('D-')
  } else {
    alert('F')
  }
}
