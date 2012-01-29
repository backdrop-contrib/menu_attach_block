# Menu Attach Block

Menu Attach Block allows you to embed blocks in menu items. You may choose to
replace a menu item entirely with a block, or keep the menu link and embed the
block after it in the wrapper element.

Embedded blocks will appear like this in the menu:

  <li class="menu-346 first">
    <a href="/node/1">Node</a>
      <div class="menu-attach-block">
      // block HTML goes here
     </div>
  </li>

## Getting started

* Download and install the module as usual. Check here
<http://drupal.org/documentation/install/modules-themes/modules-7> if you need
 help.
* Go to the Menu admin page at admin/structure/menu.
* Click 'List links' on the menu you want to edit.
* Click 'Edit' on the menu item you want to attach a block to.
* Select a block in the 'Attach Block' fieldset.
  * If you want to replace the menu link entirely, set <block> as the path.

The block will now appear in your menu.