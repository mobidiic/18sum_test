// <body>
//   <form action="server.php" method="post" id="myform">
//     <fieldset>
//       <legend>Search</legend>
//       <input type="text" name="search" id="search">
//       <input type="submit">
//     </fieldset>
//   </form>
//   <script src="behavior.js"></script>
// </body>

//behavior.js

myevent.addListener('myform', 'submit', function(e){
  e= myevent.getEvent(e);
  myevent.stopPropagation(e);
  var el = document.getElementById('search');
  if(!el.value){
    myevent.preventDefault(e);
    alert('Please enter a search string');
  }
});

// <head>
// <script>
(function(){
  var s= document.createElement('script');
  s.src= 'behavior.js';
  document.getElementsByTagName('head')[0].appendChild(s);
})();
// </script>
// </head> 헤드태그의 맨 위에 넣는다. 다운로드가 빨리 시작되도록 (비동기가 빨리 진행되도록)


var MYAPP = MYAPP || {};
MYAPP.event = {
  addListener : function(el, type, fn){ },
  removeListener : function(el, type, fn){},
  getEvent : function(e){}
};

MYAPP.dom={};
MYAPP.dom.Element = function(type, properties){
  var tmp = document.createElement(type);
  for (var i in properties){
    if(properties.hasOwnProperty(i)){
      tmp.setAttribute(i, properties[i]);
    }
  }
  return tmp;
};

MYAPP.dom.Text = function(txt){
  return document.createElement(txt);
}


var link = new MYAPP.dom.Element('a', {href: 'http://google.com', target:'_blank'});
var text = new MYAPP.dom.Text('click me');
link.appendChild(text);
document.body.appendChild(link);


MYAPP = {};
MYAPP.namespace = function (name){
  var parts = name.split('.');
  var current = MYAPP;
  for (var i=0; i<parts.length; i++){
    if(!current[parts[i]]){
      current[parts[i]]={};
    }
    current = current[parts[i]];
  }
};
MYAPP.namespace('dom.style');
MYAPP.namespace('events');




//초기화 시간 분기
var MYAPP ={};
MYAPP.event = {
  addListener : null,
  removeListener : null
};

if(window.addEventListener){
  MYAPP.event.addListener = function(el, type, fn){
    el.addEventListener(type, fn, false);
  };
  MYAPP.event.removeListener = function(el, type, fn){
    el.removeEventListener(type, fn, false);
  };
}else if(document.attachEvent){//IE
  MYAPP.event.addListener = function(el, type, fn){
    el.attachEvent('on'+type, fn);
  }
  MYAPP.event.removeListener = function(el, type, fn){
    el.detachEvent('on'+type, fn);
  }
}else{//구형 브라우져
  MYAPP.event.addListener = function(el, type, fn){
    el['on'+type]= fn;
  }
  MYAPP.event.removeListener= function(el, type, fn){
    el['on'+type]= null;
  }
}


//지연 정의

var MYAPP ={};
MYAPP.event = {
  addListener: function(el, type, fn){
    if(el.addEventListener){
      MYAPP.event.addListener = function(el, type, fn){
        el.addEventListener(type, fn, false);
      }
    }else if(el.attchEvent){
      MYAPP.event.addListener = function(el, type, fn){
        el.attachEvent('on'+type, fn);
      }
    }else{
      MYAPP.event.addListener = function(el, type, fn){
        el['on'+type]=fn;
      }
    }
    MYAPP.event.addListener(el, type, fn);
  }
}//위에꺼와 다른점은 이 메소드가 호출됐을 때 처음 한번만 정의된다. 위에꺼는 로드될때 한번만 정의된다.


MYAPP.dom.Fancybutton= function (txt, conf){
  var style = {
    font : 'Verdana',
    border : '1px solid black',
    color : 'black',
    background : 'grey'
  };
  function setStyle(b){
    var i;
    for (i in style){
      if(style.hasOwnProperty(i)){
        b.style[i] = conf[i] || style[i];
      }
    }
  }
  conf =conf || {};
  var b = document.createElement('input');
  b.type=conf.type || 'submit';
  b.value = txt;
  setStyle(b);
  return b;
};



//JSON string
{
  'name' : 'sihh',
  'family' : 'park'
}
var response = JSON.parse(xhr.responseText); //json에서 객체로
var str = JSON.stringify({hello: 'you'}); // 일반객체를 json으로



//장식자 패턴

var tree={};
tree.decorate = function(){
  alert('Make sure the tree won\'t fall');
};
tree.getDecorator = function(deco){
  tree[deco].prototype = this;
  return new tree[deco];
};

tree.Redballs = function(){
  this.decorate = function(){
    this.Redballs.prototype.decorate();
    alert('Put on some red balls');
  };
};

tree.Angel = function(){
  this.decorate = function(){
    this.Angel.prototype.decorate();
    alert('An angel on the top');
  };
};

tree.getDecorator('Redballs');
tree.getDecorator('Angel');
tree.decorate();



//믹스인 패턴
function mixin(receiver, supplier) {
	for (var property in supplier) {
		if(supplier.hasOwnProperty(property)){
			receiver[property] = supplier[property]
		}
	}
	return receiver;
}
