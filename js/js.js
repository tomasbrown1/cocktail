$(function() {
	var d = new Date()
	var $navButton = $("#menu");
	var $searchButton = $("#search");
	var $nav = $("#nav");
	var $search = $("#searchbar");

	document.getElementById("year").innerHTML = (d.getFullYear());

	$navButton.click(function(){
		if ($(window).width() < 900) {
			$search.slideUp(300);
		}
		$nav.slideToggle(300);
	});

	$searchButton.click(function(){
		$nav.slideUp(300);
		$search.slideToggle(300);
	});

});