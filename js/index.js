$(window).on("scroll", function() {
  if (getDevice() !== "mobile") {
    animateNav();
  }
});

$(window).on("resize load", function() {
  var device = getDevice();
  if (device === 'mobile') {
    closeMobileNav();
    handleMobileNav();
  } else if (device === 'tablet') {
    closeMobileNav();
  } else {
    closeMobileNav();
  }
});

$(".contact").on("click tap", function() {
  event.preventDefault();
  
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

function handleMobileNav() {
  $(".mobileNavButton").on("click tap", function() {
    if ($(".mobileNavButton").hasClass("open")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  })
}

function openMobileNav() {
  $(".mobileNavButton").removeClass("closed");
  $(".mobileNavButton").addClass("open");
  $(".mobileNavWrapper").removeClass("closed");
  $(".mobileNavWrapper").addClass("open");
  $(".bodyContainer").removeClass("closed");
  $(".bodyContainer").addClass("open");
}

function closeMobileNav() {
  $(".mobileNavButton").removeClass("open");
  $(".mobileNavButton").addClass("closed");
  $(".mobileNavWrapper").removeClass("open");
  $(".mobileNavWrapper").addClass("closed");
  $(".bodyContainer").removeClass("open");
  $(".bodyContainer").addClass("closed");
}
