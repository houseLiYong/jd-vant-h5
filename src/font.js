
//获取可视区的宽度
let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log(clientWidth);
//设置font-size
//获取html
let htmlDom = document.getElementsByTagName('html')[0];
console.log(htmlDom)
htmlDom.style.fontSize = clientWidth/10 + 'px';

window.addEventListener('resize',function(){
  let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDom.style.fontSize = clientWidth/10 + 'px';
})






