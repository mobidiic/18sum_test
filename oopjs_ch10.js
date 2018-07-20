if(navigator.userAgent.idexOf('MSIE' !== -1)){
  //IE일때의 코드
}else{
  //IE가 아닐 떄의 코드
}

if(typeof window.addEventListener == 'function'){
  //기능이 지원됨. 사용
}else{
  //기능이 지원되지 않음. 다른 방법 필요.
}


for(var i in location){
  if (typeof location[i] === 'string'){
    console.log(i + '= "' + location[i]+ '"');
  }
}
// href = "http://search.phpied.com:8080/search?q=java&what=script#results";
// hash = "#results";
// host = "search.phpied.com:8080";
// hostname = "search.phpied.com";
// pathname = "/search";
// port = <<8080>>;
// protocol = <<http:>>;
// search = "?q=java&what=script";

history.pushState({a:1}, "", "hello");
history.pushState({b:2}, "", "hello you too."); // URL 바꿀 수 있다.(북마크용)

window.devicePixcelRatio; // 물리적 픽셀 - 디바이스 픽셀의 비율. 맥/아이폰은 2

var win = window.open('http://www.google.com', 'ggle', 'width=300, height=300, resizable=yes');

var answer = prompt('And your name was?');



function boo(){
  // alert('Boo');
  console.log('Boo');
}
var id =setTimeout(boo, 2000);
clearTimeout(id);

var id=setInterval(boo, 2000);
clearTimeout(id);

function animateMe(){
  webkitRequestAnimationFrame(function(){
    console.log(new Date());
    animateMe();
  });
}// 미리 정의된 시간이 아닌, 가용자원이 있을 때마다 호출.
animateMe();




//html파일 참고
//왜 바디 노드의 자식노드가 9개? -> 3개 p, 1개 주석, 4개 노드사이 공백이 3개 텍스트 노드 만듬.

var bd = document.documentElement.childNodes[2];

bd.childNodes;

bd.childNodes[1].attributes;

bd.childNodes[1].getAttribute(bd.childNodes[1].attributes[0].nodeName);


bd.childNodes[3].innerHTML;
bd.childNodes[3].textContent;


document.getElementsByTagName('p')[0].innerHTML; //내용 가져오기


document.getElementsByTagName('p')[2].id;

//노드 탐색
.previousSibling;
.nextSibling;
.lastChild;


//DOM 탐색 함수
function walkDOM(n){
  do{
    console.log(n);
    if (n.hasChildNodes()){
      walkDOM(n.firstChild);
    }
  }while(n = n.nextSibling);
}

walkDOM(document.body);


var my = document.getElementById('closer');
my.innerHTML = 'final';
my.innerHTML = '<em>my</em> final';

my.firstChild.nodeValue='<em>your</em>';


my.style.borderBottom = "1px solid red";
my.style.cssText += "border : 1px solid; font-size: 1rem;";
//이걸로  css코드를 볼 수 있다.또 추가할 수도 있다.


//구글에서 폼 연습
var input = document.querySelector('input[type=url]');

input.name;
input.value = 'my query';


var plcholder = document.getElementById('fkbx-text');
plcholder.innerHTML = 'I can be a Designer';


function toggle(){
  var st = document.querySelectorAll('a')[2].style;
  st.visibility = (st.visibility ==='hidden') ? 'visible' : 'hidden';
}
var myint = setInterval(toggle, 1000);
myint;
clearInterval(myint);
// 구글 끝

var myp = document.createElement('p');
myp.innerHTML = 'yet Bro';
myp.style.border = '2px dotted darkgray';
document.body.appendChild(myp);

document.body.innerHTML += '<p>one more paragraph <strong>bold</strong></p>';

var myp = document.createElement('p');
var myt = document.createTextNode('one more paragraph');
myp.appendChild(myt);
var str = document.createElement('strong');
str.appendChild(document.createTextNode('bold'));
myp.appendChild(str);
document.body.appendChild(myp);


var el = document.getElementsByTagName('p')[1];
el;

document.body.appendChild(el.cloneNode(false));

document.body.appendChild(el.cloneNode(true));
document.body.appendChild(el.firstChild.cloneNode(true));

document.body.insertBefore(
  document.createTextNode('first!'), document.body.firstChild
);

//노드 제거
var myp = document.getElementsByTagName('p')[1];
var removed = document.body.removeChild(myp);
removed;

var p = document.getElementsByTagName('p')[1];
var replaced = document.body.replaceChild(removed, p);

function removeAll(n){
  while(n.firstChild){
    n.removeChild(n.firstChild);
  }
}


document.forms[0].elements[0].value = 'me@example.org';
document.forms[0].elements[0].disabled = true;
document.forms[0].elements['search'];// 이름 배열로 접근


document.write("<em>" + new Date() + "</em>");

document.cookie;



var mypara = document.getElementById('closer');
mypara.addEventListener('click', function(){
  alert('voo!');
}, false);
mypara.addEventListener('click', console.log.bind(console), false);



function paraHandler(){
  alert('clicked paragraph');
}

var para = document.getElementById('closer');
para.addEventListener('click', paraHandler, false);

document.body.addEventListener('click', function(){
  alert('click body');
}, false);
document.addEventListener('click', function(){
  alert('click docu');
}, false);
window.addEventListener('click', function(){
  alert('click windo');
}, false);
//클릭하면 버블업 되는 걸 볼 수 있다.

para.removeEventListener('click', paraHandler, false)

//전파 중단
function paraHandler(e){
  alert('clicked paragraph');
  e.stopPropagation();
}



var all_links = document.getElementsByTagName('a');
for (var i=0; i<all_links.length; i++){
  all_links[i].addEventListener( 'click', function(e){
    if(!confirm('Sure you want to follow this link?')){
      e.preventDefault();
    }
  }, false);
}




//
var archive=['navy', 'hi', 'leo', 'meo'], email="";
for (var i=0; i<archive.length; i++){
  if (i!==archive.length-1){
  email += archive[i]+", ";
  }else{
    email += archive[i];
  }
}

email;


var xhr = new XMLHttpRequest();
xhr.onreadystatechange= myCallback;//서버에서 응답이 돌아올때 호출
xhr.open('GET', 'somefile.txt', true);
xhr.send('');


function myCallback(){
  if(xhr.readystate<4){
    return;
  }
  if(xhr.status != 200){
    alert('Error');
    return;
  }
  alert(xhr.responseText);
}

//IE 7버전 이하
var xhr = new ActiveXObject('MSXML2.XMLHTTP.3.0');
//완전한 크로스브라우징
var ids = ['MSCML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
          'Microsoft.XMLHTTP'];
var xhr;
if (XMLHttpRequest){
  xhr= new XMLHttpRequest();
}else{
  for(var i=0; i<ids.length; i++){
    try{
      xhr = new ActiveXObject(ids[i]);
      break;
    }catch(e){}
  }
}

//콜백을 클로져로 래핑(전역변수 의존도 낮추기 위해)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = (function(myxhr){
  return function(){
    myCallback(myxhr);
  }
})(xhr);
xhr.open('GET', 'somefile.txt', true);
xhr.send('');




//연습문제

var win = window.open('http://google.com', 'google', 'width=200, height=200');
//두번쨰 인수는 윈도우 이름
var i = setInterval((function(){
  var size=200;
  return function(){
    size +=5;
    win.resizeTo(size,size);
    if(size ===400){
      clearInterval(i);
    }
  };
})(),1000);

setInterval(function(){document.title=new Date().toTimeString()}, 1000)
