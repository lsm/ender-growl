var growl = require('growl');
!function ($) {
  $.ender({
    gritter: growl, // backward compatibility
    growl: growl
  });
}(ender);