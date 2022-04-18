'use strict'

class Mobility {
  static staticField = 'static1234';
  constructor(kind,mName,year) {
    this.kind = kind;
    this.mName = mName;
    this.year = year;
  }
}

let mobility1 = new Mobility('승용차','v3','2020');
console.log(mobility1.staticField); // 생성자 객체에서는 확인할 수 없음
console.log(Mobility.staticField); // 원형 객체에서는 상수값을 가져올 수 있음
