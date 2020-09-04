$(document).ready(function () {
	$("#roll-over1").hover(function () {
		$("#roll1").toggleClass("move");
	});
	$("#roll-over2").hover(function () {
		$("#roll2").toggleClass("move");
	});
	$("#roll-over3").hover(function () {
		$("#roll3").toggleClass("move");
	});
	$("#roll-over4").hover(function () {
		$("#roll4").toggleClass("move");
	});
	$("#roll-over5").hover(function () {
		$("#roll5").toggleClass("move");
	});
	$("#roll-over6").hover(function () {
		$("#roll6").toggleClass("move");
	});
	//		tooltips
	$('[data-toggle="tooltip"]').tooltip();
})
$(window).scroll(function (e) {
	if ($(window).scrollTop() >= 1300) {
		$(".full, .short, .x-l").css("visibility", "visible").addClass('animate-lbl');
	}
	if($(window).scrollTop() >= 1300) {
	$("#cons-img1").animate({
		marginLeft: '-10px'
	})
	}
	if($(window).scrollTop() >= 1800) {
	$("#cons-img2").animate({
		marginLeft: '-10px'
	})
	}
	if($(window).scrollTop() >= 2300) {
	$("#cons-img3").animate({
		marginLeft: '-10px'
	})
	}
	if($(window).scrollTop() >= 2800) {
	$("#cons-img4").animate({
		marginLeft: '-10px'
	}) 
	}
});