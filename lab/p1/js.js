$(document).ready(function(){
	let dog_selected = null;
	let dog_answers = ['dog/11.png','dog/2.png','dog/43.png','dog/1.png','dog/17.png','dog/14.png','dog/27.png','dog/33.png','dog/50.png'];
	let level = 1;

	var modal = document.getElementById('myModal');

	var btn = document.getElementById("myBtn");

	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
 		modal.style.display = "block";
}	

	span.onclick = function() {
  		modal.style.display = "none";
}

	window.onclick = function(event) {
 		if (event.target == modal) {
    	modal.style.display = "none";
  	}
}

	$('.dogpic').click(function() {
		let id_name = this.id;
		$('#display').html('<img class="LargerDog" src= ' + id_name + '>');
		dog_selected = id_name;

	})

	function changeAvatarClue(_level){
		if(_level > 0 && _level < 10){
			let id_name = 'svg/' + (_level - 1) + '.svg';
			console.log(id_name);
			$('#top').html('<img src= ' + id_name + '>');
			$('.' + (_level - 1)).toggle();
			$('.' + _level).toggle();
		}
	}

	$('#confirm').click(function(){
		if (dog_selected){
			if(dog_selected == dog_answers[level-1]){
				console.log("Correct!");
				level = level + 1;
				changeAvatarClue(level);
				if(level == 10){
					$('#won').toggle();
				}
			} else {
				$('#lose').toggle();
				console.log("incorrect");
			}
			
		} else {
			console.log("null");
		}
	})

});