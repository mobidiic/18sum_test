class Car{
  constructor(model, year){
    this.model = model;
    this.year= year;
  }
}
console.log(typeof Car);

const Car = class(){
  constructor(model, year){
    this.model = model;
    this.year = year;
  }
}

class Logger{
  static log(level, message){
    console.log(`${level} : ${message}`);
  }
}

Logger.log("Error", "The end is near");

var logger = new Logger("Error", "the end");
logger.log();




class iterableArg{
  constructor(...args){
    this.args=args;
  };
  *[Symbol.iterator](){
    for (const arg of this.args){
      yield arg;
    }
  };
}

for (const x of new iterableArg('ES6', 'wins')){
  console.log(x);
}



class Animal{
  constructor(name){
    this.name=name;
  };
  speak(){
    console.log(this.name+' generic noise');
  };
}

class Cat extends Animal{
  speak(){
    console.log(this.name+' says MeowMeow.');
  }
}

var c= new Cat('Reo');
c.speak();

class Lion extends Cat{
  constructor(names){
    super(names);
    this.name= names;
  }//이래야 쓸수있다.
  speak(){
    // super.speak();
    console.log(this.name+' Roarrrr...s');
  }
}
var d= new Lion('Pumba');
d.speak();


// class Person{}
// class Employee extends Person{}
//
// class BackgroundCheck{
//   check(){}
// }
// class Onboard{
//   printBadge(){}
// }

class Person{}
const BackgroundCheck = Tools => class extends Tools{
  check(){};
};
const Onboard = Tools => class extends Tools{
  printBadge(){}
};
class Employee extends BackgroundCheck(Onboard(Person))





//============server.js===============
export const port= 8080;
export function startServer(){
  //start server
}
export class Config{

}
function processConfig(){

}

//===========app.js=================
import {Config, startServer} from 'server';
startServer(port);

import * from 'server';


export {port, startServer, Config};
const port=8080;
function startServer(){

}
class Config{

}
function processConfig(){

}

//내보낼때 별칭 지정
function v1(){}
function v2(){}

export{
  v1 as functionV(),
  v2 as functionV2()
}
