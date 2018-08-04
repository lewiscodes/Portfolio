$('.accordion_button').on("click tap", function() {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(this).addClass("closed");
  } else {
    $(this).removeClass("closed");
    $(this).addClass("open");
  }

  var content = $(this).parent().next();
  var section = $(this).parent().parent();

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
