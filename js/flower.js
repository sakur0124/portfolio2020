"use strict";

{
  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() >
      $(".peoplePicture img").offset().top - $(window).height() / 2
    ) {
      $(".peoplePicture").addClass("toShow");
      $(".text p").addClass("toShow");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $("footer").offset().top - $(window).height()) {
      $("footer .sns li").each(function (i) {
        $(this)
          .delay(i * 300)
          .queue(function (next) {
            $(this).addClass("toShow");
            next();
          });
      });
      $(".opHours").addClass("toShow");
    }
  });

  $(".toHide").on("click", function () {
    // $(".mainContent").toggleClass("toShow");
    $(".hideContent").toggleClass("toShow");
    $(".toHide").toggleClass("toMove");
  });
}
