$(document).ready(function(){
	// this is where your code should go
	$("#menu1").click(function(){
		$("ol").css("display", "none");

	});

	$("#menu2").click(function(){
		$("ol").css("display", "block");

	});

	$("#menu3").click(function(){
		$("ol").addClass("list-group");
		$("ol").children().each(function(){
			$(this).addClass("list-group-item");
		});

		$("ol").children().first().addClass("active");


	});

	$("#menu4").click(function(){
		$(".active").removeClass("active");
	});


	$("#test-menu1").click(function(){
		$("p").css("display", "none");

	});

	$("#test-menu2").click(function(){
		$("p").css("display", "block");

	});

	$("#test-menu3").click(function(){
		var first = $("p").children().first();
		first.addClass("alert alert-dark");
		first.next().addClass("alert alert-success");
		first.next().next().addClass("alert alert-warning");
		// $("p").children().first().addClass("card-title");

	});

	$("#test-menu4").click(function(){
		$("p").children().last().removeClass("alert-warning alert");
	});
});

