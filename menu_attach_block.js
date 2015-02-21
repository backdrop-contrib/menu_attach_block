(function ($) {
  // Implement a show/hide.
  Drupal.behaviors.menu_attach_block = {
    attach: function (context, settings) {
      $('a.menu-attach-block-drop-link.expand-on-hover', context).hover(function() {
        if (!($(this).hasClass('dropped'))) {
          expand_toggle($(this));
        }
      }, function() { return false; });

      $('li', context).hover(function() { return false; }, function() {
        var link = $(this).find('a.menu-attach-block-drop-link.expand-on-hover.dropped');

        if ($(link).length) {
          expand_toggle(link);
        }
      });

      $('a.menu-attach-block-drop-link.expand-on-click', context).click(function(event) {
        expand_toggle($(this));
        event.preventDefault();
      });

      function expand_toggle(link) {
        if (link.hasClass('menu-ajax-enabled')) {
          // Load contents using AJAX.
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

                $(link).next('.menu-attach-block-wrapper').slideToggle('fast');
                $(link).toggleClass('dropped');
              }
            });
          } else {
            $(link).next('.menu-attach-block-wrapper').slideToggle('fast');
            $(link).toggleClass('dropped');
          }
        } else {
          $(link).next('.menu-attach-block-wrapper').slideToggle('fast');
          $(link).toggleClass('dropped');
        }
      }
    }
  }
}(jQuery));
