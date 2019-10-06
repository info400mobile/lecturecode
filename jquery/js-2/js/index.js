$(document).ready(function(){
	// this is where your code should go
	$("#menu1").click(function(){
		$("#paragraph1").text("This is the 1st <i>italic</i> paragaph.");

	});

	$("#menu2").click(function(){
		$("#paragraph2").html("This is the 1st <i>italic</i> paragaph.");

	});

	$("#menu3").click(function(){
		$("#textfield1").val("Not a Default Value");

	});

	$("#menu4").click(function(){
		$("#url1").attr("href","https://www.facebook.com/");
	});

	$("#menu5").click(function(){
		$("#img1").attr("src","images/twc-logo.gif");
	});

});

