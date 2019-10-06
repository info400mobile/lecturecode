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


	$("#test-menu1").click(function(){
		$("p").append("<span>Appended span</span><br>");

	});

	$("#test-menu2").click(function(){
		$("p").prepend("<span>prepend span</span><br>");

	});

	$("#test-menu3").click(function(){
		$("p").children().first().before("<span>the before span</span><br>");

	});

	$("#test-menu4").click(function(){
		$("p").children().last().before("<span>the after span</span><br>");
	});
});

