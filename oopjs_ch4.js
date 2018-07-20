var hero = {
  breed : 'Turtle',
  occupation : 'Ninja',
  say : function(){
    return 'I am'+hero.occupation;
  }
};
hero.location = 'seoul';

hero.say=function(){
  return 'I am '+hero.occupation;
};

var hero2 = {
  name : 'Rafaelo',
  sayName: function(){
    return this.name;
  }
};

function Hero3(){
  this.occupation = 'Student';
}

var hero4 = new Hero3();
hero4.occupation;

function Hero(Name){
  this.name= Name;
  this.occupation= 'Ninja';
  this.whoAreYou= function(){
    return "i'm "+this.name+" and I'm "+this.occupation;
  };
}

var h1= new Hero('superman');
var h2= new Hero('batman');
h1.whoAreYou();

var a=1;

window.a;
this.a;


function Hero(name){
  this.name = name;
}

var h = Hero('park');
h.name;
typeof h;
window.name;

var h2= new Hero('Lee');
h2.name;
typeof h2;

function factory(name){
  return {
    name : name
  };
}

var o = new factory('one');
o.name;

var original = {harmony:1};
var myCopy= original;
myCopy.harmony;//1
myCopy.harmony = 100;
original.harmony; //100

var nullify = function(o){
  o.harmony = 0;
};

nullify(myCopy);
myCopy.harmony;


for (var i=0; i<5; i++){
  console.log(i);
}

let a=1
let b=2
let val={a,b}
console.log(val)

var obj={
  prop: 1,
  modifier: function(){
    console.log(this.prop);
  }
};

var obj={
  prop:1,
  modifier(){
    console.log(this.prop);
  }
};

let vehicle="car";
function vehicleType(){
  return "truck"
};
let car={
  [vehicle+"_model"]: "ford"
};
let truck={
  [vehicleType()+"_model"]: "mercedez"
};

console.log(car);
console.log(truck);

let object_type = "vehicle";
let obj={
  ["get"+object_type](){
    return "Ford";
  }
};

let a={};
Object.assign(a, {age:25});
console.log(a);
console.log(Object.assign({a:1,b:2},{a:2},{c:4},{b:3}));

a={age:23, gender:"male"};
Object.defineProperty(a, 'superpower',{enumberable:false, value: 'ES6'});
Object.assign(a,{age:25});
Object.assign(a,{superpower: 'es5'});
Object.getOwnPropertyDiscriptor(a, 'superpower');

var config={
  server: 'localhost',
  port: '8080'
}
var server=config.server;
var port=config.port;

let config={
  server: 'localhost',
  port: '8080',
  timeout: 900
};

let {server, port}= config;
console.log(server, port);
var {timeout: t}=config;
console.log(t);

let server='127.0.0.1';
let port='80';
(){server,port}=config);
let timeout=100;

function startServer(configValue){
  console.log(configValue)
}
startServer({server,port,timeout}=config);

let a=1, b=2;
[b,a]=[a,b];
console.log(a,b);


var o={};
var o= new Object();
Object===o;

var abb=[1,2,3,4];
abb.prop=1;
abb.length;

var c=[3,5,1,2,'test'];
c.join(`\n`);

var d=c.slice(1,5);
d;
d.splice(1,3,100,101,102);

function toArray(args){
  var result=[];
  for (var i=0, len=args.length; i<len; i++){
    result.push(args[i]);
  }
  return result;
}
function doSomething(){
  var args=toArray(arguments);
  console.log(args);
}

doSomething("hi", "I'm", "PSH");

function doSomething2(){
  console.log(Array.from(arguments))
}

function doSomething3(){
  console.log(Array.from(arguments, function(elem){return elem+" is mapped";}));
}

let arr=['a','b','c']
for (const index of arr.keys()){
  console.log(index);
}
for (const value of arr.values()){
  console.log(value);
}
for (const [index, value] of arr.entries()){
  console.log(index, value);
}


let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers.find(n=>n>5));
console.log(numbers.findIndex(n=>n>5));

var simple = a=> a>15? a:15;
simple(16);
simple(10);


var some_obj={
  name: 'NInja',
  say: function(...who){
    return 'Hey '+who+', '+'Im '+this.name;
  }
};

some_obj.say('PS');

var my_obj={
  name: 'Ninggen'
};

some_obj.say.call(my_obj, 'PS');
some_obj.say.call(my_obj, 'PS','SH');


function f(){
  var args = [].slice.call(arguments);
  return args.reverse();
}

var greeter={
  default: 'Hello',
  greet: function(names){
    names.forEach(function(name){
      console.log(this.default+name);
    })
  }
};
console.log(greeter.greet(['world','heaven']));
// 오류. 서브루틴의 this값을 사용불가. undefinedworld. undefinedheaven이 된다.

var greeter ={
  default: 'hello',
  greet: function(names){
    let that = this;
    names.forEach(function(name){
      console.log(that.default+name);
    })
  }
};
console.log(greeter.greet(['world','heaven']));
//꾸준히 트랙킹을 해줘야함. 불편, 유지보수 힘듬.

var greeter ={
  default: 'hello',
  greet: function(names){
    names.forEach(names=>{
      console.log(this.default+names);
    })
  }
};
console.log(greeter.greet(['world','heaven']));

Object.prototype.toString.call({});
Object.prototype.toString.call([]);

var atest=[];
Object.assign(atest, {t: 'test'});//[ t: test]
atest.push(1,2,3,4);//[1,2,3,4, t:test]
Object.prototype.toString(atest);
var btest=[1,2,3,4];
Object.prototype.toString(btest);//?왜 object object가 나오는지??
Object.prototype.toString.call([1,2,3,4]);//Object Array


var toStr = Object.prototype.toString;

(function(){
  return toStr.call(arguments);
})();

var arrtest= new Array();
Object.prototype.toString(arrtest);

var b= new Boolean();
b;


var n= new Number(123.534);
n;

"potatoes"["potatoes".length-1]; // 마지막 글자

Boolean("");//false
Boolean(new String("")); //true (모든 객체는 true값 반환)

'loremipsum'.toLowerCase().indexOf('lorem'.toLowerCase());

var stats= [0, 0, 0, 0, 0, 0, 0];
for (var i=2016; i<3016; i++){
  stats[new Date(i, 0, 28).getDay()]++;
}
stats;


var s= new String('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
s.match(/ipsum/g);
s.search(/i.*m/i);
s.replace(/[A-Z]/g, "\n$");

var email= "sigus128@gmail.com";
var username= email.replace(/(.*)@.*/, "$1");

function replaceCallback(match){
  return "_"+match.toLowerCase();
}
s.replace(/[A-Z]/g, replaceCallback);

var glob;
var re=/(.*)@(.*)\.(.*)/;//형식과 매칭시키는 정규식
var callback= function(){
  glob= arguments;
  return arguments[1]+' at '+arguments[2]+' dot '+arguments[3];
};
"sigus128@gmail.com".replace(re, callback);
glob;

"pool".replace('o', '*');//p*ol
"pool".replace(/o/g, '*');//p**l




try{
  iDontExist();
}catch(e){
  alert(e.name+': '+e.message);
}finally{
  alert('Finally!');
}


try{
  var total= maybeExist();
  if (total===0){
    throw new Error('Division by Zero');
  }else {
    alert(50/total);
  }
}catch(e){
  alert(e.name+": "+e.message);
}finally{
  alert('Finally');
}


throw{
  name: "MyError",
  message: "OMG!"
};

c=[1,2,[1,2]];
c.sort();
c.join('--');
console.log(c);

var myString= function(input){
  var index=0;
  this._value = ''+input; //문자열로 변환
  while (input[index]!==undefined){
    this[index]=input[index];
    index++;
  }
  this.length= index;
};
myString.prototype={
  constructor: myString,
  valueOf: function valueOf(){
    return this._value;
  },
  toString: function toString(){
    return this.valueOf;
  },
  charAt: function(index){
    return this[parseInt(index, 10) || 0];
  },
  concat: function(){
    var cont;
    for (var i=0; i<arguments.length; i++){
      cont += arguments[i];
    }
    return cont;
  },
  slice: function(a,b){
    var cont='';
    if(a<=b){
      for (var i=a; i<b; i++){
        cont += this[i];
      }
    }else if (b<0 && a+this.length+b<this.length){
      for (var i=a; i<this.length+b; i++){
        cont += this[i];
      }
    }else {cont='Error';}
    return cont;
  },
  split: function(le){
    /*var res, ans=[], ind=0;
    for(var a=0; a<this.length; a++){
      for (var i=ind; i<this.length; i++){
        if (this[i]!==le){
          ans[a] += this[i];
          ind++;
        }else{ break; }
    }*/
    var index=0, result=[], original=this.valueOf(), match, pattern='', modifiers='g';
    if(le instanceof RegExp){
      pattern = le.source;
      modifiers += le.multiline ? 'm' : '';
      modifiers += le.ignoreCase ? 'i' : '';
    }else{ pattern =le;}
  le = RegExp(pattern, modifiers);

  while(match = le.exec(original)){
    result.push(this.slice(index, match.index));
    index=match.index + new myString(match[0]).length;
  }
  result.push(this.slice(index));
  return result;
}
}

myString.prototype.reverse = function reverse(){
  return this.valueOf().split("").reverse().join("");
};


function myArray(length){
  if (typeof length === 'number' && arguments[1]== undefined){
    this.length= length;
    return this;
  }else{
    this.length = arguments.length;
    for (var i=0, len=arguments.length; i<len; i++){
      this[i]=arguments[i];
    }return this;
  }
}

//push, toString, pop, join
myArray.prototype={
  constructor : myArray,
  join: function(args){
    var result='';
    if (args===undefined){
      args=',';
    }
    for (var i=0; i<this.length-1; i++){
      result += this[i]===undefined? '' : this[i];
      result += args;
    }
    result+= this[i]===undefined? '' : this[i];
    return result;
  },
  toString: function toString(){
    return this.join();
  },
  push: function(){
    var res=[];
    for(var i=0, len=arguments.length; i<len; i++){
      this[length+i+1]=arguments[i];
      res[i]=arguments[i];
    }
    this.length+= arguments.length;
    return res;
  },
  pop: function(){
    var eli= this[this.length-1];
    this[this.length-1]=undefined;
    this.length = this.length-1;
    return eli;
  }
}

var myMath= (function(){

  function isArray(ar){
    return Object.prototype.toString.call(ar)==='[Object Array]';
  }

  function sort(numbers){
    return Array.prototype.sort.call(numbers, function (a,b){
      if(a===b){ return 0; }
      else{ return 1*(a>b)-0.5;}//0.5 or -0.5
    });
  }

  return {
    PI: 3.14159265358973,
    E : 2.718281828459045,
    LN10: 2.302585092994046,
    LN2: 0.6931471805599453,

    max: function max(){
      var numbers=arguments;
      if(isArray(numbers[0])){ numbers= numbers[0];}
      return sort(numbers)[numbers.length-1];
    },

    min: function min(){
      if(isArray(numbers)){return this.min.apply(this, numbers[0]);}
      var min = numbers[0];
      for (var i=1; i<numbers.length; i++){
        if (min>numbers[i]){
          min=numbers[i];
        }
      } return min;
    },

    rand: function rand(min, max, inclusive){
      if (inclusive){
        return Math.round(Math.random()*(max-min)+min);
      }
      return Math.floor(Math.random()+(max-min-1)+min+1);
    }
  };
})();
