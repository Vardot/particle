/*! outline.js v1.2.0 - https://github.com/lindsayevans/outline.js/ 
This removes the outline feature if a mouse is being used.
*/
(function ($, Drupal, drupalSettings) {
  // Adds slick arrows
  Drupal.behaviors.slickcustomarrows = {
    attach(context, settings) {
      (function (d) {
        console.log("search-accessibility js loaded.");
        const style_element = d.createElement("STYLE");
        const dom_events = "addEventListener" in d;
        const add_event_listener = function (type, callback) {
          // Basic cross-browser event handling
          if (dom_events) {
            d.addEventListener(type, callback);
          } else {
            d.attachEvent(`on${type}`, callback);
          }
        };
        const set_css = function (css_text) {
          // Handle setting of <style> element contents in IE8
          style_element.styleSheet
            ? (style_element.styleSheet.cssText = css_text)
            : (style_element.innerHTML = css_text);
        };
        d.getElementsByTagName("HEAD")[0].appendChild(style_element);

        // Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
        add_event_listener("mousedown", function () {
          set_css(
            ":focus,:focus-visible{outline:0}::-moz-focus-inner{border:0;}",
          );
        });

        add_event_listener("keydown", function () {
          set_css("");
        });
      })(document);
    },
  };
})(jQuery, Drupal, drupalSettings);
