$(window).on("scroll", function() {
  if (getDevice() !== "mobile") {
    animateNav();
  }
});

$(window).on("resize load", function() {
  var device = getDevice();
  if (device === 'mobile') {
    // $(".nav").css("display", "none");
  } else if (device === 'tablet') {
    // $(".nav").css("display", "block");
  } else {
    // $(".nav").css("display", "block");
  }
});

function getDevice() {
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
