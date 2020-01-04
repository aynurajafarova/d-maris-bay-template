$(document).ready(function() {
  const openBtn = $(".open-btn");
  const openBtnWhite = $(".open-btn-white");
  const closeBtn = $(".close-btn");
  const body = $("body");
  const leftSideNav = $(".left-side-nav");

  function showLeftSideNav() {
    leftSideNav.show();
    leftSideNav.fadeIn("slow");
    body.addClass("lock-body");
  }

  openBtn.click(function(e) {
    e.preventDefault();

    showLeftSideNav();
  });

  openBtnWhite.click(function(e) {
    e.preventDefault();

    showLeftSideNav();
  });

  closeBtn.click(function(e) {
    e.preventDefault();

    leftSideNav.hide();
    leftSideNav.fadeOut("slow");
    body.removeClass("lock-body");
  });
});
