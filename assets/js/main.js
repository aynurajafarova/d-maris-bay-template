$(document).ready(function() {
  $(window).scroll(function() {
    const header = $("#headerArea");
    const headerHeight = header.innerHeight();
    const scrollTop = $(this).scrollTop();
    const logoImg = $(".logo-img img");

    if (scrollTop >= headerHeight) {
      header.addClass("scrolled");
      logoImg.attr("src", "./assets/images/logo/logo-sticky.svg");
    } else {
      header.removeClass("scrolled");
      logoImg.attr("src", "./assets/images/logo/logo.svg");
    }
  });
});
