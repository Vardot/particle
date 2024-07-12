(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.superfishaccessibilityattributes = {
    attach: function (context, settings) {
      // console.log("sf accessibility js loaded.");
      let getSfLink = document.querySelectorAll(
        ".accessibility-link-attributes",
      );
      let i;
      for (i = 0; i < getSfLink.length; i++) {
        getSfLink[i].title = getSfLink[i].textContent;
        getSfLink[i].setAttribute("role", "link");
        getSfLink[i].setAttribute("aria-label", getSfLink[i].textContent);
      }
      let getSfLink2 = document.querySelectorAll(".twm-link");
      for (i = 0; i < getSfLink2.length; i++) {
        getSfLink2[i].title = getSfLink2[i].textContent;
        getSfLink2[i].setAttribute("role", "link");
        getSfLink2[i].setAttribute("aria-label", getSfLink2[i].textContent);
      }
      let getMobileBtn = document.querySelector("#mobile-menu-icon");
      let getMobileMenu = document.querySelector("#mobile-menu");

      function mobileIconAccessibilityAttr() {
        if (window.matchMedia("(max-width: 768px)").matches) {
          getMobileBtn.setAttribute("aria-hidden", "false");
          getMobileMenu.setAttribute("aria-hidden", "false");
        }
      }
      mobileIconAccessibilityAttr();

      window.addEventListener("resize", function () {
        mobileIconAccessibilityAttr();
      });
    },
  };
})(jQuery, Drupal, drupalSettings);
