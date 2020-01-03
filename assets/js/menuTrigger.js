$(document).ready(function() {
  const openBtn = $(".open-btn");
  const closeBtn = $(".close-btn");
  const body = $("body");

  openBtn.click(function(e) {
    e.preventDefault();
    // console.log("test");
    $(".left-side-nav").show();
    $(".left-side-nav").fadeIn("slow");
    body.addClass("lock-body");
    console.log("open");
  });

  closeBtn.click(function() {
    $(".left-side-nav").hide();
    $(".left-side-nav").fadeOut("slow");
    body.removeClass("lock-body");
    console.log("close");
  });
});
