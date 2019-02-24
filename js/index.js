var $ = window.$
var selectedSlide = 1
var slideCount = null
var slideWidth = null
var slideHeight = null
var sliderFullWidth = null

$(document).ready(function () {
  $('.name').on('click tap', function () {
    $('html, body').animate({ scrollTop: 0 }, 750)
    return false
  })

  $('.work').on('click tap', function () {
    var target = $('.section.work').offset()
    target.top = target.top - 50
    
    $('html, body').animate({
      scrollTop: target.top
    }, 750);
  })

  $('.slide').css({width: window.innerWidth})
  slideCount = $('.slider ul li').length
  slideWidth = $('.slider ul li').width()
  sliderFullWidth = (slideCount * slideWidth)

  $('.slider').css({ width: slideWidth })
  $('.slider ul').css({ width: sliderFullWidth, marginLeft: -slideWidth })
  $('.slider ul li:last-child').prependTo('.slider ul')

  $(window).on('resize', function () {
    $('.slide').css({width: window.innerWidth})
    slideCount = $('.slider ul li').length
    slideWidth = $('.slider ul li').width()
    sliderFullWidth = (slideCount * slideWidth)

    $('.slider').css({ width: slideWidth, height: slideHeight })
    $('.slider ul').css({ width: sliderFullWidth, marginLeft: -slideWidth })
    $('.slider ul li:last-child').prependTo('.slider ul')
  })

  $('a.control_prev').click(function () {
    moveLeft(slideWidth)
    setDot('prev')
  })

  $('a.control_next').click(function () {
    moveRight(slideWidth)
    setDot('next')
  })
})

function setDot (direction) {
  if (direction === 'next') {
    if (selectedSlide === $('.slide').length) {
      selectedSlide = 1
    } else {
      selectedSlide++
    }
  } else {
    if (selectedSlide === 1) {
      selectedSlide = $('.slide').length
    } else {
      selectedSlide--
    }
  }

  $('.dot.selected').removeClass('selected')
  $($('.dot')[selectedSlide - 1]).addClass('selected')
}

function moveRight (slideWidth) {
  $('.slider ul').animate({
    left: -slideWidth
  }, 750, function () {
    $('.slider ul li:first-child').appendTo('.slider ul')
    $('.slider ul').css('left', '')
  })
}

function moveLeft (slideWidth) {
  $('.slider ul').animate({
    left: +slideWidth
  }, 750, function () {
    $('.slider ul li:last-child').prependTo('.slider ul')
    $('.slider ul').css('left', '')
  })
}
