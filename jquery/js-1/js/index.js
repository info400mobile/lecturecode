$(document).ready(function(){
	// this is where your code should go
	$("#test-menu1").click(function(){
		alert($("#test").text());

	});

	$("#test-menu2").click(function(){
		alert($("#test").html());

	});

	$("#test-menu3").click(function(){
		alert($("#url-test").attr("href"));

	});

	$("#test-menu4").click(function(){
		alert($("#img-test").attr("src"));
	});

	$("#test-menu5").click(function(){
		alert($("#button-test").val());
	});



});

