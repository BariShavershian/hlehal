$(document).ready(function () {
  $(function () {
    // nav
    $(".nav__btn").click(function () {
      $(".nav").toggleClass("active");
    });
  });
  // slide
  $(".team-box-container").slick({
    arrows: false,
    dots: true,
  });
  // tab
  $(".tabs-container__link").click(function (e) {
    e.preventDefault();
    const tab_id = $(this).attr("href");

    $(".tabs-container__link").removeClass("active");
    $(".tabs-container-block").removeClass("active");

    $(this).addClass("active");
    $(tab_id).addClass("active");
  });
});
