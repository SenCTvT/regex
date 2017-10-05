function cross(_r){
}
function bar(_r){
return 5;
}
function foo(_r){

var bar1 = _r('import bar');

console.log(bar1);
}
var _req = function(_request){
var regex = /import\s([a-z]+)/g;
var str = _request;
var m = regex.exec(str);
var d=eval(m[1]);

return d(_req);
}


foo(_req);
