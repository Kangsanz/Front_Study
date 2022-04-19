'use strict'

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.getProduct = function(){
    console.log('get product!!!');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Bakery(name, price) {
  Product.call(this, name, price);
  this.category = 'bakery';
  this.pdCheck = function(){
    return `${this.category} 카테고리에서 구매하신 상품은 ${this.name}이고
    상품의 금액은 ${this.price}원입니다.`
  }
}
let bakery = new Bakery('cheese-bread',7000)
console.log(bakery.pdCheck());
