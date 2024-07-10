/* eslint func-names: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
/* eslint object-shorthand: 0 */
/* eslint no-undef: 0 */
(function ($, Drupal, drupalSettings) {
  // Adds slick arrows
  Drupal.behaviors.slickcustomarrows = {
    attach: function (context, settings) {
      if ($(".slick-next").children().length === 0) {
        $('<span class="fas fa-chevron-right"</span>').appendTo(
          $(".slick-next"),
        );
      }
      if ($(".slick-prev").children().length === 0) {
        $('<span class="fas fa-chevron-left"</span>').appendTo(
          $(".slick-prev"),
        );
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
