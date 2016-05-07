



/* custom js slider // but without autoslide rotator and control arrows */

// just querying the DOM...like a boss!
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector(".slide-wrapper");
// the activeLink provides a pointer to the currently displayed item
var activeLink = 0;

// setup the event listeners
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener("click", setClickedItem, false);

  // identify the item for the activeLink
  link.itemID = i;
}

// set first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
  removeActiveLinks();

  var clickedLink = e.target;     // !!i
  activeLink = clickedLink.itemID;

  changePosition(clickedLink);
}

function removeActiveLinks() {
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
}

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {
  var position = link.getAttribute("data-pos");

  var translateValue = "translate3d(" + position + ", 0px, 0)";
  wrapper.style[transformProperty] = translateValue;

  link.classList.add("active");
}

//
// Dealing with Transforms
//

var transforms = ["transform",
                  "msTransform",
                  "webkitTransform",
                  "mozTransform",
                  "oTransform"];

var transformProperty = getSupportedPropertyName(transforms);

// vendor prefix management
function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}



/* eof custom js slider */

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
  var links = document.querySelectorAll("a[href^='#']"),
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
