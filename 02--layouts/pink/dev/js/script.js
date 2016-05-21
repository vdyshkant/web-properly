function handleMenu(menu, toggler){

	function onToggleClick(event){
		event.preventDefault();
		menu.classList.toggle("nav-list-active");
		toggler.classList.toggle("btn-burger-active");
	}
	toggler.addEventListener("click", onToggleClick);

	// если окно вьюпорта больше таблета - убираем toggle классы меню:
	window.addEventListener("resize", function(){
	if (window.matchMedia("(min-width: 1020px)").matches) {
		menu.classList.remove("nav-list-active");
		toggler.classList.remove("btn-burger-active");
	}
})
}

(function(){
	// defining vars && selecting elements:
	var burger = document.querySelector(".btn-burger");
	var navList = document.querySelector(".nav-list");

	// invoking menu-toggler func:
	handleMenu(navList, burger);

})();


// Smooth scrolling from menu
(function() {
  var links = document.querySelectorAll("a[href^='#']"), // add more exact query
      i;

  for (i = 0; i<links.length; i++) {
    links[i].addEventListener("click", function(event) {
      var timer = 0,
          attrName = this.getAttribute("href").slice(1),
          currentPos = this.parentNode.parentNode.offsetTop + this.offsetTop,
          stopPos = document.getElementById(attrName).offsetTop,
          distance = stopPos - pageYOffset,
          step = Math.round(distance / 50),
          nextStep = 0;

      event.preventDefault();
      for (i = nextStep; i <= stopPos; i+=step) {
        setTimeout(function(){ window.scrollTo(0, nextStep+=step); }, timer * 8);
        timer++;
      }
    }, false);
  }
})();
