function setBlogContentHeight() {
  var windowHeight = $(window).height();
  var navHeight = 76;
  var headerHeight = $(".header").height();
  var sliderHeight = $(".slider").height();
  var blogContentHeight = windowHeight - (navHeight + headerHeight + sliderHeight)

  $(".blogContent").css("height", blogContentHeight);
}

function selectBlogItem(item) {
  $(".item.selected").removeClass("selected");
  $(item).addClass("selected");
}

function itemScrollRight() {
  var $currentItem = $(".item.selected");
  var $nextItem = $(".item.selected").next();

  if ($nextItem.length > 0) {
    $currentItem.removeClass("selected");
    $nextItem.addClass("selected");
    $currentItem = $(".item.selected");
  }

  var titleSliderWidth = parseInt($(".titleSlider").width());
  var titleSliderScrollLeft = parseInt($(".titleSlider").scrollLeft());
  var titleSliderWidthPlusScroll = titleSliderWidth + titleSliderScrollLeft;
  var currentlySelectedItemPosition = parseInt($currentItem.position().left);
  var currentlySelectedItemWidth = parseInt($currentItem.outerWidth()) * -1;

  if (currentlySelectedItemPosition < titleSliderWidthPlusScroll) {
    var scrollAmount = "+=" + ((titleSliderWidth - currentlySelectedItemPosition) + (currentlySelectedItemWidth)) * -1;
    $(".titleSlider").animate({scrollLeft: scrollAmount}, 'fast');
  }
}

function itemScrollLeft() {
  var $currentItem = $(".item.selected");
  var $previousItem = $(".item.selected").prev();

  if ($previousItem.length > 0) {
    $currentItem.removeClass("selected");
    $previousItem.addClass("selected");
    $currentItem = $(".item.selected");
  }

  var titleSliderWidth = parseInt($(".titleSlider").width());
  var titleSliderScrollLeft = parseInt($(".titleSlider").scrollLeft());
  var currentlySelectedItemPosition = parseInt($currentItem.position().left);

  console.log(titleSliderScrollLeft);
  console.log(currentlySelectedItemPosition);


  if (titleSliderScrollLeft > currentlySelectedItemPosition) {
    var scrollAmount = "-=" + ((titleSliderScrollLeft - currentlySelectedItemPosition) * -1);
    $(".titleSlider").animate({scrollLeft: scrollAmount}, 'fast');
    console.log(scrollAmount);
  }
}

$(".leftChevron").on("click tap", function() {
  itemScrollLeft();
});

$(".rightChevron").on("click tap", function() {
  itemScrollRight();
});

$(".item").on("click tap", function() {
  selectBlogItem(this);
})

setBlogContentHeight();
