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


	var pages = [
		"amarettosour", 
		"americano", 
		"angelface", 
		"aperolspritz", 
		"applemojito", 
		"appletini", 
		"aviation", 
		"b52", 
		"babyguinness", 
		"bacardi", 
		"bellini", 
		"berrycaipiroska", 
		"betweenthesheets", 
		"blackrussian", 
		"bloodymary", 
		"bluehawaii", 
		"bramble", 
		"brandyalexander", 
		"brandysour", 
		"caipiroska", 
		"caipirinha", 
		"casino", 
		"champagnecocktail", 
		"cloverclub", 
		"cosmopolitan", 
		"cubalibre", 
		"daiquiri", 
		"darkandstormy", 
		"englishmojito", 
		"espressomartini", 
		"flatliner", 
		"french75", 
		"frenchconnection", 
		"frenchmartini", 
		"frozendaiquiri", 
		"frozenmargarita", 
		"gimlet", 
		"ginderby", 
		"ginmartini", 
		"ginsour", 
		"godfather", 
		"godmother", 
		"harveywallbanger", 
		"hemmingwayspecial", 
		"horsesneck", 
		"hurricane", 
		"jagerbomb", 
		"japaneseslipper", 
		"kamikaze", 
		"keywestcooler", 
		"kir", 
		"kirroyal", 
		"lemondropmartini", 
		"lemondropshot", 
		"longbeachicedtea", 
		"longislandicedtea", 
		"lycheemojito", 
		"lynchbourglemonade", 
		"maitai", 
		"manhatten", 
		"margarita", 
		"mimosa", 
		"mintjulep", 
		"mojito", 
		"mojitoroyal", 
		"monkeygland", 
		"moscowmule", 
		"negroni", 
		"oldfashioned", 
		"paradise", 
		"pinacolada", 
		"pinklady", 
		"piscosour", 
		"planterspunch", 
		"pornstarmartini", 
		"portoflip", 
		"ramosfizz", 
		"robroy", 
		"rumfashioned", 
		"russianspringpunch", 
		"rustynail", 
		"sazerac", 
		"screwdriver", 
		"seabreeze", 
		"sexonthebeach", 
		"shirleytemple", 
		"shittynipple", 
		"sidecar", 
		"singaporesling", 
		"slipperynipple", 
		"stinger", 
		"summerpimms",
		"tequilasunrise",
		"tgv",
		"tomcollins",
		"tommysmargarita",
		"tuxedo",
		"vespermartini",
		"virginmary",
		"virginmojito",
		"virginpinacolada",
		"vodkagimlet",
		"vodkamartini",
		"whiskeysour",
		"whitelady",
		"whiterussian",
		"woowoo",
		"yellowbird",
		"zombie"
	];


	$('#searchbar').submit(function(e) {
		e.preventDefault();
		var userSearch = document.getElementsByName("search-input")[0].value.toLowerCase().replace(/\s+/g, '');
		var arrayLocation = ($.inArray(userSearch, pages));
		if (arrayLocation !== -1) {
			location.assign(userSearch + ".php")
		} else {
			location.assign("search.php");
		}
	});
});