$(window).on("scroll", function() {
  animateNav();
});

$(window).on("resize", function() {
  console.log(getDevice());
});

function getDevice() {
  // mobile: 0 - 640
  // tablet: 640 - 1024
  // desktop: 1024 +

  var width = $(window).width();
  if (width <= 640) {
    return "mobile";
  } else if (width > 640 && width <= 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
}

function animateNav () {
  var scrollPosition = $(document).scrollTop();

  if (scrollPosition < 20) {
    $(".nav").removeClass("notTop");
  } else {
    $(".nav").addClass("notTop");
  }
}
