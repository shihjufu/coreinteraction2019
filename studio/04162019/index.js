$(document).ready(function(){

	var shapeWidth = $('#shape').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 4;
	var speedY = 4;

	var positionLeft = 0;
	var positionTop = 0;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape').css("left",positionLeft)
	$('#shape').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})

$(document).ready(function(){

	var shapeWidth = $('#shape2').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 10;
	var speedY = 10;

	var positionLeft = 100;
	var positionTop = 200;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape2').css("left",positionLeft)
	$('#shape2').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})


$(document).ready(function(){

	var shapeWidth = $('#shape3').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 273;
	var speedY = 90;

	var positionLeft = 200;
	var positionTop = 0;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape3').css("left",positionLeft)
	$('#shape3').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})


$(document).ready(function(){

	var shapeWidth = $('#shape4').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 99;
	var speedY = 12;

	var positionLeft = -40;
	var positionTop = 12;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape4').css("left",positionLeft)
	$('#shape4').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})


$(document).ready(function(){

	var shapeWidth = $('#shape5').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 4;
	var speedY = 1;

	var positionLeft = 100;
	var positionTop = 100;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape5').css("left",positionLeft)
	$('#shape5').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})


$(document).ready(function(){

	var shapeWidth = $('#shape6').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 78;
	var speedY = 120;

	var positionLeft = 69;
	var positionTop = 96;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape6').css("left",positionLeft)
	$('#shape6').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})


$(document).ready(function(){

	var shapeWidth = $('#shape7').width();

	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	var speedX = 10;
	var speedY = 343;

	var positionLeft = 12;
	var positionTop = 5;

function step(timestamp) {

		positionLeft += speedX;
		positionTop += speedY;

		if( positionLeft >width ){
			speedX = speedX * -1;
		}

		if( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if( positionTop > height ){
			speedY = speedY * -1;
		}

		if( positionTop < 0 ){
			speedY = speedY * -1;
		}

	$('#shape7').css("left",positionLeft)
	$('#shape7').css("top", positionTop)	

	window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

})




	