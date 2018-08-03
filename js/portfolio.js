$('.accordion_button').on("click tap", function() {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(this).addClass("closed");
  } else {
    $(this).removeClass("closed");
    $(this).addClass("open");
  }

  var content = $(this).closest(".project_header").next();

  if (content.hasClass("open")) {
    content.removeClass("open")
    content.addClass("closed")
  } else {
    content.removeClass("closed")
    content.addClass("open")
  }
})
