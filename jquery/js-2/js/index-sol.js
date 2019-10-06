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


	$("#test-menu1").click(function(){
		$("#test-sentence").html("This paragragh contains a <i>italic</i> sentence");

	});

	$("#test-menu2").click(function(){
		$("#url-test").text("the Cordova document");

	});

	$("#test-menu3").click(function(){
		$("#url-test").attr("href","https://cordova.apache.org/docs/en/latest/");
	});

	$("#test-menu4").click(function(){
		$("#img-test").attr("src","images/cordova-logo.png");
	});

	$("#test-menu5").click(function(){
		$("#button-test").val("We are all buttons.");
	});
});

