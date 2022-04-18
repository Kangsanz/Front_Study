'use strict'
// function testFunc() {}
let objNum = {name:'jane'}
console.log(objNum.name);

class Test {
  constructor(num) {
    this.num = num;
  }
  popupFunc(){
    alert('this is popup')
  }
}

let testBox = new Test('안녕하세요');
console.log(testBox.popupFunc)
console.log(testBox.popupFunc())
