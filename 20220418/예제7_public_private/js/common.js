'use strict'

class User {
  #idNumber = '1234'; // private field
  constructor(name,age,local) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  //소개
  introduce(){
    alert(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다. ${this.#idNumber}`)
  }
}

let user1 = new User('x',39,'LA');
// console.log(user1.name);
user1.introduce();
console.log(user1.#inNumber); // private field 외부 접근 실행(failed)
