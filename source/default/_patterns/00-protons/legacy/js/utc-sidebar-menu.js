/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
/* eslint object-shorthand: 0 */
/* eslint no-undef: 0 */
/* eslint func-names: 0 */
/* eslint no-unused-vars: 0 */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.sidebarmenu = {
    attach: function (context, settings) {
      $(document).delegate(".utc-sidebar .more.open", "click", function () {
        $(this).removeClass("open").addClass("closed");
        $(this).parent().removeClass("open");
      });
      $(document).delegate(".utc-sidebar .more.closed", "click", function () {
        $(this).removeClass("closed").addClass("open");
        $(this).parent().addClass("open");
      });
    },
  };
})(jQuery, Drupal, drupalSettings);
