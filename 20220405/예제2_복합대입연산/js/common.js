// // 전위 연산
// var a,b
// b = 2*4;
// a = ++b;
// console.log(a)
// console.log(b)

// // 후위 연산
// var _a,_b
// _b = 9%2;
// _a = _b++;
// console.log(_a)
// console.log(_b)

// 비교연산자
// var _num_1 = 10;
// var _num_2 = 20;
// console.log( _num_1 < _num_2 );

// 복합대입연산
var _x, _y, _total
_x = 10;
_y = 5;
console.log('계산 전 _x의 값 : '+_x);

// // 계산 합계
// _x = _x + _y; // _ x에 합계를 재할당
// console.log('계산 후 _x의 값 : '+_x);

// 복합 대입 연산
_x += _y;
console.log('복합대입 연산 계산 후 _x의 값 : '+_x);
