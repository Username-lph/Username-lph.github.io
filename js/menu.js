$(document).ready(function(){
	$( "div.menu" ).click(function() {
		$( "ul.top-nav" ).slideToggle( 300, function() {
//		    Animation complete.
		});
	});
});
//移动端导航效果
console.log($("div.menu-info img"));
$(document).ready(function(){
	$("a.menu-info img").click(function(){
		$("div.menu-inner").toggleClass("active");
	});
	$(".menu-top-nav a").click(function(){
		$("div.menu-inner").removeClass("active");
		$(".menu-top-nav a").removeClass("active");
		$(this).addClass("active");
	});
});
