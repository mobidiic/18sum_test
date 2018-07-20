function Shape(){
  this.name = 'shape';
  this.toString= function(){
    return this.name;
  };
};

function TwoDshape(){
  this.name= '2D shape';
};

function Triangle(side, height){
  this.name= 'triangle';
  this.side= side;
  this.height= height;
  this.getArea= function(){
    return this.side*this.height/2;
  };
};

TwoDshape.prototype= new Shape();
Triangle.prototype= new TwoDshape(); //상속시켜준다. 다른 객체로 덮어씌우는 것을 통해.

TwoDshape.prototype.constructor= TwoDshape;
Triangle.prototype.constructor= Triangle; //constructor 재설정

var td=new TwoDshape;
td.constructor===TwoDshape;
td.toString();


function Shape(){};
Shape.prototype.name='shape';
Shape.prototype.toString= function(){
  return this.name;
}

function TwoDshape(){}
TwoDshape.prototype= new Shape();
TwoDshape.prototype.constructor= TwoDshape;

TwoDshape.prototype.name='2D shape';

function Triangle(side, height){
  this.side=side;
  this.height=height;
}

Triangle.prototype= new TwoDshape();
Triangle.prototype.constructor= Triangle;

Triangle.prototype.name='triangle';
Triangle.prototype.getArea= function(){
  return this.side*this.height/2;
}



//중간자 사용
function Shape(){};
Shape.prototype.name= 'shape';
Shape.prototype.toString= function(){
  return this.name;
};
var F= function(){};
F.prototype= Shape.prototype;

function TwoDshape(){};
TwoDshape.prototype = new F();
TwoDshape.prototype.constructor= TwoDshape;

TwoDshape.prototype.name='2d shape';

function Triangle(side, height){
  this.side = side;
  this.height = height;
}

var F= function(){};
F.prototype=TwoDshape.prototype;

Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;

Triangle.prototype.name= 'triangle';
Triangle.prototype.getArea= function(){
  return this.side*this.height/2;
};



// function Shape(){};
// Shape.prototype.name= 'shape';
// Shape.prototype.toString= function(){
//   var const = this.constructor;
//   returnconst.uber
//   ? this.const.uber.toString() + ', '+ this.name
//   : this.name;
// }; //이부분 왜 안되는지 모르겠다.
//
// var F= function (){};
// F.prototype= Shape.prototype;
//
// function TwoDshape(){};
// TwoDshape.prototype= new F();
// TwoDshape.prototype.constructor = TwoDshape;
// TwoDshape.uber= Shape.prototype; // 이전과 똑같은데 여기서 부모를 참조하는 속성이 있다.
//
// TwoDshape.prototype.name = '2d shape';
//
// function Triangle(side, height){
//   this.side = side;
//   this.height = height;
// }
//
// var F= function(){};
// F.prototype=TwoDshape.prototype;
// Triangle.prototype=F.prototype;
// Triangle.prototype.constructor=Triangle;
// Triangle.uber=TwoDshape.prototype;
//
// Triangle.prototype.name='triangle';
// Triangle.prototype.getArea= function(){
//   return this.side*this.height/2;
// };


function extend(Child, Parent){
  var F=function(){};
  F.prototype=Parent.prototype;
  Child.prototype=new F();
  Child.prototype.constructor = Child;
  Child.uber= Parent.prototype;
}


function Shape(){};
Shape.prototype.name='shape';
Shape.prototype.toString= function(){
  return this.constructor.uber
  ? this.constructor.uber.toString() + ', ' + this.name
  : this.name;
};

function TwoDshape(){};
extend(TwoDshape, Shape);
TwoDshape.prototype.name='2d shape';

function Triangle(side, height){
  this.side=side;
  this.height=height;
};
extend(Triangle, TwoDshape);
Triangle.prototype.name='triangle';
Triangle.prototype.getArea= function(){
  return this.side*this.height/2;
}

function extend2(Child, Parent){
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p){
    c[i]=p[i];
  }
  c.uber = p;
}


function Papa(){};
function Wee(){};
Papa.prototype.name= 'bear';
Papa.prototype.owns= ['porridge', 'chair', 'bed'];

extend2(Wee, Papa);



function extendCopy(p){
  var c={};
  for (var i in p){
    c[i]=p[i];
  }
  c.uber =p;
  return c;
}

var shape={
  name: 'shape',
  toString: function(){
    return this.name;
  }
};

var twoDi=extendCopy(shape);
twoDi.name= '2d shape';
twoDi.toString=function(){
  return this.uber.toString()+ ', '+this.name;
};

var tri=extendCopy(twoDi);
tri.name='triangle';
tri.gerArea=function(){
  return this.side*this.height/2;
};


tri.side=3;
tri.height=6;



function deepCopy(p, c){
  c= c||{};
  for (var i in p){
    if(p.hasOwnProperty(i)){
      if(typeof p[i] ==='object'){
        c[i]= Array.isArray(p[i]) ? [] : {};
        deepCopy(p[i], c[i]);
      }else{ c[i]=p[i]; }
    }
  }
  return c;
};


var parent ={
  numbers: [1,2,3],
  letters: ['a','b','c'],
  obj: {prop : 1},
  bool: true
};

var mydeep= deepCopy(parent);
var myshallow = extendCopy(parent);



function object(o){
  var n;
  function F(){}
  F.prototype= o;
  return n= new F();
  // n.uber =o;
  // return n;
} // 속성 상속


function objectPlus(o, stuff){
  var n;
  function F(){};
  F.prototype = o;
  n= new F();
  n.uber = o;//여기까지 상속
  for (var i in stuff){
    n[i]=stuff[i];
  }//여기까지가 복사
  return n;
}

var shape= {
  name: 'shape',
  toString: function(){
    return this.name;
  }
};

var twoD = objectPlus(shape, {
  name: '2d shape',
  toString: function(){
    return this.uber.toString()+ ', '+ this.name;
  }
});

var tri= objectPlus(twoD, {
  name: 'triangle',
  getArea: function(){
    return this.side*this.height/2
  },
  side:0,
  height:0
});



function multi(){
  var n={}, stuff, j=0, len=arguments.length;
  for (j=0; j<len; j++){
    stuff = arguments[j];
    for (var i in stuff){
      if(stuff.hasOwnProperty(i)){
        n[i]= stuff[i];
      }
    }
  }return n;
}


var shape= {
  name: 'shape',
  toString: function(){
    return this.name;
  }
};

var twoD ={
  name: '2d shape',
  dimensions : 2
};


var triangle = multi(shape, twoD, {
  getArea: function(){
    return this.side*this.height/2;
  },
  side: 5,
  height: 10
});



var object = function(o){
  var F = function(){};
  F.prototype= o;
  return new F();
}

function trianle(s, h){
  var that= object(twoD);
  that.name='Triangle';
  that.getArea=function(){
    return this.side*this.height/2;
  };
  that.side=s;
  that.height=h;
  return that;
}




function Shape(id){
  this.id = id;
}
Shape.prototype.name='shape';
Shape.prototype.toString= function(){
  return this.name;
};

function Triangle(){
  Shape.apply(this, arguments); // 부모의 자체속성이 자식의 자체속성으로 다시 나온다.참조가 아님.
}
Triangle.prototype= new Shape();
// 그러나 위에꺼랑 여기 두번 호출되는 단점. 여기와 위가 다른 값이면 프로토타입에는 이값이 들어감. 위에는 자체속성으로 들어가고.
Triangle.prototype.name= 'Triangle';


function objectMulti(){
  var Constr, i, prop, mixme;

  var Constr= function(props){
    for (var prop in props){
      this[prop]= props[prop];
    }
  };

  for (var i=0; i<arguments.length-1; i++){
    var mixme = arguments[i];
    for (var prop in mixme){
      Constr.prototype[prop]= mixme[prop];
    }
  }

  return new Constr(arguments[arguments.length-1]);
}
