const iter=['a','b'];
for (const i of iter){
  console.log(i);
}

function iter(array){
  var nextId=0;
  return {
    next: function(){
      if(nextId<array.length){
        return {
          value: array[nextId++],
          done: false
        };
      }else{
        return {
          done: true
        };
      }
    }
  }
};

var it= iter(['hello', 'iterator']);
console.log(it.next().value);
console.log(it.next().done);//이러면 nextId가 1 올라가버려서 밑에께 undefined나옴. 중간체크 어캐함?
console.log(it.next().value);
console.log(it.next().done);


let iter={
  0: 'hello',
  1: 'world of',
  2: 'iterator',
  length: 3,
  [Symbol.iterator](){
    let index=0;
    return {
      next: ()=>{
        let value = this[index];
        let done = index>=this.length;
        index++;
        return {value, done};
      }
    };
  }
};
for (let i of iter){
  console.log(i);
}

function *generatorFunc(){
  console.log('1');
  yield;
  console.log('2');
}
const generatorObj=generatorFunc();
console.log(generatorObj.next());
console.log(generatorObj.next());

function *logger(){
  console.log('start');
  console.log(yield);
  console.log(yield);
  console.log(yield);
  return('end');
}
var genObj=logger();
console.log(genObj.next());
console.log(genObj.next('Save'));
console.log(genObj.next('our'));
console.log(genObj.next());


function *logger(){
  yield 'a';
  yield 'b';
};
var genObj = logger();
console.log(typeof genObj[Symbol.iterator]==='function');//iterable
console.log(typeof genObj.next === 'function');//iterator
console.log(genObj[Symbol.iterator]()===genObj);

for (const i of logger()){
  console.log(i);
}
var arr=[...logger()];
console.log(arr);
var [x,y]=logger();
console.log(x,y);

var m= new Map();
m.set('first',1);
console.log(m.get('first'));
console.log(m.has('first'));
m.delete('first');
m.set('foo',1).set('bar',2);
console.log(m.size);
m.clear;

var m2=new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
var m3=new Map().set(1,'one').set(2, 'two').set(3, 'three');

var obj={}
var m2=new Map([
  [1, 'one'],
  [2, 'two'],
  [obj, 'three']
]);
console.log(m2.has(obj));
obj={
  name: 'oo',
  height: 189
};//이래도 이미 만들어진 맵에는 수정 안됨.

for (const k of m2.keys()){
  console.log(k);
}
for (const k of m2.values()){
  console.log(k);
}
for (const k of m2.entries()){
  console.log(k);
}
for (const entry of m2.entries()){
  console.log(entry[0],entry[1]);
}
for (const [key, value] of m2.entries()){
  console.log(key, value);
}
for (const [key, value] of m2){
  console.log(key, value);
}

var keys=[...m2.keys()];
console.log(keys);
var keys=[...m2];
console.log(keys);

var s= new Set();
s.add('first');
s.has('first');
s.delete('first');
s.has('first');

const colors = new Set().add('red', 'white', 'blue');//이러면 하나만 들어감
const colors = new Set(['red', 'white', 'green']);
