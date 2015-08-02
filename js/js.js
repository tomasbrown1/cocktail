$(function() {
	var d = new Date()
	document.getElementById("year").innerHTML = (d.getFullYear());

	var $navButton = $("#menu");
	var $nav = $("#nav");

	$navButton.click(function(){
		$nav.slideToggle(300);
	});
});