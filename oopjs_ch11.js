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
