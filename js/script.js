$(document).ready(function($){
var slideCount = $("#slider ul li").length;
var slideWidth = $("#slider ul li").width();
var slideHeight = $("#slider ul li").height();
var sliderUL = slideCount * slideWidth;

$("#slider").css({width : slideWidth, height : slideHeight});
$("#slider ul").css({width : sliderUL, marginLeft: - slideWidth});

$("#slider ul li:last-child").prependTo("#slider ul");

function moveLeft(){
  $("#slider ul").animate({left : + slideWidth}, 700, function(){
    $("#slider ul li:last-child").prependTo("#slider ul");
    $("#slider ul").css("left","");
  })
}

function moveRight(){
  $("#slider ul").animate({
    left: - slideWidth},700, function(){
      $("#slider ul li:first-child").appendTo("#slider ul");
      $("#slider ul").css("left","");

    })
  };

$(".prev").click(function(){
  moveLeft();
  return false;
})

$(".next").click(function(){
  moveRight();
  return false;
})

var Go = true;
var loop = function(){

  setTimeout(function(){
    if (Go){
    moveRight();
    loop();
    console.log(slideWidth);
  }}, 4000);

}
loop();
$("#slider").mouseleave(function(){
  Go = true;
    loop();
})
$("#slider").mouseover(function(){
  Go = false;
})

})
