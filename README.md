# Menu Attach Block

Menu Attach Block allows you to embed blocks in menu items. You may choose to
replace a menu item entirely with a block, or keep the menu link and embed the
block after it in the wrapper element.

Some basic JavaScript and CSS is included. You can override the Javascript by
altering Backdrop.behaviors.menu_attach_block.

Embedded blocks respect block page and permissions settings.

## Installation

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.
- Go to Structure > Menus (admin/structure/menu) > Manage Links.
- Add a new sub-menu or edit existing sub-menu you want to attach a block to.
- Select a block in the 'Attach Block' fieldset.
  * If you want to replace the menu link entirely, set <block> as the path.
- The attached block will now appear in your menu.

## Issues

Bugs and Feature requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/menu_attach_block issues.

## Current Maintainers

- [Alan Mels](https://github.com/alanmels).
- Seeking additional maintainers.

## Credits

- Ported to Backdrop CMS by [Alan Mels](https://github.com/alanmels).
- Originally written for Drupal by [Cameron Tod](https://github.com/cam8001).
- Sponsored by [AltaGrade](https://www.altagrade.com)

## License

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.
