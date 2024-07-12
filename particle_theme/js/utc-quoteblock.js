/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
/* eslint object-shorthand: 0 */
/* eslint no-undef: 0 */
/* eslint func-names: 0 */
/* eslint no-unused-vars: 0 */
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.blockquote = {
    attach: function (context, settings) {
      // Remove any "&nbsp;" from blockquotes bc this interferes with formatting
      $("blockquote").each(function () {
        let blockQuote = $(this).html();
        blockQuote = blockQuote.replace(/&nbsp;/g, " ");
        $(this).html(blockQuote);
      });
    },
  };
})(jQuery, Drupal, drupalSettings);
