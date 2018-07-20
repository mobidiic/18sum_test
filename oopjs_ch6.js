function Gadget(name, color){
  this.name = name;
  this.color = color;
  this.whatAreYou= function(){
    return "I am a "+this.color+" "+this.name;
  };
};
Gadget.prototype.price= 100;
Gadget.prototype.rating= 3;
Gadget.prototype.getInfo= function(){
  return 'Rating: '+this.rating+'\nprice: '+this.price;
};
//Gadget.prototype={} 여기에 쓰는 방식은 추가가 아닌 덮어쓰는것. (근데 추가도 됨!)

var newtoy= new Gadget('webcam', 'black');
newtoy.name;

Gadget.prototype.get=function(what){
  return this[what];
};

var params={
  productid= 666,
  section= 'products'
};
var url='http://example.org/page.php?', i, query=[];

for (i in params){
  query.push(i+ '='+ params[i]);
}
url += query.join('&');

for (var prop in newtoy){
  console.log(prop + '='+ newtoy[prop]);
}

for (var prop in newtoy){
  if(newtoy.hasOwnProperty(prop)){
    console.log(prop + '=' + newtoy[prop]);
  };
}

newtoy.propertyIsEnumerable('price');
newtoy.constructor.prototype.propertyIsEnumerable('price');

var monkey={
  hair: true,
  feeds: 'bananas',
  breathes: 'air'
};
function Human(name){
  this.name= name;
};
Human.prototype= monkey;

var george = new Human('George');
monkey.isPrototypeOf(george);//true
Object.getPrototypeOf(george).feeds;

var developer= new Human();
developer.feeds= 'Pizza';
developer.hacks= 'Javascript';

Array.prototype.inArray= function(needle){
  for (var i=0, len=this.length; i<len; i++){
    if (this[i]===needle){
      return true;
    }
  }return false;
};

var a=[1,2,3,4];
a.inArray(3);


String.prototype.reverse = function (){
  return Array.prototype.reverse.apply(this.split('')).join('');
}
"this".reverse();

if(typeof String.prototype.trim !== 'function'){
  String.prototype.trim = function (){
    return this.replace(/^\s+|\s+$/g,'');
  };
}

function Dog(){
  this.tail= true;
}
var benji = new Dog();
benji.tail;
benji.constructor;

Dog.prototype={
  paw: 4
};

typeof benji.paw;
typeof benji.tail;

var suji = new Dog();
typeof suji.paw;
typeof suji.tail;//둘다 값이 나옴!

benji.constructor;
suji.constructor;

Dog.prototype.constructor = Dog;
suji.constructor;

suji.tail;
suji.paw;
benji.paw; // undefined. How?

benji.__proto__=suji.__proto__;




//연습문제
var shape = {
  type : null,
  getType : function(){
    return this.type;
  }
}
// shape.prototype.getType = function(){
//   return this.type;
// }  이방식은 왜 안되는가? function 선언시에는 먹혔다. 객체선언시에는 안먹히는가? 생성자 함수!!!!

function Triangle(a,b,c){
  this.a= a;
  this.b= b;
  this.c= c;
}
Triangle.prototype= shape;
Triangle.prototype.constructor= Triangle;
Triangle.prototype.type = 'triangle';

var tri = new Triangle(3,4,5);

Triangle.prototype.getPerimeter= function(){
  return `Perimeter : ${this.a}, ${this.b}, ${this.c}`;
}


  for (const i in tri){
    if (tri.hasOwnProperty(i)){
      console.log(i, '=', tri[i]);
    }
  }


if(typeof Array.prototype.shuffle !== 'function'){
  Array.prototype.shuffle= function(){
    return this.sort(function (){
      return Math.random()-0.5;
    });
  }
};//if문이 안에 들어가 있으면, 먼저 선언된 다음이라 소용이 없다.
