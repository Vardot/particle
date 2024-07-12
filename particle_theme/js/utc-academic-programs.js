(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.academicprograms = {
    attach: function (context, settings) {
      // console.log("utc-academic-programs.js is loaded.")
      if (window.location.href.indexOf("majors-overview") > -1) {
        $("body").addClass("utc-programs-page");
      }
      $(window).scroll(function () {
        if ($(this).scrollTop() > 925) {
          $(".program-table thead").addClass("scrolled");
        } else {
          $(".program-table thead").removeClass("scrolled");
        }
      });
      let programHeadline = $(
        ".utc-programs-page .program-page-title-and-crumbs",
      );
      let programOverlay = $(".utc-programs-page .program-overlay");

      $(programOverlay).css({ "z-index": "-1", opacity: ".75" });
      $(".utcloadingcontainer").css("display", "none");

      function ghostMainContent() {
        $(programHeadline).css("opacity", ".25");
        $(programOverlay).css("z-index", "2");
      }
      function unghostMainContent() {
        $(programHeadline).css("opacity", "1");
        $(programOverlay).css("z-index", "-1");
      }
      function togglediv(getProgramBtnDetailId) {
        $(".offscreen-program-details").each(function () {
          let detailId = $(this).attr("id");
          if (detailId === getProgramBtnDetailId) {
            $(".offscreen-program-details")
              .css("right", "-650px")
              .removeClass("detail-open");
            $(this).css("right", "0").addClass("detail-open");
          }
          ghostMainContent();
        });
      }
      $(".program-btn").each(function () {
        let getProgramBtnDetailId = $(this).attr("data-src");
        $(this).on("click", function () {
          togglediv(getProgramBtnDetailId);
        });
      });
      $(".close-btn").each(function () {
        let parentId = $(this).closest(".offscreen-program-details").attr("id");
        $(this).on("click", function () {
          $("#" + parentId).css("right", "-650px");
          unghostMainContent();
        });
      });
      $(document).mouseup(function (e) {
        if ($(e.target).closest(".offscreen-program-details").length === 0) {
          $(".offscreen-program-details").css("right", "-650px");
          unghostMainContent();
        }
      });
    },
  };
})(jQuery, Drupal, drupalSettings);
