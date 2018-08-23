$(document).ready(() => {
  const state = {
    isMenuOpen: false
  };

  //scroll sideways
  $("body").mousewheel(function (evt, delta) {
    console.log('scrolling')
    evt.preventDefault();
    if (!state.isMenuOpen) {
      window.scrollBy(delta * -20, 0);
    }
  });

  //open/close navigation
  $(".nav_trigger").on("click", function (event) {
    event.preventDefault();
    state.isMenuOpen = !state.isMenuOpen;
    $("body").toggleClass("navigation-is-open");

  });
  //add remove class from home intro
  setTimeout(function () {

    $(".first").addClass("hidden");
    $(".second").fadeIn(1500);
    $(".second").removeClass("hidden");
  }, 3000);

});
