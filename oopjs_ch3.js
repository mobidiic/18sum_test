
var tst=sum(3,6);
tst;

function sumOnSteroids(){
  var i;
  var res=0;
  var num_of_params=arguments.length;
  for (i=0; i<num_of_params; i++){
    res += arguments[i];
  }
  return res;
}

function render(fog_level=0, spark_level=100){
  console.log(`fog level : ${fog_level}, spark level : ${spark_level}`)
}

var scop="outer";
function scoper(val=scop){
  var scop="inner";
  console.log(val);
}
scoper()

function sayThings(tone, ...quotes){
  console.log(Array.isArray(quotes));
  console.log(`In ${tone} voice, I say ${quotes}`)
}
sayThings("james", "Im", "not", "yours");

function sumAll(a,b,c){
  return a+b+c;
}
var numbers=[4,5,6];
console.log(sumAll(...numbers));


var a=123;
function f(){
  alert(a);
  var a=1;
  alert(a);
}


function swap(a,b){
  if(a>0 && b>0){
    let tmp=a;
    a=b;
    b=tmp;
  }
  console.log(a,b);
  console.log(tmp);
  return [a,b];
}
swap(1,3);

function letTst(){
  alert(h);
  let h=3;
  alert(h);
}
letTst();

const car={};
car.tyres=4;

var letTst2=letTst;
letTst2();
var swap2=swap;
swap2(2,3);

function invokeAdd(a,b){
  return a()+b();
}
invokeAdd(function(){return 1;}, function(){return 2;});



function multiplyByTwo(a, ...z){
  var i, num_of_params = arguments.length, res=[];
  for (i=0; i<num_of_params; i++){
    res[i] = arguments[i]*2;
  }
  return res;
}
multiplyByTwo(1,2,3);

function addOne(a){
  return a+1;
}
addOne(2);

var myArr=[];
myArr=multiplyByTwo(40,5,60);
for (var i=0; i<3; i++){
  myArr[i]=addOne(myArr[i]);
}
myArr;


function multiplyByTwo(a,b,c, callback){
  var i, res=[];
  for (i=0; i<3; i++){
    res[i] = callback(arguments[i]*2);
  }
  return res;
}
multiplyByTwo(1,2,3, function(a){return a+1;});

function addOne(a){
  return a+1;
}
multiplyByTwo(1,2,3, addOne);

function multiplyByTwo(a,b,c){
  var i, ar=[];
  for (i=0; i<3; i++){
    ar[i] = arguments[i]*2;
    }
    return ar;
  }

(
  function (){
    alert('boo');
  }
)();

var result= (function(){})();

function outer(p){
  function inner(input){
    return input*2;
  }
  return 'the result is '+inner(p);
}
outer(22);

function a(){
  alert('A');
  return function(){alert('B');};
}

function a(){
  alert('A');
  a = function (){
    alert('B');
  };
}

var a = (function(){

  function someSetup(){
    var setup = 'done';
  }
  function actualWork(){
    alert('Worky*2');
  }
  someSetup();
  return actualWork;

}());



var a='global';
var F = function (){
  var b="local";
  var N = function(){
    var c ='inner';
    return b;
  }
  return N;
}

F()();

var someFunc=F();
someFunc();


var inner;
var F = function(){
  var b = 'local';
  var N = function(){
    return b;
  }
  inner = N;
};


function F(param){
  var N = function(){
    return param;
  };
  param++;
  return N;
}
F(1);//f
F(1)();//2


function F(){
  var arr=[], i;
  for (i=0; i<3; i++){
    arr[i]=function(){
      return i;
    };
  }
  return arr;
}
var arr=F();
arr[0](); //3

function F(){
  var arr=[], i;
  for (i=0; i<3; i++){
    arr[i]=(function(x){
      return function(){
        return x;
      };
    })(i);
  }
  return arr;
}

var getValue, setValue;
(function(){
  var secret = 0;

  getValue = function(){
    return secret;
  }

  setValue = function(n){
    if (typeof n ==="number" ){
      secret = n;
    }
  }
})();
getValue();
setValue(321);
getValue();


function setup(x){
  var i=0;
  return function(){
    return x[i++];
  };
}
var arr=[1,2,3,5,6,7,88,4,2];
var next=setup(arr);
next();

const nm=[1,2,3];
const squares = nm.map(function(n){
  return n*n;
});
console.log(squares);

const squres_6=nm.map(n=>n*n)




//연습문제
var getRGB = function(color){
  var r=parseInt(color[1]+color[2],16);
  var g=parseInt(color[3]+color[4],16);
  var b=parseInt(color[5]+color[6],16);
  return `rgb(${r},${g},${b})`;
};
var a = getRGB("#00FF00");
a;


var a=1;
function f(){
  function n(){
    alert(a);
  }
  var a=2;
  n();
}
f();
