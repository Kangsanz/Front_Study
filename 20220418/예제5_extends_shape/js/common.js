'use strict'
class Shape {
  static circleRate = 3.14;
  constructor(width,height,color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  inputDraw(a,b) { // 매개변수 추가 : 깂을 받아와서 그리기
    // 드로잉 로직 구현
    console.log(`${a};${b}`);
  }
  draw() {
    console.log('도형 그리기');
  }
  getArea() {
    console.log(`${this.width*this.height}`);
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    console.log('삼각형 그리기');
    super.draw(); // 오버라이딩시 해당 함수 내에서 부모 함수 불러오기
  }
  getArea() {
    console.log('삼각형의 넓이:'+(this.width*this.height)/2);
  }
}
class Circle extends Shape {
  constructor(radius,color) {
    super();
    /* 생성자 재정의시 부모의 field를 사용하지 않더라도
    먼저 호출 후 아래 재정의 하여 사용 */
    this.radius = radius;
    this.color = color;
  }
  getArea() {
    console.log(`파이 상수 : ${Shape.circleRate}`);
    console.log('원의 넓이 : '+this.radius*this.radius*Shape.circleRate);
  }
  rotate() { //개별 함수 만들기

  }
}

let rect = new Rectangle(5,8,'red');
let tria = new Triangle(5,8,'blue');
let circle = new Circle(50,'yellow');

rect.getArea();
console.log(rect.color);
rect.inputDraw(10,'도형그리기');
rect.draw();
rect.getArea();

tria.getArea();
tria.draw();

circle.getArea();
