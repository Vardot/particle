!function(){var t={337:function(){!function(t,e,n){e.behaviors.backtotopbutton={attach:function(t,e){var n=document.getElementById("scroll-to-top-btn");if(n){n.style.display="none",window.onscroll=function(){document.body.scrollTop>1500||document.documentElement.scrollTop>1500?n.style.display="flex":n.style.display="none"},n.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))}}}}(jQuery,Drupal,drupalSettings)},172:function(){!function(t,e,n){e.behaviors.slickcustomarrows={attach:function(e,n){0===t(".slick-next").children().length&&t('<span class="fas fa-chevron-right"</span>').appendTo(t(".slick-next")),0===t(".slick-prev").children().length&&t('<span class="fas fa-chevron-left"</span>').appendTo(t(".slick-prev"))}}}(jQuery,Drupal,drupalSettings)},845:function(){!function(t,e,n){e.behaviors.superfishaccessibilityattributes={attach:function(t,e){var n,o=document.querySelectorAll(".accessibility-link-attributes");for(n=0;n<o.length;n++)o[n].title=o[n].textContent,o[n].setAttribute("role","link"),o[n].setAttribute("aria-label",o[n].textContent);var r=document.querySelectorAll(".twm-link");for(n=0;n<r.length;n++)r[n].title=r[n].textContent,r[n].setAttribute("role","link"),r[n].setAttribute("aria-label",r[n].textContent);var a=document.querySelector("#mobile-menu-icon"),i=document.querySelector("#mobile-menu");function s(){window.matchMedia("(max-width: 768px)").matches&&(a.setAttribute("aria-hidden","false"),i.setAttribute("aria-hidden","false"))}s(),window.addEventListener("resize",(function(){s()}))}}}(jQuery,Drupal,drupalSettings)},737:function(){!function(t,e,n){e.behaviors.academicprograms={attach:function(e,n){window.location.href.indexOf("majors-overview")>-1&&t("body").addClass("utc-programs-page"),t(window).scroll((function(){t(this).scrollTop()>925?t(".program-table thead").addClass("scrolled"):t(".program-table thead").removeClass("scrolled")}));var o=t(".utc-programs-page .program-page-title-and-crumbs"),r=t(".utc-programs-page .program-overlay");function a(){t(o).css("opacity","1"),t(r).css("z-index","-1")}function i(e){t(".offscreen-program-details").each((function(){t(this).attr("id")===e&&(t(".offscreen-program-details").css("right","-650px").removeClass("detail-open"),t(this).css("right","0").addClass("detail-open")),t(o).css("opacity",".25"),t(r).css("z-index","2")}))}t(r).css({"z-index":"-1",opacity:".75"}),t(".utcloadingcontainer").css("display","none"),t(".program-btn").each((function(){var e=t(this).attr("data-src");t(this).on("click",(function(){i(e)}))})),t(".close-btn").each((function(){var e=t(this).closest(".offscreen-program-details").attr("id");t(this).on("click",(function(){t("#"+e).css("right","-650px"),a()}))})),t(document).mouseup((function(e){0===t(e.target).closest(".offscreen-program-details").length&&(t(".offscreen-program-details").css("right","-650px"),a())}))}}}(jQuery,Drupal,drupalSettings)},237:function(){!function(t,e,n){e.behaviors.blockquote={attach:function(e,n){t("blockquote").each((function(){var e=t(this).html();e=e.replace(/&nbsp;/g," "),t(this).html(e)}))}}}(jQuery,Drupal,drupalSettings)},724:function(){!function(t,e,n){e.behaviors.sidebarmenu={attach:function(e,n){t(document).delegate(".utc-sidebar .more.open","click",(function(){t(this).removeClass("open").addClass("closed"),t(this).parent().removeClass("open")})),t(document).delegate(".utc-sidebar .more.closed","click",(function(){t(this).removeClass("closed").addClass("open"),t(this).parent().addClass("open")}))}}}(jQuery,Drupal,drupalSettings)}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(724),n(172),n(237),n(337),n(845),n(737)}()}();
//# sourceMappingURL=main.js.map