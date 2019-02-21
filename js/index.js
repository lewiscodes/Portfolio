var $ = window.$

$(document).ready(function () {
  $('.name').on('click tap', function () {
    $('html, body').animate({ scrollTop: 0 }, 'fast')
    return false
  })

  $('.slide').css({width: window.innerWidth})
  var slideCount = $('.slider ul li').length
  var slideWidth = $('.slider ul li').width()
  var slideHeight = $('.slider ul li').height()
  var sliderFullWidth = (slideCount * slideWidth)

  $('.slider').css({ width: slideWidth, height: slideHeight })
  $('.slider ul').css({ width: sliderFullWidth, marginLeft: -slideWidth })
  $('.slider ul li:last-child').prependTo('.slider ul')

  $(window).on('resize', function () {
    $('.slide').css({width: window.innerWidth})
    slideCount = $('.slider ul li').length
    slideWidth = $('.slider ul li').width()
    slideHeight = $('.slider ul li').height()
    sliderFullWidth = (slideCount * slideWidth)

    $('.slider').css({ width: slideWidth, height: slideHeight })
    $('.slider ul').css({ width: sliderFullWidth, marginLeft: -slideWidth })
    $('.slider ul li:last-child').prependTo('.slider ul')
  })

  $('a.control_prev').click(function () {
    moveLeft(slideWidth)
  })

  $('a.control_next').click(function () {
    moveRight(slideWidth)
  })
})

function moveRight (slideWidth) {
  $('.slider ul').animate({
    left: -slideWidth
  }, 200, function () {
    $('.slider ul li:first-child').appendTo('.slider ul')
    $('.slider ul').css('left', '')
  })
}

function moveLeft (slideWidth) {
  $('.slider ul').animate({
    left: +slideWidth
  }, 200, function () {
    $('.slider ul li:last-child').prependTo('.slider ul')
    $('.slider ul').css('left', '')
  })
}