function setBlogContentHeight() {
  var windowHeight = $(window).height();
  var navHeight = 76;
  var headerHeight = $(".header").height();
  console.log(headerHeight);
  var sliderHeight = $(".slider").height();
  console.log(sliderHeight);
  var blogContentHeight = windowHeight - (navHeight + headerHeight + sliderHeight)
  
  $(".blogContent").css("height", blogContentHeight);
}

setBlogContentHeight();