
$(document).ready(function(){
	var x = 100;
	for (var i = 1; i <= x; i++) {
		if((i % 3 == 0) && (i % 5 == 0)){
			$("#fizzBuzzUL").append("<li>Fizz Buzz");
		}
		else if(i % 3 == 0) {
			$("#fizzBuzzUL").append("<li>Fizz</li>");
		    //console.log("Fizz");
			}
		else if(i % 5 == 0) {
			$("#fizzBuzzUL").append("<li>Buzz</li>");
		    //console.log("Buzz");
		  }
		else {
			$("#fizzBuzzUL").append("<li>" + i + "</li>");
			//console.log(i);
		}
	}

});



