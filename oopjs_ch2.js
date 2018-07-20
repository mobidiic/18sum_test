var name = "Bob";
var str = `Hello ${name}, how are you this fine ${partOfDay()}?`
console.log(str);

function partOfDay () {
    var hours = new Date().getHours();

    if (hours <= 12) {
        return "morning";
    } else if (hours <= 5) {
        return "afternoon";
    } else {
        return "evening";
    }
}

function rawTag(strings, ...substitutes){console.log(strings.raw[0])};
rawTag`This is a raw text and \n are not treated differently`;

function transform(strings, ...substitutes){
  console.log(strings[0]);
  console.log(substitutes[0]);
}

var firstname="James";
var lastname="Bourne";
transform`Name is, ${firstname}, ${lastname}`;



var result ='', a=1;
if(a>2){
  result=' a is greater than 2';
}else{
  result='a is smaller than 2'
}
console.log(result);


var res='\n', i, j;
for (i=1; i<=7; i++){
  for (j=1; j<=15; j++){
    res += (i*j)%8 ? '' : '*';
  }
  res +='\n';
}


var gugu='', num;
for (num=2; num<=9; num++){
  for (i=1; i<=9; i++){
    gugu += `${num}*${i}=${i*num}\n`;
  }
  gugu +='\n'
}
