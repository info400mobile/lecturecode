$(document).ready(function(){
	// this is where your code should go
	$("#menu1").click(function(){
		$("ol").append("<li>Appended item</li>");

	});

	$("#menu2").click(function(){
		$("ol").prepend("<li>prepend item</li>");

	});

	$("#menu3").click(function(){
		$("ol").children().first().after("<li>the after item</li>");

	});

	$("#menu4").click(function(){
		$("ol").children().last().before("<li>the before item</li>");
	});
});

