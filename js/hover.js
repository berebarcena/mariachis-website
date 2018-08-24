$(document).ready(function() {
    $('a.hover-link').mouseenter(function() {
      $('img.hover-image').remove();
      $(this).append('<img class="hover-image" src="' + $(this).attr('data-hover-image') + '"/>')
    }).mouseleave(function() {
      $('img.hover-image').remove();
    })
  })