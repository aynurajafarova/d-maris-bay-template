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

document.addEventListener("DOMContentLoaded", function() {
  let smallDevice = window.matchMedia(
    "(min-width: 576px) and (max-width: 767.98px)"
  );

  let extraSmallDevice = window.matchMedia("(max-width: 575.98px)");

  if (smallDevice.matches || extraSmallDevice.matches) {
    document.getElementById("headerArea").classList.add("header-small");
  } else {
    document.getElementById("headerArea").classList.remove("header-small");
  }
});
