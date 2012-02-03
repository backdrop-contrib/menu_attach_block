(function ($) {
  // Implement an extremely simplistic show/hide.
  Drupal.behaviors.menu_attach_block = {
    attach: function (context, settings) {
      $('.menu-attach-block', context).siblings('a')
        .hover(
          function(){$(this).nextAll('.menu-attach-block').slideDown('fast');},
          function(){$(this).nextAll('.menu-attach-block').slideUp('fast');}
        )
    }
  };
  
}(jQuery));
