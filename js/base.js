$(document).ready(() => {
  $("body")
    .mousewheel(function (evt, delta) {
      evt.preventDefault();
      window.scrollBy(delta * -20, 0);
    });

  var isNavAnimating = false;

  //open/close lateral navigation
  $(".nav_trigger").on("click", function (event) {
    event.preventDefault();
    //stop if nav animation is running
    if (!isNavAnimating) {

      $("body").toggleClass("navigation-is-open");
      $(".navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
        //animation is over
        isNavAnimating = false;
      });
    }
  });
});
