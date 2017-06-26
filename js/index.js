var x = 0;
var intervalFunction;

function animateContactDiv() {
  intervalFunction = setInterval(flash, 500);
}

function flash() {
  var div = $(".contactDiv");
  x++;

  if (div.hasClass("flash")) {
    div.removeClass("flash");
  } else {
    div.addClass("flash");
  }

  if (x === 20) {
    div.removeClass("flash");
    clearInterval(intervalFunction);
  }
}

$(window).on("load", function() {
  var queryString = location.search;
  if (queryString.length > 0) {
    animateContactDiv();
  }
});
