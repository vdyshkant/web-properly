function handleMenu(menu, toggler){

	function onToggleClick(event){
		event.preventDefault();
		menu.classList.toggle("nav-list-active");
		toggler.classList.toggle("btn-burger-active");
	}
	toggler.addEventListener('click', onToggleClick);

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
