/*
** 생성자 함수를 이용해 instance 를 생성하고, 해당 instance 에서 생성자함수의 프로토타입 메서드를 사용하는 예제
*/

const Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};


const suzi = new Person('Suzi');
console.log(suzi.getName());        // Suzi