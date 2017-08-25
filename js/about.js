$(".openLightbox").on("mouseover tap", function(e) {
  e.preventDefault();
  displayLightbox();
});

function displayLightbox() {
  var div = "<div class='lightboxBackground' onClick='hideLightbox()'></div><img onClick='hideLightbox()' src='../img/einstein.jpg' class='einstein' />"
  $("body").append(div);
}

function hideLightbox() {
  $(".lightboxBackground").remove();
  $(".einstein").remove();
}
