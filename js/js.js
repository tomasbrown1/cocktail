$(function() {
	var d = new Date()
	var $navButton = $("#menu");
	var $nav = $("#nav");

	document.getElementById("year").innerHTML = (d.getFullYear());

	$navButton.click(function(){
		$nav.slideToggle(300);
	});
});