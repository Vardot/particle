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
