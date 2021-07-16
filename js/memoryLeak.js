/* 
** Reference-counting garbage collection 의 한계
** : 순환참조
*/

function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o는 o2를 참조한다.
  o2.a = o; // o2는 o를 참조한다.

  return "azerty";
}

f();
