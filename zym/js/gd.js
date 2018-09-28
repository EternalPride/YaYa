// JavaScript Document
var oInfo = $(".info");
var oTop = $(".box").offset().top;
var sTop = 0;
$(window).scroll(function(){
sTop = $(this).scrollTop();
oInfo.text(sTop + '-' + oTop);//这一句 只是为了看看数据 没有多大的用处
if(sTop >= oTop){
$(".box").css({"position":"fixed","top":"0"});
}else{
$(".box").css({"position":"static"});
}
});