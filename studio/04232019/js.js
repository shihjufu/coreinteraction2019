$(document).ready(function(){

var doc = $(document);

var width = $(document).width() -100;
var height= $(document).height() -100;

var shapes = [ $(".circle"), $(".triangle"), $(".square"), $(".haha")]

function randomStuff(){
var randomShape = shapes[ Math.floor( Math.random() * shapes.length) ]
var clone = randomShape.clone().appendTo('body');

clone.last().css('left', Math.random() * width)
clone.last().css('top', Math.random() * height)
}

setInterval(function(){
	randomStuff()
},10)

//------------------------------

setInterval(function(){
	var randomRotateY = Math.random()* 180;

	var rotateY = "rotateY(" + Math.floor(randomRotateY) + "deg)";

	$(".square").css("transform",rotateY)
},20)

//-----------------------------

setInterval(function(){
	var randomRotateX = Math.random()* 180;

	var rotateX = "rotateX(" + Math.floor(randomRotateX) + "deg)";

	$(".circle").css("transform",rotateX)
},210)

//----------------------------

setInterval(function(){
	var randomRotateZ = Math.random()* 360;

	var rotateZ = "rotateZ(" + Math.floor(randomRotateZ) + "deg)";

	$(".triangle").css("transform",rotateZ)
},200)

//----------------------------

setInterval(function(){
	var randomTop = Math.random()* 900;

	$(".triangle").css("top",randomTop)

},10)

//---------------------------

setInterval(function(){
	var randomLeft = Math.random()* 2000;

	$(".circle").css("left",randomLeft)

},600)

setInterval(function(){
	var noShow = 0;

	$(".square").css("height",noshow)
	$(".square").css("width",noshow)

},400)

})