$(document).ready(function(){
	// this is where your code should go
	// TODO: When submit button is clicked
	// 1. Get the first name, last name, and the country option
	// HINT: to get selected option use $("#id option:selected")
	// 2. Add elements in the "card-body" div and show the information collected from step 1
	// 3. change the submit button: 
	//   (1) change the text from "submit" to "done"
	//   (2) change the color to grey (You can get color hex from https://www.color-hex.com/color-palettes/)

	$("#submit").click(function(){
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var country = $("#country option:selected").val();
		var content = $("#subject").val();


		$(".card-body").append("<p>Your Name is " + fname + " " + lname + "</p>");
		$(".card-body").append("<p>You come from " + country + "</p>");
		$(".card-body").append("<p>You want to tell us: " + content + "</p>");
		$("#submit").css("background-color", "grey");

	});
});

