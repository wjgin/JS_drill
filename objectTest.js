
// Object 접근 테스트
var object = {};

object.arr = [];
console.log(object);    // { arr: [] }

object.arr.push('first');
console.log(object.arr);    // [ 'first' ]

var key = 'arr';
object[key].push('second');
console.log(object.arr);    // [ 'first', 'second' ]





