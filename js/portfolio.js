$('.header-container').on("click tap", function() {
  var accordionButton = $(this).children().first();

  if ($(accordionButton).hasClass("open")) {
    $(accordionButton).removeClass("open");
    $(accordionButton).addClass("closed");
  } else {
    $(accordionButton).removeClass("closed");
    $(accordionButton).addClass("open");
  }

  var content = $(this).next();
  var section = $(this).parent();

  if (content.hasClass("open")) {
    content.removeClass("open");
    content.addClass("closed");
    section.css("padding", "0 0");
  } else {
    content.removeClass("closed");
    content.addClass("open");
    section.css("padding", "50px 0");
  }
})
