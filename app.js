
$(document).ready(function(){

var usrNbr;
$("#fizz-buzz-entry-form").on("submit",function(event){
		event.preventDefault();     
    	var usrInput = $("#fizz-buzz-entry").val();

		if(isNaN(usrInput)) {
			alert("Please enter a REAL number, dawg.");
			$("#fizz-buzz-entry").val("").focus();
			return;
		} else if (usrInput % 1 != 0){
			alert("A WHOLE number, please.  No decimals.");
			$("#fizz-buzz-entry").val("").focus();
		} else{
			usrNbr = +usrInput;    
	    	$("#fizz-buzz-entry").val("");	
	    	fizzBuzz(usrNbr);
		}


});

function fizzBuzz(usrNbr){

	for (var i = 1; i <= usrNbr; i++) {
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

}

});



