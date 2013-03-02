(function ($) {
  // Implement a show/hide.
  Drupal.behaviors.menu_attach_block = {
    attach: function (context, settings) {
      $('a.menu-attach-block-drop-link', context).click(function(event) {
        var link = $(this);
        if (link.hasClass('menu-ajax-enabled')) { // Load contents using ajax
          if (!link.hasClass('menu-ajax-loaded')) {
            ajax_path = Drupal.settings.basePath + 'menu_attach_block/ajax/' + (link).attr('data-block-id');
            $.ajax({
              type: 'GET',
              url: ajax_path,
              data: '',
              dataType: 'HTML',
              success: function ($block_html) {
                $(link).next('.menu-attach-block-wrapper').html($block_html);
                Drupal.attachBehaviors(link);
              }
            });
          }
        }
        $(link).next('.menu-attach-block-wrapper').slideToggle('fast');
        $(link).parent().toggleClass('dropped');
        event.preventDefault();
      });
      // Prevent other Javascript from affecting the display of drop links.
      $('.menu-attach-block-drop-link')
        .hover(function(){return false;}, function(){return false;});
    }
  }
}(jQuery));
