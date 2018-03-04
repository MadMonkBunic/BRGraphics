var $grid = $('.masonry').masonry({
  // options
  itemSelector: '.item',
  columnWidth: 200
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


//var $grid = $('.grid').imagesLoaded( function() {
//  // init Masonry after all images have loaded
//  $grid.masonry({
//    // options...
//      itemSelector: '.grid-item',
//        columnWidth: 200
//  });
//});