var $grid = $('.masonry').masonry({
  // options
  itemSelector: '.item',
  columnWidth: 200
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  document.getElementById('scrolling-div').scrollLeft -= (delta*120); // Multiplied by 40
  e.preventDefault();
}
if (document.getElementById('scrolling-div').addEventListener) {
  // IE9, Chrome, Safari, Opera
  document.getElementById('scrolling-div').addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  document.getElementById('scrolling-div').addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  document.getElementById('scrolling-div').attachEvent("onmousewheel", scrollHorizontally);
}

//var $grid = $('.grid').imagesLoaded( function() {
//  // init Masonry after all images have loaded
//  $grid.masonry({
//    // options...
//      itemSelector: '.grid-item',
//        columnWidth: 200
//  });
//});