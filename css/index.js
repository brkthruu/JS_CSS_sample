$(document).on("click", ".menu-icon", function(){
  $(this).find("div").toggleClass("active");
	$(this).find("div").removeClass("no-animation");
});