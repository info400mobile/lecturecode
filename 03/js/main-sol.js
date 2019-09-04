$(document).ready(function(){
	// this is where your code should go
	
	//exercise 1: increase font size
	$("#menu1").click(function(){
		$("body").css("font-size", "20px");
	});

	//exercise 2: add and remove headers

	$("#menu2").click(function(){
		$("#main").prepend("<h1 class='header_class'>HEADER 1</h1>");
		for (i=1; i<4; i++){
			$("#paragraph" + i).before("<h2 class='header_class'>HEADER 1." + i + "</h2>");
		}
		$("#bottom").prepend("<h1 class='header_class'>HEADER 2</h1>");
	})

	$("#menu3").click(function(){
		$(".header_class").remove();
	})
});

