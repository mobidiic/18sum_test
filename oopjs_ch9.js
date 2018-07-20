function c(z2){
  console.log(new Error().stack);
}
function b(z1){
  c(z1+1);
}
function a(z){
  b(z+1);
}

a(1);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://bable.io', true);
xhr.onload= function(e){
  if(this.status == 200){
    console.log("Works");
  }
};
xhr.send();


//node.js
fs.readFile('/ect/passwd', (err, data)=> { if (err) throw err; console.log(data);});
// 뒤의 화살표함수가 콜백함수
fs.readFile('/ect/passwd',
  function(data){
    console.log(data);
  },
  function(error){
    console.log(error)
  }
);//연속전달 스타일로 콜백전달.

console.log("1");
cps("2",function cps_step2(val2){
  console.log(val2);
  cps("3",function cps_step3(val3){
    console.log(val3);
  })
  console.log("4");
});
console.log("5"); //15243!!!!



//promise
asyncFunction(arg, result => {});

asyncFunction(arg).then(result => {});

asyncFunction(arg).then(resultA => {
  return asyncFunction(argB);
}).then(resultB=> {});

fs.readFile('text.json',
  function(error, text){
    if (error){
      console.log('Error while reading text file.');
    }else{
      try{
        //...
      }catch(e){
        console.error('Invalid content');
      }
    }
  });

readFileWithPromises('text.json').then(text =>{})
.catch(error => {console.error('Error while reading text file.')});



//프라미스 생성

const p = new Promise(
  function (resolve, reject){
    if (){
      resolve(value);
    }else {
      reject(reason);
    }
  }
);//매개변수 = 실행자 함수(executor)

promise.then(result => {/*충족*/}).catch(error => {/*거절*/});

import {readFile} from 'fs';
function readFileWithPromises(filename){
  return new Promise(
    function (resolve, reject){
      readFile(filename, (error, data)=> if(error){
        reject(error);
      }else {resolve(data);});
    });
}

readFileWithPromises('file.txt')
.then(result => {'something causes an exception'})
.catch(error => {'Something went wrong'});

readFileWithPromises('file.txt')
.then(throw new Error())
.catch(error => {'Something went wrong'});

Promise.all([
  f1(), f2()
])
.then(([r1,r2])=> {})
.catch(err => {});


const introspection= {
  intro(){
    console.log("I think therefore I am");
  }
}
for (const key of Object.keys(introspection)){
  console.log(key);
}



var handler = {
  get: function(target, name){
    return name in target? target[name] : 42;
  }//속성이 존재하지 않으면 42를 가져온다.(get handler)
}
var p =new Proxy({}, handler);
p.a=100;
p.b=undefined;
console.log(p.a, p.b);
console.log('c' in p, p.c);//c가 존재하지 않아 42를 반환


let ageValidator = {
  set : function(obj, prop, value){
    if (prop ==='age'){
      if(!Number.isInteger(value)){
        throw new TypeError('The age is not an number');
      }
      if(value >100){
        throw new RangeError('You cannot be older than 100');
      }
    }
    obj[prop] = value;
  }//set handler
};

let p = new Proxy({}, ageValidator);
p.age=100;
console.log(p.age);
p.age='Two';
p.age=300;


//method 가로채기
var car={
  name: "Ford",
  method_1: function(text){
    console.log("Method _1 called with "+text);
  }
}

var methodInterceptorProxy = new Proxy(car, {
  get: function(target, propKey, receiver){
    var propValue = target[propKey];
    if (typeof propValue != "function"){
      return propValue;
    }else{
      return function(){
        console.log("interceping call to "+propKey + " in car "+target.name);
        return propValue.apply(target, arguments);
      }
    }
  }
});

methodInterceptorProxy.method_1("Benz");
